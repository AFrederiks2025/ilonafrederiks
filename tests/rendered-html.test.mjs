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
  assert.match(html, /<title>Ilona Frederiks \| Verkoopmedewerker mode, klantadvies &amp; styling<\/title>/i);
  assert.match(html, /property="og:image"[^>]*content="https:\/\/www\.ilonafrederiks\.nl\/og\.png"/i);
  assert.match(html, /rel="canonical"[^>]*href="https:\/\/www\.ilonafrederiks\.nl\/"/i);
  assert.match(html, /id="portfolio"/i);
  const sectionTones = [
    ["profieltekst", "soft"],
    ["praktijk", "light"],
    ["ervaring", "soft"],
    ["communicatiestijl", "light"],
    ["talenten", "soft"],
    ["ambitie", "light"],
    ["beschikbaarheid", "soft"],
    ["portfolio", "light"],
    ["opleiding", "soft"],
  ];
  for (const [id, tone] of sectionTones) {
    assert.match(
      html,
      new RegExp(`<details(?=[^>]*id="${id}")(?=[^>]*class="sectionAccordion sectionAccordion--${tone}")`, "i"),
    );
  }
  assert.doesNotMatch(html, /Ambitie &amp; beschikbaarheid/i);
  assert.match(html, /Wie Ilona is en wat zij meebrengt/i);
  assert.doesNotMatch(html, /<details[^>]*class="sectionAccordion[^"]*"[^>]*\bopen\b/i);
  assert.match(html, /Beauty archive/i);
  assert.match(html, /<details class="portfolioDisclosure">/i);
  assert.match(html, /Bekijk beauty archive/i);
  assert.doesNotMatch(html, /<details class="portfolioDisclosure"[^>]*\bopen\b/i);
  assert.match(html, /2024\s*—\s*heden/i);
  assert.match(html, /Vonk in Kampen/i);
  assert.match(html, /Barista · vrijwilligerswerk/i);
  assert.match(html, /Verkoopmedewerker mode · klantadvies · styling/i);
  assert.match(html, /Mode verkopen begint met iemand echt zien\./i);
  assert.match(html, /Ik ben Ilona: een enthousiaste en gastvrije verkoopmedewerker/i);
  assert.match(html, /Beschikbaar voor 16–24 uur per week in Zwolle en omgeving\./i);
  assert.match(html, /Beschikbaar vanaf 17 augustus 2026/i);
  assert.match(html, /16–24 uur per week/i);
  assert.match(html, /Maandag · dinsdag · donderdag/i);
  assert.match(html, /datetime="2026-08-17"[^>]*>17 augustus 2026/i);
  assert.match(html, /Vaste baan/i);
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
  assert.doesNotMatch(html, /ilona-frederiks-(?:640|1000)\.jpg/i);
  assert.match(html, /hero-editorial-1200\.jpg/i);
  assert.match(html, /hero-editorial-2200\.jpg/i);
  assert.match(html, /Persoonlijke aandacht met gevoel voor stijl/i);
  assert.match(html, /Wat Ilona meebrengt/i);
  assert.match(html, /Persoonlijk klantadvies/i);
  assert.match(html, /Verkoopgevoel/i);
  assert.match(html, /Styling en presentatie/i);
  assert.match(html, /Positieve teamenergie/i);
  assert.match(html, /Wanneer een klant weer gaat stralen/i);
  assert.match(html, /Als iemand in de spiegel kijkt en je ziet de sprankeling terugkomen/i);
  assert.match(html, /Hoe ik contact maak, adviseer en samenwerk/i);
  assert.match(html, /Warm, enthousiast en gericht op verbinding\./i);
  assert.match(html, /Mijn DISC-profiel laat zien dat ik van nature mensgericht en enthousiast/i);
  assert.match(html, /Toegankelijk/i);
  assert.match(html, /Enthousiasmerend/i);
  assert.match(html, /Persoonlijk/i);
  assert.match(html, /Verbindend/i);
  assert.match(html, /Mijn kracht ligt niet in iemand onder druk zetten/i);
  assert.match(html, /Deze beschrijving is gebaseerd op mijn persoonlijke DISC-profiel/i);
  assert.match(html, /Wat mij motiveert en waar mijn natuurlijke kracht ligt/i);
  assert.match(html, /Kansen zien, waarde zichtbaar maken en kwaliteit vasthouden\./i);
  assert.match(html, /Mijn JANE Talentenrapportage laat een combinatie zien/i);
  assert.match(html, /Routinetalent, Exploitatietalent en[\s\S]*Etaleertalent, alle drie met 80%/i);
  assert.match(html, /Vertaaltalent en Scopetalent volgen met 70%/i);
  assert.match(html, /Waarde zichtbaar maken/i);
  assert.match(html, /Commerciële mogelijkheden zien/i);
  assert.match(html, /Kwaliteit consequent vasthouden/i);
  assert.match(html, /Wensen concreet maken/i);
  assert.match(html, /Openstaan voor vernieuwing/i);
  assert.match(html, /De volledige rapportage[\s\S]*is op verzoek beschikbaar/i);
  assert.doesNotMatch(html, /Drie krachtlijnen uit de Jane Talentenrapportage/i);
  assert.doesNotMatch(html, /Wat haar werk typeert\./i);
  assert.match(html, /Groeien binnen de winkel/i);
  assert.match(html, /leidinggevende rol[\s\S]*binnen een worshipband/i);
  assert.match(html, /natuurlijke leiderschap/i);
  assert.match(html, /Doorgroeien richting leidinggevende/i);
  assert.match(html, /Mode, muziek en verbinding/i);
  const talents = html.slice(html.indexOf('id="talenten"'), html.indexOf('id="ambitie"'));
  assert.doesNotMatch(talents, /2026/i);
  assert.match(html, /href="\/Ilona-Frederiks-CV\.pdf"[^>]*download/i);
  assert.doesNotMatch(html, /Portfolio volgt|Instagram-profiel wordt later toegevoegd/i);
  assert.doesNotMatch(html, /Styling\s*·\s*Verkoop\s*·\s*Performance/i);
  assert.doesNotMatch(html, /Styling,\s*verkoop\s*(?:&amp;|&)\s*performance/i);
  assert.doesNotMatch(html, /Stijl die zichtbaar maakt\. Energie die mensen meeneemt\./i);

  const hero = html.slice(html.indexOf('class="heroIntroduction"'), html.indexOf('class="profileSection"'));
  assert.match(hero, /href="#ervaring"[^>]*>\s*Bekijk mijn ervaring/i);
  assert.match(hero, /href="https:\/\/wa\.me\/31657177997"[^>]*>[\s\S]*?Chat met Ilona via WhatsApp/i);
  assert.match(hero, /Privé ben ik al tien jaar getrouwd met Anton/i);
  assert.match(hero, /zoon: Benjamin[\s\S]*van 4 jaar/i);
  assert.doesNotMatch(hero, /Bekijk portfolio|WhatsApp met Ilona/i);

  const availability = html.slice(html.indexOf('id="beschikbaarheid"'), html.indexOf('id="portfolio"'));
  assert.match(availability, /Gewenste functie[\s\S]*Verkoopmedewerker in een kledingwinkel/i);
  assert.match(availability, /Dienstverband[\s\S]*Vaste baan/i);
  assert.match(availability, /Beschikbaar[\s\S]*16–24 uur per week/i);
  assert.match(availability, /Voorkeursdagen[\s\S]*Maandag, dinsdag en donderdag/i);
  assert.match(availability, /Weekend[\s\S]*Alleen bij hoge uitzondering/i);
  assert.match(availability, /Regio[\s\S]*Maximaal circa 30 minuten reizen vanaf Zwolle/i);
  assert.match(availability, /Rijbewijs[\s\S]*In bezit/i);
  assert.match(availability, /Startdatum[\s\S]*datetime="2026-08-17"[^>]*>17 augustus 2026/i);
  assert.match(availability, /Voorkeur[\s\S]*Een kleine, persoonlijke kledingwinkel/i);
  assert.match(availability, /Ambitie[\s\S]*Doorgroeien richting leidinggevende/i);
  assert.doesNotMatch(availability, /getrouwd met Anton|Benjamin/i);

  const corpus = html;
  assert.doesNotMatch(corpus, /\b(?:BSN|geboortedatum)\b/i);
  assert.doesNotMatch(corpus, /\b\d{4}\s?[A-Z]{2}\b/);
  assert.doesNotMatch(corpus, /\b(?:300\s+workshops|100\s+klanten)\b/i);
  assert.doesNotMatch(corpus, /["']?(?:birthDate|address|children|spouse|taxID)["']?\s*:/i);
  assert.match(corpus, /Privé ben ik al tien jaar getrouwd met Anton/i);
  assert.match(corpus, /zoon: Benjamin[\s\S]*van 4 jaar/i);
  assert.match(corpus, /href="https:\/\/www\.ewvo\.nl\/"[^>]*>[\s\S]*Anton Frederiks · EWVO\.nl/i);
  assert.doesNotMatch(corpus, /\bgeloof\b/i);

  const sissyBoyPosition = html.indexOf("Sissy-Boy");
  const danceTeacherPosition = html.indexOf("Dansworkshops op scholen");
  assert.ok(sissyBoyPosition > -1 && danceTeacherPosition > -1);
  assert.ok(sissyBoyPosition < danceTeacherPosition, "Sissy-Boy moet voor Dansdocent staan");

  const experiencePosition = html.indexOf('id="ervaring"');
  const communicationPosition = html.indexOf('id="communicatiestijl"');
  const talentsPosition = html.indexOf('id="talenten"');
  const ambitionPosition = html.indexOf('id="ambitie"');
  const availabilityPosition = html.indexOf('id="beschikbaarheid"');
  const portfolioPosition = html.indexOf('id="portfolio"');
  assert.ok(experiencePosition < communicationPosition, "communicatiestijl volgt na werkervaring");
  assert.ok(communicationPosition < talentsPosition, "talenten volgen na communicatiestijl");
  assert.ok(talentsPosition < ambitionPosition, "ambitie volgt na talenten");
  assert.ok(ambitionPosition < availabilityPosition, "beschikbaarheid volgt na ambitie");
  assert.ok(availabilityPosition < portfolioPosition, "portfolio volgt na beschikbaarheid");

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
  const [page, layout, menu, effects, accordion, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/MobileMenu.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/RevealEffects.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/SectionAccordion.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /<main id="main-content" tabIndex=\{-1\}>/);
  assert.match(page, /alt="Portret van Ilona Frederiks"/);
  assert.match(page, /className="heroDesktopArtwork"/);
  assert.match(page, /hero-editorial-1200\.jpg/i);
  assert.match(page, /hero-editorial-2200\.jpg/i);
  assert.doesNotMatch(page, /className="heroDesktopIdentity"/);
  assert.doesNotMatch(page, /className="heroDesktopPortrait"/);
  assert.match(page, /className="heroMobileArtwork"/);
  const mobileHero = page.slice(
    page.indexOf('className="heroMobileArtwork"'),
    page.indexOf('className="heroIntroduction"'),
  );
  assert.match(mobileHero, /hero-editorial-1200\.jpg/i);
  assert.match(mobileHero, /hero-editorial-2200\.jpg/i);
  assert.doesNotMatch(mobileHero, /ilona-frederiks-(?:640|1000)\.jpg/i);
  assert.match(page, /<details className="portfolioDisclosure">/);
  assert.match(page, /<summary>/);
  assert.match(page, /loading="lazy"/);
  assert.match(page, /srcSet=/);
  assert.match(page, /Warm & polished/);
  assert.doesNotMatch(page, /Soft glamour/);
  assert.doesNotMatch(page, /ilona-be-you-tiful\.jpg/);
  assert.match(page, /16–24 uur per week/);
  assert.match(page, /dateTime="2026-08-17"/);
  assert.match(page, /Bekijk mijn ervaring/);
  assert.match(page, /Chat met Ilona via WhatsApp/);
  assert.doesNotMatch(page, /Maak kennis met Ilona/);
  assert.match(page, /Persoonlijke aandacht met gevoel voor stijl/);
  assert.match(page, /Wanneer een klant weer gaat stralen/);
  assert.match(page, /Warm, enthousiast en gericht op verbinding\./);
  assert.match(page, /Kansen zien, waarde zichtbaar maken en kwaliteit vasthouden\./);
  assert.match(page, /persoonlijke DISC-profiel/);
  assert.match(page, /JANE Talentenrapportage/);
  assert.match(page, /Groeien binnen de winkel/);
  assert.doesNotMatch(page, /jobTitle:\s*"Allround professional in styling, verkoop en performance"/i);
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
  assert.match(menu, /#communicatiestijl/);
  assert.match(menu, /#talenten/);
  assert.match(accordion, /<details/);
  assert.match(accordion, /<summary>/);
  assert.doesNotMatch(accordion, /matchMedia/);
  assert.match(accordion, /hashchange/);
  assert.match(accordion, /onToggle=/);
  assert.match(effects, /prefers-reduced-motion: reduce/);
  assert.match(effects, /IntersectionObserver/);
  assert.match(css, /scroll-behavior:\s*smooth/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /\.portfolioItem--portrait figcaption,[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1fr\)/);
  assert.match(css, /\.practiceSection/);
  assert.match(css, /\.ambitionSection/);
  assert.match(css, /\.sectionAccordion/);
  assert.match(css, /\.sectionAccordionSummaryText strong\s*\{[^}]*white-space:\s*nowrap/);
  assert.match(css, /\.heroMobilePortrait img\s*\{[^}]*object-position:\s*100% 50%/);
  assert.match(css, /\.sectionAccordion\s*\{[^}]*background:\s*var\(--paper\)/);
  assert.match(css, /\.sectionAccordion--soft\s*\{[^}]*background:\s*#eadfd4/);
  assert.match(css, /\.profileSection\s*\{[^}]*background:\s*#eadfd4/);
  assert.match(css, /\.practiceSection\s*\{[^}]*background:\s*var\(--paper\)/);
  assert.match(css, /\.ambitionSection\s*\{[^}]*background:\s*var\(--paper\)/);
  assert.match(css, /\.availabilitySection\s*\{[^}]*background:\s*#eadfd4/);
  assert.match(css, /\.insightsSection\s*\{[^}]*background:\s*var\(--paper\)/);
  assert.match(css, /\.insightsSection--soft\s*\{[^}]*background:\s*#eadfd4/);
  assert.match(css, /\.portfolioSection\s*\{[^}]*background:\s*var\(--paper\)/);
  assert.match(css, /\.sectionAccordionIcon::after/);
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
  assert.doesNotMatch(publicFiles.join("\n"), /(^|\/)og\.jpg$/im);
  assert.match(publicFiles.join("\n"), /(^|\/)og\.png$/im);

  for (const [name, width, height] of assets) {
    const image = await readFile(new URL(`../public/portfolio/${name}`, import.meta.url));
    assert.deepEqual(readJpegSize(image), { width, height }, `${name} heeft de juiste afmetingen`);
    const contents = image.toString("latin1");
    assert.doesNotMatch(contents, /DateTimeOriginal|SerialNumber|LensSerialNumber/i);
  }
});
