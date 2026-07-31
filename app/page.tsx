/* eslint-disable @next/next/no-img-element -- Handgemaakte srcSet-varianten houden deze statische portfolio snel op beide hosts. */
import MobileMenu from "./MobileMenu";
import RevealEffects from "./RevealEffects";

const portfolio = [
  {
    image: "/portfolio/atelier-haarstyling.jpg",
    alt: "Professionele haarstylingplek met oefenhoofd en verlichte spiegels",
    category: "Atelier",
    title: "Haarstylingstation",
    caption: "Een rustige, professionele opstelling voor voorbereiding en techniek.",
    layout: "feature",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/beauty-station.jpg",
    alt: "Visagietafel met twee verlichte spiegels en hoge stoelen",
    category: "Visagie",
    title: "Beauty station",
    caption: "Licht, rust en spiegeling als basis voor precies werk.",
    layout: "portrait",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/complexion-kit.jpg",
    alt: "Geordende collectie foundations en make-up bij een spiegel",
    category: "Complexion",
    title: "Tone & texture",
    caption: "Foundations en finishes zorgvuldig geordend per look.",
    layout: "square",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/bruidsaccessoires.jpg",
    alt: "Verfijnde haaraccessoires voor bruidsstyling in een glazen doosje",
    category: "Bruidsstyling",
    title: "Finishing touch",
    caption: "Haaraccessoires geselecteerd voor een verfijnde afwerking.",
    layout: "wide",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/haarstyling-tools.jpg",
    alt: "Haarstylinggereedschap en verzorgingsproducten voorbereid op een kast",
    category: "Hair",
    title: "Prepared to perform",
    caption: "Tools en producten klaar voor efficiënt haarwerk.",
    layout: "landscape",
    width: 1200,
    height: 900,
  },
  {
    image: "/portfolio/mobile-beauty-kit.jpg",
    alt: "Professionele make-up trolleys en koffers voor werk op locatie",
    category: "On location",
    title: "Mobile studio",
    caption: "Een complete mobiele set voor verzorgde styling op locatie.",
    layout: "portrait",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/kleurpaletten.jpg",
    alt: "Uitgestalde oogschaduwpaletten met uiteenlopende kleuren",
    category: "Colour",
    title: "Palette study",
    caption: "Een breed palet voor looks van naturel tot uitgesproken.",
    layout: "featureWide",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/lip-edit.jpg",
    alt: "Geordende collectie lippenstiften en lipproducten",
    category: "Beauty",
    title: "Lip edit",
    caption: "Kleur en finish afgestemd op uitstraling en moment.",
    layout: "portraitSmall",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/eye-detail-kit.jpg",
    alt: "Geordende make-uplade met producten voor oogmake-up",
    category: "Detail",
    title: "Eye edit",
    caption: "Een georganiseerde selectie voor precieze ooglooks.",
    layout: "portraitSmall",
    width: 900,
    height: 1200,
  },
  {
    image: "/portfolio/finishing-details.jpg",
    alt: "Lade met wimpers, haarspelden en materialen voor de afwerking",
    category: "Finishing",
    title: "Pins & lashes",
    caption: "De kleinste details geven een look haar definitieve vorm.",
    layout: "wideEnd",
    width: 900,
    height: 1200,
  },
];

