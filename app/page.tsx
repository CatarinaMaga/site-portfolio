import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desenvolvedora e Analista de Sistemas | Catarina Magalhães",
  description:
    "Catarina Magalhães é desenvolvedora, programadora e analista de sistemas. Criação de sistemas, sites, UI/UX, integrações e automações.",
  alternates: { canonical: "https://catarina-magalhaes-portfolio.vercel.app/" },
};

const services = [
  {
    number: "01",
    title: "Desenvolvimento de sistemas sob medida",
    description:
      "Como desenvolvedora de sistemas, transformo processos manuais e ideias em soluções digitais simples, seguras e adequadas à rotina do seu negócio.",
    deliverable: "Mais agilidade e menos retrabalho",
  },
  {
    number: "02",
    title: "Análise de sistemas e melhorias",
    description:
      "Atuo como analista de sistemas para entender o cenário atual, encontrar gargalos e desenhar um caminho mais eficiente antes do desenvolvimento.",
    deliverable: "Decisões mais claras e processos melhores",
  },
  {
    number: "03",
    title: "Desenvolvimento de sites e UI/UX",
    description:
      "Programo sites e interfaces intuitivas, responsivas, acessíveis e otimizadas para que clientes e buscadores encontrem o que precisam.",
    deliverable: "Uma presença digital que gera confiança",
  },
  {
    number: "04",
    title: "Integrações e automações de sistemas",
    description:
      "Conecto sistemas e automatizo tarefas repetitivas para reduzir erros, organizar informações e liberar tempo para o que realmente importa.",
    deliverable: "Informações conectadas e rotina mais leve",
  },
];

const process = [
  {
    step: "01",
    title: "Conversamos",
    text: "Você me conta o desafio em palavras simples. Eu faço as perguntas certas para entender o contexto.",
  },
  {
    step: "02",
    title: "Desenho a solução",
    text: "Organizo necessidades, prioridades e prazos. Você entende o que será feito antes de começarmos.",
  },
  {
    step: "03",
    title: "Construo e valido",
    text: "Desenvolvo em etapas, compartilho a evolução e alinhamos cada decisão ao longo do processo.",
  },
  {
    step: "04",
    title: "Entrego com clareza",
    text: "Você recebe a solução testada, orientação de uso e suporte para colocá-la em prática.",
  },
];

