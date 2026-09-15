const traducoes = {
    pt: { 
        menu_about: "Sobre Mim", menu_products: "Os Meus Projetos", menu_academic: "    Percurso Académico", menu_contact: "Contactos",
        desc_home: "Bem-vindo ao interior do meu frigorífico! Aqui guardo as minhas melhores ideias.",
        desc_about: "Sou um Web Developer focado em criar experiências imersivas.",
        desc_products: "Os meus trabalhos mais frescos e recentes.",
        desc_services: "A minha formação e experiência adquirida ao longo dos anos."
    },
    en: { 
        menu_about: "About Me", menu_products: "My Projects", menu_academic: "Academic Journey", menu_contact: "Contact Me",
        desc_home: "Welcome inside my fridge! Here is where I keep my best ideas.",
        desc_about: "I'm a Web Developer focused on crafting immersive experiences.",
        desc_products: "My freshest and most recent work.",
        desc_services: "My education and experience acquired over the years."
    }
};

// --- WEB AUDIO API COM TRUQUE "ALWAYS AWAKE" ---
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const buffers = [];
const urlsSons = ['../Anexos/ImanV1.mp3', '../Anexos/ImanV2.mp3'];
let primeiraVez = true;
let audioDesbloqueado = false;

// Carrega os áudios para a memória
Promise.all(urlsSons.map(url => 
    fetch(url)
        .then(res => res.arrayBuffer())
        .then(dadosAudio => audioCtx.decodeAudioData(dadosAudio))
)).then(dadosDescodificados => {
    buffers.push(...dadosDescodificados);
}).catch(err => console.error("Erro ao carregar áudio:", err));

// O SEGREDO: Função que impede o áudio de adormecer
function manterAudioAcordado() {
    if (audioDesbloqueado) return;
    
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    
    // Cria um som infinito (Oscilador)
    const oscilador = audioCtx.createOscillator();
    const silêncio = audioCtx.createGain();
    silêncio.gain.value = 0; // Volume a 0 = Silêncio absoluto
    
    oscilador.connect(silêncio);
    silêncio.connect(audioCtx.destination);
    oscilador.start(0); // Fica a tocar infinitamente sem se ouvir nada
    
    audioDesbloqueado = true;
    
    // Remove os event listeners porque só precisamos de correr isto uma vez
    document.removeEventListener('mousedown', manterAudioAcordado);
    document.removeEventListener('touchstart', manterAudioAcordado);
}

// Fica à escuta do primeiríssimo toque em QUALQUER parte da página
document.addEventListener('mousedown', manterAudioAcordado);
document.addEventListener('touchstart', manterAudioAcordado);

function tocarSomMagnetico() {
    if (buffers.length === 0) return;

    let index = 0;
    if (primeiraVez) {
        primeiraVez = false; 
    } else {
        index = Math.floor(Math.random() * buffers.length); 
    }

    const fonte = audioCtx.createBufferSource();
    fonte.buffer = buffers[index];

    const controloVolume = audioCtx.createGain();
    controloVolume.gain.value = 0.6;

    fonte.connect(controloVolume);
    controloVolume.connect(audioCtx.destination);
    fonte.start(0);
}
// ---------------------------------------------------------

function mudarIdioma(event, idioma) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const chave = el.getAttribute('data-i18n');
        if (traducoes[idioma] && traducoes[idioma][chave]) {
            el.textContent = traducoes[idioma][chave];
        }
    });
    document.querySelectorAll('.lang-magnet').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    tocarSomMagnetico();
}

document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const chave = el.getAttribute('data-i18n');
        if (traducoes['pt'] && traducoes['pt'][chave]) {
            el.textContent = traducoes['pt'][chave];
        }
    });

    // 1º FIX: Navegação do Scroll (Centrar na prateleira)
    document.querySelectorAll('.scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute('href'); 
            const targetSection = document.querySelector(targetId);
            if(targetSection) {
                // block: 'center' faz a perspetiva da prateleira ficar alinhada no ecrã
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    });

    const door = document.getElementById('door');
    let isDoorOpen = false;