const experience = [
  {
    period: "2024 — heden",
    dateTime: "2024",
    company: "Vonk in Kampen",
    role: "Barista · vrijwilligerswerk",
    location: "Kampen",
    summary: "Gastvrij bijdragen aan een plek waar mensen elkaar ontmoeten.",
    responsibilities: [
      "Dranken en bestellingen met aandacht verzorgen.",
      "Bezoekers persoonlijk ontvangen en bijdragen aan een open sfeer.",
      "Samenwerken binnen een betrokken vrijwilligersomgeving.",
    ],
    tags: ["Hospitality", "Service", "Samenwerking"],
  },
  {
    period: "2020 — 2023",
    dateTime: "2020",
    company: "Be-you-tiful",
    role: "Eigenaar · bruidsstyliste",
    location: "Zwolle",
    summary: "Eigen onderneming in bruidsmake-up, haarstyling en visagie.",
    responsibilities: [
      "Bruidsmake-up en haarstyling voor bruiden en daggasten.",
      "Persoonlijke visagie afgestemd op gezicht, stijl en gelegenheid.",
      "Klantcontact, planning en professionele voorbereiding in eigen beheer.",
    ],
    tags: ["Bruidsstyling", "Visagie", "Ondernemerschap"],
  },
  {
    period: "2016 — 2020",
    dateTime: "2016",
    company: "Dansworkshops op scholen",
    role: "Dansdocent",
    location: "Regio Zwolle",
    summary: "Beweging, plezier en expressie toegankelijk maken voor groepen.",
    responsibilities: [
      "Dansworkshops voorbereiden en begeleiden op scholen.",
      "Groepen activeren met duidelijke, haalbare bewegingsstappen.",
      "Ruimte creëren voor plezier, performance en eigen expressie.",
    ],
    tags: ["Performance", "Uitleg", "Groepsenergie"],
  },
  {
    period: "2018 — 2019",
    dateTime: "2018",
    company: "Sissy-Boy",
    role: "Verkoopmedewerker",
    location: "Zwolle",
    summary: "Persoonlijke service en presentatie op de winkelvloer.",
    responsibilities: [
      "Klanten adviseren bij producten, stijl en combinaties.",
      "Verkoop en service met aandacht voor de individuele klant.",
      "Bijdragen aan een verzorgde presentatie van de collectie.",
    ],
    tags: ["Retail", "Styling", "Klantadvies"],
  },
  {
    period: "2017",
    dateTime: "2017",
    company: "Blij",
    role: "Bediening",
    location: "Zwolle",
    summary: "Gastvrij contact in een omgeving waar tempo en sfeer samenkomen.",
    responsibilities: [
      "Gasten verwelkomen en bestellingen opnemen.",
      "Bestellingen zorgvuldig en vlot uitserveren.",
      "Aandacht houden voor gast, team en sfeer.",
    ],
    tags: ["Gastvrijheid", "Tempo", "Contact"],
  },
  {
    period: "2011 — 2016",
    dateTime: "2011",
    company: "Shoeby Stadshagen",
    role: "Verkoopmedewerker",
    location: "Zwolle",
    summary: "Modeverkoop en klantadvies met gevoel voor persoonlijke stijl.",
    responsibilities: [
      "Klanten adviseren bij kledingkeuzes en combinaties.",
      "Verkoopkansen herkennen vanuit oprechte aandacht.",
      "Bijdragen aan een uitnodigende, verzorgde winkelpresentatie.",
    ],
    tags: ["Mode", "Verkoop", "Presentatie"],
  },
];

const talentQuotes = [
  {
    quote: "Presenteert zichzelf, anderen en ideeën op een manier die aandacht trekt en waarde zichtbaar maakt.",
    talent: "Etaleertalent · 80%",
  },
  {
    quote: "Ziet relevante kansen en wil mogelijkheden doelgericht benutten om beweging en resultaat te creëren.",
    talent: "Exploitatietalent · 80%",
  },
  {
    quote: "Werkt graag volgens een heldere aanpak en bewaakt daarin een stabiel, herkenbaar kwaliteitsniveau.",
    talent: "Routinetalent · 80%",
  },
];