const projects = [
  {
    number: "01",
    category: "Diagnóstico industrial",
    title: "EcoScanner MVP",
    description:
      "Protótipo criado para transformar dados técnicos de motores em um diagnóstico visual de eficiência, desperdício e possibilidades de modernização.",
    result: "Tecnologia e sustentabilidade traduzidas em decisões mais claras",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    repositoryHref: "https://github.com/CatarinaMaga/schneider-mvp",
    repositoryLabel: "Ver código",
    liveHref: "https://catarinamaga.github.io/schneider-mvp/",
    liveLabel: "Abrir demonstração",
  },
  {
    number: "02",
    category: "Sistema de gestão",
    title: "Cadastro de Produtos",
    description:
      "Aplicação web para cadastrar produtos e suas embalagens, com validações, banco de dados e uma estrutura organizada para facilitar a manutenção.",
    result: "Informações centralizadas e operações do dia a dia mais seguras",
    technologies: ["ASP.NET Core", "Entity Framework", "SQLite"],
    repositoryHref: "https://github.com/CatarinaMaga/CadastroProdutos",
    repositoryLabel: "Ver código e instruções",
    liveHref: null,
    liveLabel: null,
  },
  {
    number: "03",
    category: "Aplicação full stack",
    title: "Gerenciador de Biblioteca",
    description:
      "Sistema para organizar um acervo de livros, permitindo cadastrar, consultar, editar e excluir informações por meio de uma interface simples.",
    result: "Um processo manual transformado em uma experiência digital completa",
    technologies: ["Node.js", "Express", "MySQL"],
    repositoryHref: "https://github.com/CatarinaMaga/meu-primeiro-crud-biblioteca",
    repositoryLabel: "Ver código e instruções",
    liveHref: null,
    liveLabel: null,
  },
  {
    number: "04",
    category: "Aplicação desktop",
    title: "DJ Flow",
    description:
      "Ferramenta de produtividade para DJs que reúne o download e a organização de músicas em uma interface compacta, pensada para trabalhar junto ao Rekordbox.",
    result: "Um fluxo mais rápido para pesquisar, baixar e organizar novas faixas",
    technologies: ["Electron", "Node.js", "Express"],
    repositoryHref: "https://github.com/CatarinaMaga/dj-flow-desktop",
    repositoryLabel: "Ver código e instalação",
    liveHref: null,
    liveLabel: null,
  },
  {
    number: "05",
    category: "Catálogo inteligente",
    title: "Syntec Vet",
    description:
      "Catálogo digital de produtos veterinários com filtros, carrinho, acesso de usuários, painel administrativo e um assistente conectado ao banco de produtos.",
    result: "Produtos, atendimento e gestão reunidos em uma única experiência",
    technologies: ["Next.js", "Supabase", "IA"],
    repositoryHref: "https://github.com/CatarinaMaga/Syntec-Vet-Eder",
    repositoryLabel: "Ver código",
    liveHref: "https://syntecvet-catalogo.pages.dev/catalogo/",
    liveLabel: "Abrir catálogo",
  },
  {
    number: "06",
    category: "Mobile, API e hardware",
    title: "Rastreador de Pets",
    description:
      "Ecossistema para acompanhar a localização de pets em tempo real, consultar o histórico de trajetos e integrar aplicativo móvel, servidor e coleira com GPS.",
    result: "Software e hardware conectados para dar mais segurança aos tutores",
    technologies: ["React Native", "Node.js", "ESP32"],
    repositoryHref: null,
    repositoryLabel: null,
    liveHref: null,
    liveLabel: null,
  },
];

