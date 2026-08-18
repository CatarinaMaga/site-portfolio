import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://catarina-magalhaes-portfolio.vercel.app/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renderiza o portfólio profissional com conteúdo e contatos", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang=["']pt-BR["']/i);
  assert.match(html, /<title>Desenvolvedora e Analista de Sistemas \| Catarina Magalhães<\/title>/i);
  assert.match(html, /Desenvolvimento de sistemas para transformar desafios/i);
  assert.match(html, /Como posso ajudar/i);
  assert.match(html, /Projetos selecionados/i);
  assert.match(html, /EcoScanner MVP/i);
  assert.match(html, /Cadastro de Produtos/i);
  assert.match(html, /Gerenciador de Biblioteca/i);
  assert.match(html, /DJ Flow/i);
  assert.match(html, /Syntec Vet/i);
  assert.match(html, /Rastreador de Pets/i);
  assert.match(html, /Projeto privado/i);
  assert.match(html, /Abrir demonstração/i);
  assert.match(html, /https:\/\/catarinamaga\.github\.io\/schneider-mvp\//i);
  assert.match(html, /Abrir catálogo/i);
  assert.match(html, /https:\/\/syntecvet-catalogo\.pages\.dev\/catalogo\//i);
  assert.match(html, /Construo e valido/i);
  assert.match(html, /compartilho a evolução e alinhamos cada decisão/i);
  assert.match(html, /https:\/\/github\.com\/CatarinaMaga/i);
  assert.match(html, /djktita@gmail\.com/i);
  assert.match(html, /application\/ld\+json/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|Your site is taking shape/i);
});

test("mantém estrutura semântica, SEO e arquivos públicos essenciais", async () => {
  const [page, layout, packageJson, robots, sitemap] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    access(new URL("../public/logo-catarina.png", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(packageJson, /"name": "catarina-magalhaes-portfolio"/);
  assert.match(page, /<header className="site-header">/);
  assert.match(page, /<nav aria-label="Navegação principal">/);
  assert.match(page, /<main id="conteudo">/);
  assert.match(page, /<section className="section services"/);
  assert.match(page, /<article className="service-card"/);
  assert.match(page, /<section className="section projects"/);
  assert.match(page, /<article className="project-card"/);
  assert.match(page, /<footer className="project-actions">/);
  assert.match(page, /"@type": "SoftwareSourceCode"/);
  assert.match(page, /<footer className="site-footer">/);
  assert.match(layout, /openGraph:/);
  assert.match(layout, /twitter:/);
  assert.match(layout, /themeColor: "#172f2b"/);
  assert.match(robots, /allow: "\/"/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /2026-08-17/);
});

test("mantém a versão estática da Vercel alinhada com os projetos", async () => {
  const html = await readFile(new URL("../vercel/index.html", import.meta.url), "utf8");

  assert.match(html, /<section class="section projects" id="projetos"/i);
  assert.match(html, /EcoScanner MVP/i);
  assert.match(html, /DJ Flow/i);
  assert.match(html, /Syntec Vet/i);
  assert.match(html, /Rastreador de Pets/i);
  assert.match(html, /href="https:\/\/catarinamaga\.github\.io\/schneider-mvp\/"/i);
  assert.match(html, /href="https:\/\/syntecvet-catalogo\.pages\.dev\/catalogo\/"/i);
  assert.doesNotMatch(html, /https:\/\/djktita\.github\.io\/schneider-mvp\//i);
  assert.doesNotMatch(html, /href="https:\/\/github\.com\/CatarinaMaga\/rastreador-servidor"/i);

  const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(jsonLd, "A versão estática deve conter dados estruturados");
  assert.doesNotThrow(() => JSON.parse(jsonLd[1]));
});