const education = [
  { period: "2013 — 2016", dateTime: "2013", title: "Song & Dance · MBO 4", detail: "Zang, dans en acteren" },
  { period: "2012 — 2013", dateTime: "2012", title: "HQ", detail: "Tussenjaar voor creativiteit" },
  { period: "2008 — 2012", dateTime: "2008", title: "VMBO", detail: "Handel en verkoop" },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ilona Frederiks",
    url: "https://www.ilonafrederiks.nl/",
    homeLocation: { "@type": "Place", name: "Zwolle, Nederland" },
    jobTitle: "Allround professional in styling, verkoop en performance",
    sameAs: ["https://nl.linkedin.com/in/ilona-frederiks-666b63353"],
  };

  return (
    <>
      <a className="skipLink" href="#main-content">Ga naar de inhoud</a>
      <RevealEffects />
      <header className="masthead" aria-label="Hoofdnavigatie">
        <a className="brand" href="#profiel" aria-label="Ilona Frederiks, terug naar boven">
          <span className="brandMark">IF</span>
          <span className="brandText">Ilona Frederiks</span>
        </a>
        <nav className="desktopNav" aria-label="Secties">
          <a href="#portfolio">Portfolio</a>
          <a href="#profieltekst">Profiel</a>
          <a href="#ervaring">Ervaring</a>
          <a href="#talenten">Talenten</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="headerActions">
          <a
            className="socialHeaderLink"
            href="https://nl.linkedin.com/in/ilona-frederiks-666b63353"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn-profiel van Ilona Frederiks"
          >
            in
          </a>
          <MobileMenu />
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="profiel" aria-labelledby="hero-title">
          <h1 className="srOnly" id="hero-title">Ilona Frederiks</h1>

          <div className="heroDesktopArtwork" data-reveal>
            <img
              src="/hero-editorial-2200.jpg"
              srcSet="/hero-editorial-1200.jpg 1200w, /hero-editorial-2200.jpg 2200w"
              sizes="(max-width: 1700px) calc(100vw - 5rem), 1620px"
              alt="Ilona Frederiks — styling, verkoop en performance in Zwolle"
              width="2200"
              height="1157"
              fetchPriority="high"
            />
          </div>

          <div className="heroMobileArtwork" data-reveal>
            <div className="heroMobileIdentity" aria-hidden="true">
              <p className="heroMobileName"><span>Ilona</span><span>Frederiks</span></p>
              <p className="heroMobileDisciplines">Styling · Verkoop · Performance</p>
            </div>
            <div className="heroMobilePortrait">
              <img
                src="/ilona-frederiks-640.jpg"
                srcSet="/ilona-frederiks-640.jpg 640w, /ilona-frederiks-1000.jpg 1000w"
                sizes="92vw"
                alt="Portret van Ilona Frederiks"
                width="640"
                height="853"
                fetchPriority="high"
              />
            </div>
            <div className="heroMobileLocation" aria-hidden="true">
              <span />
              <p>Zwolle</p>
              <span />
            </div>
          </div>

          <div className="heroIntroduction" data-reveal data-reveal-delay="1">
            <div className="heroStatement">
              <p className="eyebrow">Allround professional · Zwolle</p>
              <p className="heroTagline">Stijl die zichtbaar maakt. Energie die mensen meeneemt.</p>
            </div>
            <div className="heroStory">
              <p className="heroIntro">
                Creatief, sociaal en gastvrij — met ervaring in styling, verkoop en performance.
                Ilona brengt aandacht voor mensen samen met een scherp oog voor presentatie.
              </p>
              <div className="heroCtas">
                <a className="primaryButton" href="#portfolio">Bekijk portfolio <ArrowIcon /></a>
                <a
                  className="textButton"
                  href="https://wa.me/31657177997"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp met Ilona <ArrowIcon />
                </a>
              </div>
            </div>
            <aside className="availability" aria-labelledby="availability-title">
              <div className="availabilityStatus">
                <span aria-hidden="true" />
                <p id="availability-title">Beschikbaar voor een gesprek</p>
              </div>
              <dl>
                <div><dt>Richting</dt><dd>Styling · verkoop · presentatie</dd></div>
                <div><dt>Uren & start</dt><dd>In overleg</dd></div>
                <div><dt>Regio</dt><dd>Zwolle en omgeving</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="portfolioSection" id="portfolio" aria-labelledby="portfolio-title">
          <div className="editorialHeading" data-reveal>
            <p className="sectionIndex">02</p>
            <div>
              <p className="eyebrow">Beauty archive</p>
              <h2 id="portfolio-title">Het oog wil ook wat.</h2>
            </div>
            <p className="sectionIntro">
              Een visuele selectie uit Ilona&apos;s beauty-achtergrond: studio, tools en details
              die laten zien hoeveel aandacht er in een verzorgde look zit.
            </p>
          </div>

          <div className="portfolioGrid">
            {portfolio.map((item, index) => (
              <figure
                className={`portfolioItem portfolioItem--${item.layout}`}
                key={item.image}
                data-reveal
                data-reveal-delay={String(index % 3)}
              >
                <div className="portfolioImage">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    srcSet={`${item.image.replace(".jpg", "-480.jpg")} 480w, ${item.image} ${item.width}w`}
                    sizes="(max-width: 680px) 92vw, (max-width: 1000px) 48vw, 42vw"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="portfolioNumber" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption>
                  <p>{item.category}</p>
                  <h3>{item.title}</h3>
                  <span>{item.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="profileSection" id="profieltekst" aria-labelledby="profile-title">
          <div className="profileStatement" data-reveal>
            <p className="eyebrow eyebrowLight">Profiel</p>
            <h2 id="profile-title">Mooi presenteren begint met goed kijken.</h2>
          </div>
          <div className="profileCopy" data-reveal data-reveal-delay="1">
            <p className="profileLead">
              Ilona ziet hoe mensen, ideeën en producten beter uit de verf kunnen komen.
            </p>
            <p>
              Ze combineert presentatiekracht met een praktische aanpak: kansen herkennen,
              de bedoeling vertalen naar heldere stappen en vasthouden aan wat kwaliteit oplevert.
              Dat maakt haar waardevol in rollen waarin klantcontact, uitstraling en uitvoering
              elkaar versterken.
            </p>
            <ul className="profilePillars" aria-label="Kernkwaliteiten">
              <li><span>01</span><strong>Zichtbaar maken</strong><p>Stijl en presentatie inzetten om waarde voelbaar te maken.</p></li>
              <li><span>02</span><strong>Helder maken</strong><p>Een bedoeling vertalen naar praktische, begrijpelijke stappen.</p></li>
              <li><span>03</span><strong>Vooruitbrengen</strong><p>Kansen zien, benutten en zorgvuldig integreren.</p></li>
            </ul>
          </div>
        </section>

        <section className="experienceSection" id="ervaring" aria-labelledby="experience-title">
          <div className="editorialHeading" data-reveal>
            <p className="sectionIndex">03</p>
            <div>
              <p className="eyebrow">Curriculum vitae</p>
              <h2 id="experience-title">Ervaring in beweging.</h2>
            </div>
            <p className="sectionIntro">
              Van eigen ondernemerschap en modeverkoop tot performance, hospitality en vrijwilligerswerk.
            </p>
          </div>

          <div className="experienceList">
            {experience.map((item, index) => (
              <article className="experienceItem" key={`${item.period}-${item.company}`} data-reveal>
                <div className="experienceMeta">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time dateTime={item.dateTime}>{item.period}</time>
                  <p>{item.location}</p>
                </div>
                <div className="experienceMain">
                  <p className="experienceRole">{item.role}</p>
                  <h3>{item.company}</h3>
                  <p className="experienceSummary">{item.summary}</p>
                </div>
                <div className="experienceDetails">
                  <p className="detailLabel">Rolaccenten</p>
                  <ul>
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>
                  <div className="tagList" aria-label="Vaardigheden">
                    {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="quotesSection" id="talenten" aria-labelledby="quotes-title">
          <div className="quotesHeading" data-reveal>
            <p className="eyebrow">Professioneel profiel</p>
            <h2 id="quotes-title">Wat haar werk typeert.</h2>
            <p>Drie krachtlijnen uit de Jane Talentenrapportage van 2026.</p>
          </div>
          <div className="quoteGrid">
            {talentQuotes.map((item, index) => (
              <article key={item.talent} data-reveal data-reveal-delay={String(index)}>
                <span className="talentIndex" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.talent}</strong>
                  <small>Jane Talentenrapportage · 2026</small>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="educationSection" id="opleiding" aria-labelledby="education-title">
          <div className="educationHeading" data-reveal>
            <p className="sectionIndex">04</p>
            <p className="eyebrow">Opleiding</p>
            <h2 id="education-title">Een creatieve basis.</h2>
          </div>
          <div className="educationList">
            {education.map((item) => (
              <article key={item.title} data-reveal>
                <time dateTime={item.dateTime}>{item.period}</time>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="socialSection" aria-labelledby="social-title">
          <div data-reveal>
            <p className="eyebrow">Connect</p>
            <h2 id="social-title">Volg de volgende stap.</h2>
          </div>
          <div className="socialLinks" data-reveal data-reveal-delay="1">
            <a
              href="https://nl.linkedin.com/in/ilona-frederiks-666b63353"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span><strong>Professioneel profiel</strong><ArrowIcon />
            </a>
            <div className="socialPlaceholder" aria-label="Instagram-profiel wordt later toegevoegd">
              <span>Instagram</span><strong>Portfolio volgt</strong><i>—</i>
            </div>
          </div>
        </section>

        <footer className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contactTop" data-reveal>
            <p className="eyebrow eyebrowLight">Contact</p>
            <h2 id="contact-title">Samen iets zichtbaar maken?</h2>
            <p>Ilona maakt graag kennis voor een passende functie of creatieve samenwerking.</p>
            <a
              className="contactCta"
              href="https://wa.me/31657177997"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp met Ilona <ArrowIcon />
            </a>
          </div>
          <address>
            <a href="mailto:ilonafrederiks@gmail.com">
              <span>E-mail</span><strong>ilonafrederiks@gmail.com</strong><ArrowIcon />
            </a>
            <a href="tel:+31657177997">
              <span>Telefoon</span><strong>06 57177997</strong><ArrowIcon />
            </a>
            <a href="https://www.ilonafrederiks.nl/" target="_blank" rel="noreferrer">
              <span>Website</span><strong>ilonafrederiks.nl</strong><ArrowIcon />
            </a>
          </address>
          <div className="footerLine">
            <span>Ilona Frederiks · Zwolle</span>
            <a href="#profiel">Terug naar boven ↑</a>
          </div>
        </footer>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
