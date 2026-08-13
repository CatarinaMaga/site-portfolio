import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catarina Magalhães — Analista e Desenvolvedora de Sistemas",
  description:
    "Análise, desenvolvimento e melhoria de sistemas com linguagem clara, foco no seu negócio e tecnologia que facilita o dia a dia.",
  alternates: { canonical: "/" },
};

const services = [
  {
    number: "01",
    title: "Sistemas sob medida",
    description:
      "Transformo processos manuais e ideias em soluções digitais simples, seguras e adequadas à rotina do seu negócio.",
    deliverable: "Mais agilidade e menos retrabalho",
  },
  {
    number: "02",
    title: "Análise e melhoria",
    description:
      "Entendo o que acontece hoje, encontro gargalos e desenho um caminho mais eficiente antes de qualquer desenvolvimento.",
    deliverable: "Decisões mais claras e processos melhores",
  },
  {
    number: "03",
    title: "Sites e experiências digitais",
    description:
      "Crio interfaces intuitivas, responsivas e acessíveis para que seus clientes encontrem o que precisam sem dificuldade.",
    deliverable: "Uma presença digital que gera confiança",
  },
  {
    number: "04",
    title: "Integrações e automações",
    description:
      "Conecto ferramentas e automatizo tarefas repetitivas para reduzir erros e liberar tempo para o que realmente importa.",
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
    text: "Desenvolvo em etapas, apresento a evolução e ajustamos juntas para evitar surpresas no final.",
  },
  {
    step: "04",
    title: "Entrego com clareza",
    text: "Você recebe a solução testada, orientação de uso e suporte para colocá-la em prática.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Catarina Magalhães",
    jobTitle: "Analista e Desenvolvedora de Sistemas",
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
          <span className="brand-mark" aria-hidden="true">CM</span>
          <span className="brand-text">
            <strong>Catarina Magalhães</strong>
            <small>Analista &amp; Desenvolvedora</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <ul className="nav-list">
            <li><a href="#servicos">Como posso ajudar</a></li>
            <li><a href="#processo">Como trabalho</a></li>
            <li><a href="#sobre">Sobre</a></li>
          </ul>
        </nav>

        <a className="header-cta" href="#contato">Vamos conversar</a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow"><span /> Catarina Magalhães · Tecnologia simples. Resultado real.</p>
            <h1 id="hero-title">
              Transformo desafios do seu negócio em <em>soluções digitais.</em>
            </h1>
            <p className="hero-lead">
              Analiso, planejo e desenvolvo sistemas que organizam processos,
              economizam tempo e tornam o trabalho mais simples — sempre com uma
              conversa clara, mesmo para quem não é da área de tecnologia.
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
              <h2 id="services-title">Tecnologia aplicada ao que você precisa resolver.</h2>
            </div>
            <p>
              Cada projeto começa entendendo o problema. A ferramenta vem depois,
              escolhida para simplificar — e não complicar — seu dia a dia.
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
              Sou Catarina Magalhães, Analista e Desenvolvedora de Sistemas. Uno visão de negócio,
              organização e conhecimento técnico para transformar necessidades em
              produtos digitais úteis e fáceis de usar.
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
          <a className="footer-brand" href="#inicio" aria-label="Voltar ao início">CM</a>
          <p><strong>Catarina Magalhães</strong><br />Soluções digitais pensadas para pessoas e negócios.</p>
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
