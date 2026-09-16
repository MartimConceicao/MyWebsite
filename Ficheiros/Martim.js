const traducoes = {
    pt: { 
        // MENU
        menu_home: "Sobre Mim",
        menu_projects: "Os Meus Projetos", 
        menu_academic: "Percurso Académico", 
        menu_contact: "Contactos",
        
        // HOME
        home_t1: "Quem sou",
        home_d1: "Um rapaz de 21 anos, recém-licenciado em Engenharia Informática, à procura de uma oportunidade na área da tecnologia para aprender e crescer profissionalmente. desde pequeno tive sempre interesse em tecnologia, o meu primeiro computador foi um magalhães, onde perdia horas a fazer powerpoints com presets de imagens que o magalhães tinha. também tive muito contacto à tecnologia a partir dos jogos, fosse na playstation ou em consolas portáteis, sempre gostei de explorar e acredito que foi a partir daí que ganhei este gosto pela tecnologia e saber como as coisas funcionam.",
        home_t2: "Passatempos",
        home_d2: "Para além da tecnologia tenho outras duas paixões que me acompanham desde pequeno, o desporto motorizado e a música. Lembro-me de ser pequeno e ir com o meu pai ao autódromo ver os carros, na altura não percebia nada mas sempre gostei muito,fosse pelo barulho ou pela cor dos carros. Hoje em dia sou mais velho mas continuo a ter a oportunidade de ir ver corridas com o meu pai, e hoje em dia já percebo um pouco mais do que se passa na pista. A música também faz parte da minha vida à muito tempo, gosto bastante de descobrir música e artistas novos, ir a concertos e festivais e mais recentemente comecei a colecionar música em formato físico.",
        home_t3: "Skills",
        home_d3: "Hard skills: HTML/CSS, JavaScript, Python, Kotlin, C/C++, Bases de dados (SQL, Firebase), UI/UX Design, Git/GitHub.\n\nSoft skills: Trabalho em equipa, comunicação, resolução de problemas, proatividade, criatividade.",

        // PROJETOS
        proj_t1: "SoundMarket",
        proj_d1: "Aplicação mobile, que serve de marketplace e tracker de música em formato físico. Desenvolvido em Kotlin, o SoundMarket utiliza a API do spotify para fornecer informações detalhadas sobre álbuns, artistas e faixas bem como uma própria API para gerir as informações dos utilizadores. Os utilizadores podem criar listas de desejos, ver a sua coleção de música e comprar/vender a mídia física. Foi utilizada uma base de dados Sql para aramazenar informações dos utilizadores e das suas coleções. Esta base de dados vai sendo complementada API do spotify à medida que os utiliazdores acrescenta, ou removem, álbuns da sua coleção.",
        proj_t2: "UnityBJJ",
        proj_d2: "Aplicação web fullstack para gestão de academias de jiu-jitsu. Permite aos instrutores gerir os alunos e o seu progresso, horários, pagamentos e estatísticas gerais da academia. Os alunos podem aceder a informações sobre as aulas e a sua presença, bem como a estatísticas sobre o seu progresso, tem ainda acesso a uma zona de pagamentos das mensalidades onde também podem ver o seu histórico de pagamentos. A aplicação foi desenvoliva em HTML, CSS, javascript, Node.js, express e foi utilizado o firebase para a base de dados e autenticação dos utilizadores.",
        proj_t3: "VulnerAI",
        proj_d3: "Aplicação web fullstack com modelo freemium que permite a um utilizador fazer scans de redes e detetar vulnerabilidades. Na versão gratuita, o utilizador pode fazer scans de redes de forma limitada, enquanto que na versão premium não existem limitações e o utilizador ainda tem acesso a uma IA que analisa os resultados dos scans e dá sugestões de como mitigar as vulnerabilidades encontradas. A aplicação foi desenvolvida em HTML, CSS, javascript, firebase e o motor principal da aplicação é o nmap, que é a ferramenta que permite fazer scans de redes.",
        proj_t4: "HandWasher",
        proj_d4: "Projeto feito em colaboração com a SNIPI de oeiras para ajudar crianças com deficiências motoras a aprender a lavar as mãos corretamente. Este projeto consiste em hardware e firmware, e foram desenvolvidos 3 protótipos dos quais 2 foram desenvolvidos a 100%. o primeiro era uma tartaruga que dava instruções acompanhadas de luzes e movimentos para mostrar o tempo de cafa fase. O segundo era um mergulhador que utilizava um sensor de movimento para detetar a criança e dispensar sabonete, também tinha uma série de instruções acompanhadas de música e matrizes led que auxiliavam a saber quando mudava de fase.",
        proj_t5: "Carro πkeno X-34",
        proj_d5: "O objetivo deste projeto foi construir um carro que fosse capaz de percorrer um circuito de forma autónoma, evitando os obstáculos que se encontravam no caminho. O circuito tinha 3 obstáculos, uma parede para testar a deteção de obstáculos, um terreno irregular para testar a capacidade de se manter na pista e uma rampa para testar a capacidade de subir com a velocidade certa para passar a rampa mas não sair da pista. O carro foi feito com um ESP32, 2 motores, 2 sensores de linha, 2 sensores de distância e uma bateria. ",
        proj_t6: "PSP Lisboa",
        proj_d6: "Aplicação mobile com o objetivo de ajudar os utilizadores a encontrarem a esquadra mais próxima. Esta aplicação inclui todas as esquadras de Lisboa, com as respetivas informações de contacto, horários e divisões. Esta aplicação foi desenvolvida durante o Tech4Good 2026, um hackathon organizado pelo IADE e esta aplicação obteve o primeiro lugar da competição na sua categoria. A aplicação foi desenvolvida em Kotlin, firebase, e utiliza o Google Maps SDK para mostrar a localização das esquadras e a rota mais rápida para chegar a elas. Para saber as divisões de cada esquadra, foi utilizada a base de dadis da PSP.",

        // ACADÉMICO
        acad_t1: "Licenciatura",
        acad_d1: "Fiz uma licenciatura em Engenharia Informática no IADE, onde o ensino é muito baseado em PBL (Project-Based Learning), o que me permitiu desenvolver competências técnicas e de trabalho em equipa. Durante a licenciatura, tive a oportunidade de trabalhar em vários projetos, alguns deles em colaboração com empresas e outros cursos, o que me permitiu aplicar os conhecimentos adquiridos na prática.",
        acad_t2: "Workshops",
        acad_d2: "Fiz um Workshop de Git e Github (2024), onde aprendi e coloquei na prática os conhecimentos adquiridos. Fiz também um Workshop de aprender a Soldar (2026) onde aprendi a soldar os componentes eletrónicos que utilizei no projeto do HandWasher e do Carro autónomo. Participei também no Hackathon Tech4Good 2026, que teve como parceiro a PSP, onde desenvolvemos uma aplicação mobile para ajudar utilizadores a encontrarem a esquadra mais próxima, e obtivemos o primeiro lugar na competição na nossa categoria.",
        acad_t3: "Idiomas",
        acad_d3: "Português (Nativo) e Inglês (B2/C1).",

        // CONTACTOS
        cont_t1: "Contactos",
        cont_d1: "Envia-me um email para falarmos sobre novas ideias e oportunidades.",
        cont_t2: "Redes",
        cont_d2: "Conecta-te comigo no LinkedIn ou vê o meu código no GitHub.",
        cont_t3: "Currículo",
        cont_d3: "Faz o download do meu CV em formato PDF para veres o meu percurso em detalhe.",

        // outros
        btn_github: "Ver no GitHub ↗",
        btn_github2: "Não disponível",
        btn_cv: "Descarregar CV",
    },
en: { 
        // MENU
        menu_home: "About Me",
        menu_projects: "My Projects", 
        menu_academic: "Academic Journey", 
        menu_contact: "Contacts",
        
        // HOME
        home_t1: "Who I am",
        home_d1: "A 21-year-old recent graduate in Computer Engineering, looking for an opportunity in the tech field to learn and grow professionally. Ever since I was little, I've always had an interest in technology. My first computer was a Magalhães, where I spent hours making PowerPoints using its preset image templates. I also had a lot of early exposure to technology through gaming, whether on the PlayStation or handheld consoles. I've always loved exploring, and I believe that's where I developed my passion for technology and figuring out how things work.",
        home_t2: "Hobbies",
        home_d2: "Besides technology, I have two other passions that have stayed with me since childhood: motorsports and music. I remember being little and going with my dad to the racetrack to watch the cars. At the time I didn't understand much, but I always loved it, whether for the noise or the colors of the cars. Nowadays I'm older and still get the chance to go see races with my dad, and these days I understand a bit more about what's happening on the track. Music has also been a part of my life for a long time; I really enjoy discovering new music and artists, going to concerts and festivals, and more recently, I've started collecting physical music formats.",
        home_t3: "Skills",
        home_d3: "Hard skills: HTML/CSS, JavaScript, Python, Kotlin, C/C++, Databases (SQL, Firebase), UI/UX Design, Git/GitHub.\n\nSoft skills: Teamwork, communication, problem-solving, proactivity, creativity.",

        // PROJETOS
        proj_t1: "SoundMarket",
        proj_d1: "Mobile application that serves as a marketplace and physical music format tracker. Developed in Kotlin, SoundMarket uses the Spotify API to provide detailed information about albums, artists, and tracks, as well as a custom backend API to manage user data. Users can create wishlists, view their music collection, and buy/sell physical media. A SQL database was used to store user information and their collections. This database is complemented by the Spotify API as users add or remove albums from their collection.",
        proj_t2: "UnityBJJ",
        proj_d2: "Fullstack web application for managing jiu-jitsu academies. It allows instructors to manage students and their progress, schedules, payments, and general academy statistics. Students can access class schedules, attendance details, and progress statistics, as well as a monthly payment area where they can also view their payment history. The application was developed using HTML, CSS, JavaScript, Node.js, Express, and Firebase for the database and user authentication.",
        proj_t3: "VulnerAI",
        proj_d3: "Fullstack web application with a freemium model that allows users to run network scans and detect vulnerabilities. In the free version, users can perform network scans with limitations, while the premium version removes restrictions and grants access to an AI that analyzes scan results and provides suggestions on how to mitigate the vulnerabilities found. The application was developed using HTML, CSS, JavaScript, and Firebase, with Nmap as the core scanning engine.",
        proj_t4: "HandWasher",
        proj_d4: "Project developed in collaboration with SNIPI de Oeiras to help children with motor disabilities learn how to wash their hands correctly. This project consists of hardware and firmware, resulting in 3 prototypes of which 2 were fully developed (100%). The first was a turtle that gave instructions accompanied by lights and movements to show the timing of each stage. The second was a diver that used a motion sensor to detect the child and dispense soap, featuring a series of instructions accompanied by music and LED matrices to help guide them through each stage.",
        proj_t5: "Carro πkeno X-34",
        proj_d5: "The goal of this project was to build a car capable of autonomously navigating a track while avoiding obstacles along the way. The track featured 3 obstacles: a wall to test obstacle detection, rough terrain to test the ability to stay on track, and a ramp to test the ability to climb with the right speed to clear the ramp without running off the course. The car was built using an ESP32, 2 motors, 2 line sensors, 2 distance sensors, and a battery.",
        proj_t6: "PSP Lisboa",
        proj_d6: "Mobile application aimed at helping users find the nearest police station. This app includes all stations in Lisbon, complete with contact details, operating hours, and divisions. Developed during Tech4Good 2026, a hackathon organized by IADE,this application won first place in its category. The app was built using Kotlin, Firebase, and the Google Maps SDK to display station locations and the fastest route to reach them. The PSP database was utilized to retrieve the specific divisions for each station.",

        // ACADÉMICO
        acad_t1: "Bachelor's Degree",
        acad_d1: "I earned a Bachelor's degree in Computer Engineering at IADE, where teaching is heavily based on PBL (Project-Based Learning), allowing me to develop strong technical and teamwork skills. Throughout the degree, I had the opportunity to work on various projects, some in collaboration with companies and other departments, which allowed me to put theoretical knowledge into practice.",
        acad_t2: "Workshops",
        acad_d2: "I completed a Git and GitHub Workshop (2024), where I learned and put acquired knowledge into practice. I also took a Soldering Workshop (2026) to learn how to solder the electronic components used in the HandWasher and autonomous car projects. Additionally, I participated in the Tech4Good 2026 Hackathon, partnered with the PSP, where we developed a mobile application to help users find the nearest police station, securing first place in our category.",
        acad_t3: "Languages",
        acad_d3: "Portuguese (Native) and English (B2/C1).",

        // CONTACTOS
        cont_t1: "Contacts",
        cont_d1: "Send me an email to talk about new ideas and opportunities.",
        cont_t2: "Socials",
        cont_d2: "Connect with me on LinkedIn or check out my code on GitHub.",
        cont_t3: "Resume",
        cont_d3: "Download my CV in PDF format to see my background in detail.",

        // OUTROS
        btn_github: "View on GitHub ↗",
        btn_github2: "Not available",
        btn_cv: "Download CV"
    }
};

