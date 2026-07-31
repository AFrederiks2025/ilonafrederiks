import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
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

test("server-renders Ilona's complete portfolio page and metadata", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="nl"/i);
  assert.match(html, /<title>Ilona Frederiks \| Styling, verkoop &amp; performance<\/title>/i);
  assert.match(html, /property="og:image"[^>]*content="https:\/\/www\.ilonafrederiks\.nl\/og\.jpg"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.ilonafrederiks\.nl\/"/i);
  assert.match(html, /id="portfolio"/i);
  assert.match(html, /Beauty archive/i);
  assert.match(html, /<details class="portfolioDisclosure">/i);
  assert.match(html, /Bekijk beauty archive/i);
  assert.doesNotMatch(html, /<details class="portfolioDisclosure"[^>]*\bopen\b/i);
  assert.match(html, /2024\s*—\s*heden/i);
  assert.match(html, /Vonk in Kampen/i);
  assert.match(html, /Barista · vrijwilligerswerk/i);
  assert.match(html, /WhatsApp met Ilona/i);
  assert.match(html, /Beschikbaar voor een gesprek/i);
  assert.match(html, /hero-editorial-2200\.jpg/i);
  assert.match(html, /Styling · Verkoop · Performance/i);
  assert.match(html, /Jane Talentenrapportage/i);
  assert.match(html, /geregistreerd advies- en trainingsproduct/i);
  assert.match(html, /href="\/Ilona-Frederiks-CV\.pdf"[^>]*download/i);
  assert.doesNotMatch(html, /Portfolio volgt|Instagram-profiel wordt later toegevoegd/i);

  const sissyBoyPosition = html.indexOf("Sissy-Boy");
  const danceTeacherPosition = html.indexOf("Dansworkshops op scholen");
  assert.ok(sissyBoyPosition > -1 && danceTeacherPosition > -1);
  assert.ok(sissyBoyPosition < danceTeacherPosition, "Sissy-Boy moet voor Dansdocent staan");
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/i);
});

test("keeps interaction, accessibility and content safeguards in source", async () => {
  const [page, layout, menu, effects, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/MobileMenu.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/RevealEffects.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<main id="main-content" tabIndex=\{-1\}>/);
  assert.match(page, /alt="Portret van Ilona Frederiks"/);
  assert.match(page, /className="heroDesktopArtwork"/);
  assert.match(page, /className="heroMobileArtwork"/);
  assert.match(page, /<details className="portfolioDisclosure">/);
  assert.match(page, /<summary>/);
  assert.match(page, /loading="lazy"/);
  assert.match(page, /srcSet=/);
  assert.match(page, /Rolaccenten/);
  assert.match(page, /download cv als pdf/i);
  assert.doesNotMatch(page, /Portfolio volgt|socialPlaceholder/i);
  assert.doesNotMatch(page, /klant zegt|testimonial|★★★★★/i);
  assert.match(layout, /metadataBase: new URL\("https:\/\/www\.ilonafrederiks\.nl"\)/);
  assert.match(menu, /aria-expanded=\{isOpen\}/);
  assert.match(menu, /#profieltekst/);
  assert.match(effects, /prefers-reduced-motion: reduce/);
  assert.match(effects, /IntersectionObserver/);
  assert.match(css, /scroll-behavior:\s*smooth/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});
