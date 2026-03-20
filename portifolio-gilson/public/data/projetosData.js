// ficheiro: projetosData.js

export const projetosLista = [
    {
        titulo: "E-commerce Rede Âncora",
        descricao: "Plataforma completa de comércio eletrônico para o setor de autopeças. O projeto conquistou o 3º lugar na feira tecnológica NEXT.",
        tecnologias: ["React", "Node.js", "APIs"],
        categoria: "Frontend",
        linkGithub: "https://github.com/seu-usuario",
        linkDeploy: "#",
        detalhesCompletos: "Desenvolvido em parceria com a Rede Âncora, este projeto visa revolucionar a compra de autopeças. Inclui painel de administração, carrinho de compras dinâmico e integração com meios de pagamento.",
        ano: "2025",
        status: "CONCLUÍDO // PREMIADO",
        equipe: "Grupo G3",
        imagemCard: "../img/projetos/ancora.png", // Imagem que aparece no carrossel
        videoModal: "https://youtu.be/ScF981rHeic?si=w6N9NdLv3p_6xRK_" // Vídeo que roda no painel futurista (HUD)
    },
    {
        titulo: "MAP - Detector de Fadiga",
        descricao: "Protótipo IoT que utiliza visão computacional para monitorar sinais de fadiga.",
        tecnologias: ["Python", "OpenCV", "IoT"],
        categoria: "IoT & Dados",
        linkGithub: "https://github.com/seu-usuario",
        linkDeploy: "#",
        detalhesCompletos: "Utilizando bibliotecas de visão computacional, o sistema mapeia pontos faciais do motorista em tempo real. Caso detecte sonolência prolongada, emite alertas sonoros e visuais.",
        ano: "2026",
        status: "PROTÓTIPO // ATIVO",
        equipe: "Individual",
        imagemCard: "/img/map-fadiga.jpg",
        videoModal: "" // Se deixar vazio, ele exibe a imagem ou o texto de alerta
    },
    {
        titulo: "Sistema de Autoescola",
        descricao: "Aplicação web desenvolvida para otimizar o controle de aulas e processos de uma autoescola.",
        tecnologias: ["Java", "Spring Boot", "REST"],
        categoria: "Backend",
        linkGithub: "https://github.com/seu-usuario",
        linkDeploy: "#",
        detalhesCompletos: "O sistema gerencia todo o ciclo de vida do aluno na autoescola, desde a matrícula até a emissão da CNH, controlando presença e agendamento de aulas práticas.",
        ano: "2025",
        status: "PRODUÇÃO // ESTÁVEL",
        equipe: "Individual",
        imagemCard: "/img/autoescola.jpg",
        videoModal: ""
    }
];