// 2º FIX: Rotação da Porta e Reset Magnets
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // ACELERAÇÃO DA PORTA: Mudei de 0.35 para 0.85
        // Agora a porta escancara totalmente logo nos primeiros 160px de scroll!
        const rotation = Math.min(scrolled * 1.65, 140);
        door.style.transform = `rotateY(-${rotation}deg)`;

        if (scrolled > 5) document.body.classList.add('is-lit');
        else document.body.classList.remove('is-lit');

        if (scrolled > 20) {
            isDoorOpen = true;
        } else if (scrolled <= 20 && isDoorOpen) {
            isDoorOpen = false;
            resetMagnets(); 
        }
    });

    // Função original de reset dos ímanes (agora não se perde!)
    function resetMagnets() {
        document.querySelectorAll('.letter, .lang-magnet').forEach(item => {
            item.classList.add('snap-back');
            item.dataset.x = 0;
            item.dataset.y = 0;
            item.style.transform = `translate(0px, 0px) scale(1) translateZ(0)`;
            setTimeout(() => { item.classList.remove('snap-back'); }, 800);
        });
    }

    // -------------------------------------------------------------
    // NOVA SECÇÃO: ANIMAÇÃO DE EXPANSÃO DAS CAIXAS (Acrílicos)
    // -------------------------------------------------------------
    document.querySelectorAll('.food-box').forEach(box => {
        // Cria o botão (X) invisível ao início
        const btnFechar = document.createElement('span');
        btnFechar.innerHTML = '&times;';
        btnFechar.className = 'close-btn';
        box.appendChild(btnFechar);

        box.addEventListener('click', function(e) {
            // Se clicou no X
            if (e.target.classList.contains('close-btn')) {
                fecharCaixa(this);
                return;
            }

            // Ignorar se já estiver expandida
            if (this.classList.contains('expanded')) return;

            const parent = this.closest('.shelf-containers');
            const allBoxes = parent.querySelectorAll('.food-box');
            const hiddenContent = this.querySelector('.box-hidden');
            const btn = this.querySelector('.close-btn');

            this.classList.add('expanded');

            // Medir altura do texto a mostrar
            hiddenContent.style.height = 'auto';
            const targetHeight = hiddenContent.offsetHeight;
            hiddenContent.style.height = '0px';

            // 1. Remove gap do container pai
            anime({ targets: parent, gap: '0px', duration: 500, easing: 'easeOutExpo' });

            // 2. Esconde e encolhe as caixas não clicadas
            allBoxes.forEach(b => {
                if (b !== this) {
                    b.style.pointerEvents = 'none';
                    anime({ 
                        targets: b, 
                        width: '0%', 
                        paddingLeft: '0px', paddingRight: '0px', 
                        borderWidth: '0px', 
                        opacity: 0, 
                        duration: 500, easing: 'easeOutExpo' 
                    });
                }
            });

            // 3. Expande a clicada
            anime({ targets: this, width: '100%', height: '320px', duration: 500, easing: 'easeOutExpo' });
            
            // 4. Mostra o texto e o botão X
            anime({ targets: hiddenContent, height: targetHeight, opacity: 1, marginTop: 15, duration: 500, easing: 'easeOutExpo', delay: 150 });
            anime({ targets: btn, opacity: 1, duration: 300, easing: 'linear', delay: 300 });
        });
    });

    // Função para reverter ao estado de 3 caixas
    function fecharCaixa(box) {
        const parent = box.closest('.shelf-containers');
        const allBoxes = parent.querySelectorAll('.food-box');
        const hiddenContent = box.querySelector('.box-hidden');
        const btn = box.querySelector('.close-btn');

        box.classList.remove('expanded');

        anime({ targets: parent, gap: '15px', duration: 500, easing: 'easeOutExpo' });

        allBoxes.forEach(b => {
            b.style.pointerEvents = 'auto';
            anime({ 
                targets: b, 
                width: '33.33%', 
                height: '120px', 
                paddingLeft: '20px', paddingRight: '20px', 
                borderWidth: '1px',
                opacity: 1, 
                duration: 500, easing: 'easeOutExpo' 
            });
        });

        anime({ targets: hiddenContent, height: 0, opacity: 0, marginTop: 0, duration: 300, easing: 'easeOutExpo' });
        anime({ targets: btn, opacity: 0, duration: 200, easing: 'linear' });
    }
    // -------------------------------------------------------------

    const tituloEl = document.getElementById('hero-title');
    const coresImanes = ['#ff4757', '#1e90ff', '#2ed573', '#ffa502', '#9c88ff', '#ff6b81', '#feca57', '#00d2d3'];
    let corIndex = 0;
    
    if (tituloEl) {
        const textoHtml = tituloEl.innerHTML.replace(/<br\s*[\/]?>/gi, '\n');
        const linhas = textoHtml.split('\n');
        let novoHtml = '';
        
        linhas.forEach((linha, indexLinha) => {
            for (let i = 0; i < linha.length; i++) {
                const char = linha[i];
                if (char === ' ' || char === '\r') {
                    novoHtml += ' '; 
                } else {
                    const cor = coresImanes[corIndex % coresImanes.length];
                    novoHtml += `<span class="letter" style="color: ${cor};" data-x="0" data-y="0">${char}</span>`;
                    corIndex++;
                }
            }
            if (indexLinha < linhas.length - 1) novoHtml += '<br>';
        });
        tituloEl.innerHTML = novoHtml;
        
    }

    anime.timeline({ easing: 'easeOutExpo', duration: 900 })
    .add({ 
        targets: '.hero-title .letter', 
        translateY: [40, 0], 
        opacity: [0, 1], 
        delay: anime.stagger(40, {start: 200}),
        complete: function() {
            document.querySelectorAll('.letter').forEach(letra => {
                letra.style.transform = 'translate(0px, 0px) scale(1) translateZ(0)';
            });
        }
    });

    let itemAtivo = null;
    let offsetX = 0, offsetY = 0;

    function getClientX(e) { return e.touches ? e.touches[0].clientX : e.clientX; }
    function getClientY(e) { return e.touches ? e.touches[0].clientY : e.clientY; }

    function dragStart(e) {
        if(window.scrollY > 20) return; 
        
        itemAtivo = e.target.closest('.letter, .lang-magnet');
        if(!itemAtivo) return;

        anime.remove(itemAtivo);
        itemAtivo.classList.add('dragging');
        itemAtivo.classList.remove('snap-back');

        let currentX = parseFloat(itemAtivo.dataset.x);
        let currentY = parseFloat(itemAtivo.dataset.y);

        offsetX = getClientX(e) - currentX;
        offsetY = getClientY(e) - currentY;
    }

    function dragMove(e) {
        if (!itemAtivo) return;
        e.preventDefault(); 
        
        let newX = getClientX(e) - offsetX;
        let newY = getClientY(e) - offsetY;
        
        itemAtivo.dataset.x = newX;
        itemAtivo.dataset.y = newY;
        itemAtivo.style.transform = `translate(${newX}px, ${newY}px) scale(1.15) translateZ(0)`;
    }

    function dragEnd(e) {
        if (!itemAtivo) return;

        // DISPARA O SOM
        tocarSomMagnetico();

        const el = itemAtivo;
        itemAtivo = null;

        // ADIA AS ALTERAÇÕES VISUAIS
        requestAnimationFrame(() => {
            let currentX = parseFloat(el.dataset.x) || 0;
            let currentY = parseFloat(el.dataset.y) || 0;
            el.style.transform = `translate(${currentX}px, ${currentY}px) scale(1) translateZ(0)`;
            el.classList.remove('dragging');
        });
    }

    const elementosArrastaveis = document.querySelectorAll('.letter, .lang-magnet');
    elementosArrastaveis.forEach(el => {
        el.addEventListener('mousedown', dragStart);
        el.addEventListener('touchstart', dragStart, { passive: false });
    });

    window.addEventListener('mousemove', dragMove);
    window.addEventListener('touchmove', dragMove, { passive: false });
    window.addEventListener('mouseup', dragEnd);
    window.addEventListener('touchend', dragEnd);
});