const faqs = [
  {
    question: "Preciso entender de tecnologia para contratar?",
    answer:
      "Não. Meu papel é traduzir a parte técnica, explicar as possibilidades e ajudar você a tomar decisões com segurança.",
  },
  {
    question: "Você trabalha apenas com projetos novos?",
    answer:
      "Não. Posso criar uma solução do zero ou analisar um sistema existente para corrigir problemas e planejar melhorias.",
  },
  {
    question: "Como sei qual solução meu negócio precisa?",
    answer:
      "Começamos pelo problema, não pela tecnologia. A conversa inicial serve para identificar o caminho mais simples e viável.",
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const siteUrl = "https://catarina-magalhaes-portfolio.vercel.app/";
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}#catarina`,
        name: "Catarina Magalhães",
        jobTitle: ["Desenvolvedora de Sistemas", "Analista de Sistemas", "Programadora"],
        url: siteUrl,
        image: `${siteUrl}logo-catarina.png`,
        description:
          "Dev, programadora, analista e desenvolvedora de sistemas especializada em soluções digitais, desenvolvimento web, UI/UX, integrações e automações.",
        email: "mailto:djktita@gmail.com",
        telephone: "+55 71 99921-6734",
        sameAs: [
          "https://github.com/CatarinaMaga",
          "https://www.linkedin.com/in/catarina-magalhães-68644866",
        ],
        knowsAbout: [
          "Análise de sistemas",
          "Desenvolvimento de sistemas",
          "UI/UX",
          "Automação de processos",
          "Desenvolvimento web",
          "Programação",
          "Integração de sistemas",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        name: "Catarina Magalhães — Desenvolvimento de Sistemas",
        url: siteUrl,
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}#catarina` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}#servicos`,
        name: "Catarina Magalhães — Analista e Desenvolvedora de Sistemas",
        url: siteUrl,
        image: `${siteUrl}logo-catarina.png`,
        founder: { "@id": `${siteUrl}#catarina` },
        areaServed: { "@type": "Country", name: "Brasil" },
        serviceType: services.map((service) => service.title),
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}#projetos`,
        name: "Projetos selecionados de Catarina Magalhães",
        numberOfItems: projects.length,
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareSourceCode",
            name: project.title,
            description: project.description,
            ...(project.repositoryHref ? { codeRepository: project.repositoryHref } : {}),
            ...(project.liveHref ? { url: project.liveHref } : {}),
            programmingLanguage: project.technologies,
            author: { "@id": `${siteUrl}#catarina` },
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          {/* O carregamento nativo evita a incompatibilidade do next/image com o vinext. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo"
            src="/logo-catarina.png"
            alt=""
            width="64"
            height="64"
            decoding="async"
          />
          <span className="brand-text">
            <strong>Catarina Magalhães</strong>
            <small>Analista &amp; Desenvolvedora</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li><a href="#servicos">Como posso ajudar</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#processo">Como trabalho</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>

        <a className="header-cta" href="#contato">Vamos conversar</a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow"><span /> Dev · Programadora · Analista de Sistemas</p>
            <h1 id="hero-title">
              Desenvolvimento de sistemas para transformar desafios em <em>soluções digitais.</em>
            </h1>
            <p className="hero-lead">
              Sou Catarina Magalhães, desenvolvedora e analista de sistemas. Analiso,
              planejo e programo sistemas, sites e automações que organizam processos,
              economizam tempo e tornam o trabalho mais simples — com uma conversa
              clara, mesmo para quem não é da área de tecnologia.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contato">
                Conte-me seu desafio <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#servicos">
                Entenda como posso ajudar <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Resumo do meu trabalho">
            <p className="panel-kicker">Da ideia à solução</p>
            <div className="panel-flow" aria-hidden="true">
              <span>Seu desafio</span><i /><span>Estratégia</span><i /><span>Solução</span>
            </div>
            <blockquote>
              <p>“Tecnologia boa é aquela que você entende e consegue usar.”</p>
            </blockquote>
            <ul className="panel-list">
              <li><span>✓</span> Escuta e diagnóstico</li>
              <li><span>✓</span> Planejamento claro</li>
              <li><span>✓</span> Desenvolvimento responsável</li>
            </ul>
          </aside>
        </section>

        <section className="trust-strip" aria-label="Princípios do meu trabalho">
          <p>Projetos guiados por</p>
          <ul>
            <li>Clareza</li><li>Estratégia</li><li>Usabilidade</li><li>Qualidade</li>
          </ul>
        </section>

        <section className="section services" id="servicos" aria-labelledby="services-title">
          <header className="section-heading">
            <div>
              <p className="section-label">Como posso ajudar</p>
              <h2 id="services-title">Desenvolvimento de sistemas, sites e automações.</h2>
            </div>
            <p>
              Cada projeto começa com uma análise do problema. A tecnologia e a programação
              vêm depois, escolhidas para simplificar — e não complicar — seu dia a dia.
            </p>
          </header>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <p className="card-number" aria-hidden="true">{service.number}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <footer>
                  <span aria-hidden="true">→</span>
                  <strong>{service.deliverable}</strong>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projetos" aria-labelledby="projects-title">
          <header className="section-heading projects-heading">
            <div>
              <p className="section-label">Projetos selecionados</p>
              <h2 id="projects-title">Soluções que já saíram do papel.</h2>
            </div>
            <div className="projects-intro">
              <p>
                Conheça alguns trabalhos que demonstram como aplico análise,
                desenvolvimento e usabilidade para resolver necessidades reais.
              </p>
              <a
                className="projects-all-link"
                href="https://github.com/CatarinaMaga?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                Ver todos no GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </header>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <header className="project-card-header">
                  <span className="project-number" aria-hidden="true">{project.number}</span>
                  <p>{project.category}</p>
                </header>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-result">
                  <span aria-hidden="true">→</span> {project.result}
                </p>
                <ul className="project-tags" aria-label={`Tecnologias utilizadas em ${project.title}`}>
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <footer className="project-actions">
                  {project.liveHref && project.liveLabel && (
                    <a
                      className="project-link project-link-live"
                      href={project.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.liveLabel}: ${project.title}`}
                    >
                      {project.liveLabel} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.repositoryHref && project.repositoryLabel ? (
                    <a
                      className="project-link project-link-repository"
                      href={project.repositoryHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.repositoryLabel} de ${project.title} no GitHub`}
                    >
                      {project.repositoryLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <p className="project-link project-link-private">
                      Projeto privado <span aria-hidden="true">●</span>
                    </p>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="processo" aria-labelledby="process-title">
          <div className="process-intro">
            <p className="section-label section-label-light">Como funciona</p>
            <h2 id="process-title">Um processo simples, transparente e sem surpresas.</h2>
            <p>
              Você acompanha cada etapa, entende as escolhas e participa das decisões
              importantes do seu projeto.
            </p>
          </div>

          <ol className="process-list">
            {process.map((item) => (
              <li key={item.step}>
                <span className="step-number">{item.step}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section about" id="sobre" aria-labelledby="about-title">
          <div className="about-visual" aria-hidden="true">
            <div className="code-card code-card-back">
              <span /><span /><span />
            </div>
            <div className="code-card code-card-front">
              <p>&lt;ideia&gt;</p>
              <p>&nbsp;&nbsp;entender();</p>
              <p>&nbsp;&nbsp;simplificar();</p>
              <p>&nbsp;&nbsp;construir();</p>
              <p>&lt;/resultado&gt;</p>
            </div>
            <span className="about-seal">ANÁLISE · ESTRATÉGIA · CÓDIGO ·</span>
          </div>

          <article className="about-copy">
            <p className="section-label">Quem está por trás</p>
            <h2 id="about-title">Analista para compreender. Desenvolvedora para realizar.</h2>
            <p>
              Sou Catarina Magalhães, profissional de tecnologia que atua como dev,
              programadora, analista e desenvolvedora de sistemas. Uno visão de negócio,
              organização, UI/UX e conhecimento técnico para transformar necessidades
              em produtos digitais úteis e fáceis de usar.
            </p>
            <p>
              Acredito que um bom sistema não é o que usa mais tecnologia, mas o que
              resolve o problema certo com clareza, segurança e cuidado com as pessoas.
            </p>
            <ul className="values-list">
              <li><span>01</span> Comunicação sem complicar</li>
              <li><span>02</span> Decisões com propósito</li>
              <li><span>03</span> Experiência centrada em pessoas</li>
            </ul>
          </article>
        </section>

        <section className="section faq" aria-labelledby="faq-title">
          <header className="faq-heading">
            <p className="section-label">Dúvidas comuns</p>
            <h2 id="faq-title">Antes de começarmos</h2>
          </header>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contato" aria-labelledby="contact-title">
          <div>
            <p className="section-label section-label-light">Vamos conversar?</p>
            <h2 id="contact-title">Tem uma ideia ou um problema para resolver?</h2>
            <p>
              Conte um pouco sobre o seu momento. A primeira conversa é para entender
              sua necessidade e descobrir o melhor próximo passo.
            </p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-light"
              href="https://wa.me/5571999216734?text=Olá%2C%20Catarina!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
              target="_blank"
              rel="noreferrer"
              aria-label="Conversar com Catarina pelo WhatsApp"
            >
              Conversar pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href="mailto:djktita@gmail.com?subject=Quero%20falar%20sobre%20um%20projeto">
              ou escreva para djktita@gmail.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">
            {/* O carregamento nativo evita a incompatibilidade do next/image com o vinext. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-catarina.png" alt="" width="72" height="72" decoding="async" />
          </a>
          <p><strong>Catarina Magalhães</strong><br />Dev, programadora, analista e desenvolvedora de sistemas.</p>
        </div>
        <nav aria-label="Links do rodapé">
          <a href="https://github.com/CatarinaMaga" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/catarina-magalhães-68644866" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:djktita@gmail.com">E-mail</a>
          <a href="https://wa.me/5571999216734" target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
        <p className="copyright">© {currentYear} Catarina Magalhães · Analista e Desenvolvedora de Sistemas</p>
      </footer>
    </>
  );
}
