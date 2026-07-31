import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
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

function readJpegSize(buffer) {
  assert.equal(buffer.readUInt16BE(0), 0xffd8, "portfolio-afbeelding moet een jpeg zijn");
  let offset = 2;

  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buffer[offset + 1];
    if (marker === 0xd9 || marker === 0xda) break;
    const length = buffer.readUInt16BE(offset + 2);
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }

  throw new Error("Geen jpeg-afmetingen gevonden");
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
  assert.match(html, /24–32 uur per week/i);
  assert.match(html, /Approach of Life/i);
  assert.match(html, /href="https:\/\/www\.approachoflife\.nl\/"/i);
  assert.match(html, /Bruidskapsel Bootcamp/i);
  assert.match(html, /Baron Academy · 3-daagse/i);
  assert.match(html, /datetime="2022-09-27"[^>]*>27 sep\. 2022</i);
  assert.match(html, /Make-up Artist/i);
  assert.match(html, /Hairstylist/i);
  assert.match(html, /JDO Academy/i);
  assert.match(html, /datetime="2020-08-31"[^>]*>31 aug\. 2020</i);
  assert.match(html, /ilona-visagist-portret\.jpg/i);
  assert.match(html, /editorial-colour-look\.jpg/i);
  assert.match(html, /editorial-colour-look-480\.jpg/i);
  assert.match(html, /forest-bridal-look\.jpg/i);
  assert.match(html, /forest-bridal-look-480\.jpg/i);
  assert.match(html, /quiet-bridal-moment\.jpg/i);
  assert.match(html, /quiet-bridal-moment-480\.jpg/i);
  assert.match(html, /4(?:<!--.*?-->)?\s*beelden/i);
  assert.match(html, /Warm &amp; polished/i);
  assert.doesNotMatch(html, /Soft glamour/i);
  assert.match(html, /Alleen het zichtbare\s+eindresultaat staat centraal/i);
  assert.doesNotMatch(html, /ilona-be-you-tiful\.jpg/i);
  assert.doesNotMatch(html, /be-you-tiful-logo|bruidsaccessoires|haarstyling-tools|mobile-beauty-kit/i);
  assert.doesNotMatch(html, /kleurpaletten|lip-edit|eye-detail-kit|finishing-details/i);
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

  const bootcampPosition = html.indexOf("Bruidskapsel Bootcamp");
  const approachPosition = html.indexOf("Approach of Life");
  const makeUpPosition = html.indexOf("Make-up Artist");
  const hairstylistPosition = html.indexOf("Hairstylist");
  assert.ok(bootcampPosition < approachPosition, "2022 moet voor 2021 staan");
  assert.ok(approachPosition < makeUpPosition, "2021 moet voor 2020 staan");
  assert.ok(makeUpPosition < hairstylistPosition, "opleidingen met dezelfde datum volgen de certificaatvolgorde");
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
  assert.match(page, /Warm & polished/);
  assert.doesNotMatch(page, /Soft glamour/);
  assert.doesNotMatch(page, /ilona-be-you-tiful\.jpg/);
  assert.match(page, /24–32 uur per week/);
  assert.match(page, /Approach of Life/);
  assert.match(page, /Bruidskapsel Bootcamp/);
  assert.match(page, /Make-up Artist/);
  assert.match(page, /Hairstylist/);
  assert.doesNotMatch(page, /IMG_0126|IMG_0127|IMG_0128/i);
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
  assert.match(css, /\.portfolioItem--portrait figcaption,[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)/);
  assert.match(css, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);

  const pdf = await readFile(new URL("../public/Ilona-Frederiks-CV.pdf", import.meta.url));
  assert.equal(pdf.subarray(0, 5).toString("ascii"), "%PDF-");
  assert.ok(pdf.byteLength > 100_000, "De downloadbare cv-pdf moet een volledig document zijn");
});

test("ships optimized, metadata-clean portfolio variants", async () => {
  const assets = [
    ["ilona-visagist-portret.jpg", 1107, 1400],
    ["ilona-visagist-portret-480.jpg", 480, 607],
    ["editorial-colour-look.jpg", 933, 1400],
    ["editorial-colour-look-480.jpg", 480, 720],
    ["forest-bridal-look.jpg", 933, 1400],
    ["forest-bridal-look-480.jpg", 480, 719],
    ["quiet-bridal-moment.jpg", 1400, 932],
    ["quiet-bridal-moment-480.jpg", 480, 320],
  ];

  const portfolioFiles = (await readdir(new URL("../public/portfolio/", import.meta.url)))
    .filter((name) => name.endsWith(".jpg"))
    .sort();
  assert.deepEqual(portfolioFiles, assets.map(([name]) => name).sort(), "alleen gebruikte eindresultaten worden gepubliceerd");

  const publicFiles = await readdir(new URL("../public/", import.meta.url), { recursive: true });
  assert.doesNotMatch(publicFiles.join("\n"), /IMG_0126|IMG_0127|IMG_0128|\.heic$/im);

  for (const [name, width, height] of assets) {
    const image = await readFile(new URL(`../public/portfolio/${name}`, import.meta.url));
    assert.deepEqual(readJpegSize(image), { width, height }, `${name} heeft de juiste afmetingen`);
    const contents = image.toString("latin1");
    assert.doesNotMatch(contents, /DateTimeOriginal|SerialNumber|LensSerialNumber/i);
  }
});