// --- WEB AUDIO API
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

            // 5. NOVA ANIMAÇÃO: O Dealer a dar as cartas (Polaroids)
// 5. O Dealer a atirar as cartas GIGANTES para fora da caixa
            const card1 = this.querySelector('.card-1');
            const card2 = this.querySelector('.card-2');
            
            if (card1 && card2) {
                // Atira a carta 1 para a Esquerda/Cima
                anime({
                    targets: card1,
                    translateX: -140, // Vai 140px para a esquerda (fora da caixa)
                    translateY: -80,  // Sobe 80px
                    rotate: -25,      // Roda para a esquerda
                    opacity: 1,
                    duration: 800,
                    easing: 'easeOutElastic(1, .8)', // Efeito elástico super porreiro
                    delay: 200
                });

                // Atira a carta 2 para a Direita/Baixo
                anime({
                    targets: card2,
                    translateX: 140, // Vai 140px para a direita
                    translateY: 80,  // Desce 80px
                    rotate: 30,      // Roda para a direita
                    opacity: 1,
                    duration: 800,
                    easing: 'easeOutElastic(1, .8)',
                    delay: 350 // Sai um bocadinho depois da primeira
                });
            }
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
                width: '100%', 
                height: '120px', 
                paddingLeft: '20px', paddingRight: '20px', 
                borderWidth: '1px',
                opacity: 1, 
                duration: 500, easing: 'easeOutExpo' 
            });
        });

        anime({ targets: hiddenContent, height: 0, opacity: 0, marginTop: 0, duration: 300, easing: 'easeOutExpo' });
        anime({ targets: btn, opacity: 0, duration: 200, easing: 'linear' });

        // Esconder as Polaroids de novo
        // Esconder as Polaroids gigantes de volta
        const polaroids = box.querySelectorAll('.polaroid-gigante');
        if (polaroids.length > 0) {
            anime({
                targets: polaroids,
                translateX: 0,
                translateY: 0,
                rotate: 0,
                opacity: 0,
                duration: 300,
                easing: 'easeInQuad'
            });
        }
    }
    // -------------------------------------------------------------

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