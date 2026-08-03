/* eslint-disable @next/next/no-img-element -- Handgemaakte srcSet-varianten houden deze statische portfolio snel op beide hosts. */
import MobileMenu from "./MobileMenu";
import RevealEffects from "./RevealEffects";
import SectionAccordion from "./SectionAccordion";

type PortfolioItem = {
  image: string;
  alt: string;
  category: string;
  title: string;
  caption: string;
  layout: string;
  width: number;
  height: number;
};

type EducationItem = {
  period: string;
  dateTime: string;
  title: string;
  detail: string;
  url?: string;
};

const portfolio: PortfolioItem[] = [
  {
    image: "/portfolio/ilona-visagist-portret.jpg",
    alt: "Ilona Frederiks houdt een grote make-upkwast naast haar gezicht tegen een lichte achtergrond",
    category: "Beauty look",
    title: "Warm & polished",
    caption: "Een complete beautylook met warme tinten, zachte contouren en een verzorgde finish.",
    layout: "feature",
    width: 1107,
    height: 1400,
  },
  {
    image: "/portfolio/editorial-colour-look.jpg",
    alt: "Model in een sculpturale fuchsia-rode jurk op een monumentale trap",
    category: "Editorial styling",
    title: "Statement in kleur",
    caption: "Een sculpturale fuchsia-rode look met warme oogaccenten en een hoog opgestoken kapsel.",
    layout: "portrait",
    width: 933,
    height: 1400,
  },
  {
    image: "/portfolio/forest-bridal-look.jpg",
    alt: "Bruid in een witte kanten jurk met boeket in een bos",
    category: "Bridal styling",
    title: "Natural bridal",
    caption: "Losse golven, subtiele haaraccenten en zachte, natuurlijke tinten.",
    layout: "bridal",
    width: 933,
    height: 1400,
  },
  {
    image: "/portfolio/quiet-bridal-moment.jpg",
    alt: "Bruid in zwart-wit met opgestoken haar veegt een traan weg",
    category: "Wedding beauty",
    title: "Quiet moment",
    caption: "Een glad opgestoken kapsel en verfijnde kanten details in een rustig zwart-witbeeld.",
    layout: "wide",
    width: 1400,
    height: 932,
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
    period: "2018 — 2019",
    dateTime: "2018",
    company: "Sissy-Boy",
    role: "Verkoopmedewerker",
    location: "Zwolle",
    summary: "Modeverkoop, persoonlijk klantadvies en een verzorgde winkelpresentatie.",
    responsibilities: [
      "Klanten tactvol adviseren bij kleding, stijl en combinaties.",
      "Commerciële doelen verbinden aan oprechte persoonlijke aandacht.",
      "Bijdragen aan een nette en uitnodigende presentatie van de collectie.",
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
    period: "2011 — 2016",
    dateTime: "2011",
    company: "Shoeby Stadshagen",
    role: "Verkoopmedewerker",
    location: "Zwolle",
    summary: "Modeverkoop en klantadvies met gevoel voor persoonlijke stijl.",
    responsibilities: [
      "Klanten rustig en tactvol adviseren, ook bij onzekerheid over pasvorm of figuur.",
      "Combinaties zoeken waarin een klant zich mooi, zelfverzekerd en prettig voelt.",
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

const education: EducationItem[] = [
  {
    period: "27 sep. 2022",
    dateTime: "2022-09-27",
    title: "Bruidskapsel Bootcamp",
    detail: "Baron Academy · 3-daagse",
  },
  {
    period: "2021",
    dateTime: "2021",
    title: "Approach of Life",
    detail: "Aanvullende opleiding",
    url: "https://www.approachoflife.nl/",
  },
  {
    period: "31 aug. 2020",
    dateTime: "2020-08-31",
    title: "Make-up Artist",
    detail: "JDO Academy",
  },
  {
    period: "31 aug. 2020",
    dateTime: "2020-08-31",
    title: "Hairstylist",
    detail: "JDO Academy",
  },
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
    jobTitle: "Verkoopmedewerker mode, klantadvies en styling",
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
          <a href="#profieltekst">Profiel</a>
          <a href="#ervaring">Ervaring</a>
          <a href="#beschikbaarheid">Beschikbaarheid</a>
          <a href="#portfolio">Portfolio</a>
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
              <p className="heroMobileDisciplines">
                <span>Verkoopmedewerker mode</span>
                <span>Klantadvies · Styling</span>
              </p>
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
              <p className="eyebrow">Verkoopmedewerker mode · klantadvies · styling</p>
              <p className="heroTagline">Mode verkopen begint met iemand echt zien.</p>
            </div>
            <div className="heroStory">
              <p className="heroIntro">
                Ik ben Ilona: een enthousiaste en gastvrije verkoopmedewerker met ervaring bij
                Shoeby, Sissy-Boy en binnen mijn eigen onderneming. Ik help klanten graag bij het
                vinden van kleding waarin zij zich mooi, zelfverzekerd en prettig voelen.
              </p>
              <p className="heroIntroSecondary">
                Met mijn gevoel voor mode, styling en persoonlijk contact zorg ik voor oprechte
                aandacht én een verzorgde winkelervaring.
              </p>
              <p className="heroAvailabilityLine">Beschikbaar voor 16–24 uur per week in Zwolle en omgeving.</p>
              <div className="heroCtas">
                <a className="primaryButton" href="#ervaring">Bekijk mijn ervaring <ArrowIcon /></a>
                <a
                  className="textButton"
                  href="https://wa.me/31657177997"
                  target="_blank"
                  rel="noreferrer"
                >
                  Maak kennis met Ilona <ArrowIcon />
                </a>
              </div>
            </div>
            <aside className="availability" aria-labelledby="availability-title">
              <div className="availabilityStatus">
                <span aria-hidden="true" />
                <p id="availability-title">Beschikbaar vanaf 17 augustus 2026</p>
              </div>
              <dl>
                <div><dt>Functie</dt><dd>Verkoopmedewerker in een kledingwinkel</dd></div>
                <div><dt>Uren</dt><dd>16–24 uur per week</dd></div>
                <div><dt>Dagen</dt><dd>Maandag · dinsdag · donderdag</dd></div>
                <div><dt>Start</dt><dd><time dateTime="2026-08-17">17 augustus 2026</time></dd></div>
                <div><dt>Regio</dt><dd>Zwolle · maximaal circa 30 minuten reizen</dd></div>
                <div><dt>Dienstverband</dt><dd>Vaste baan</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <SectionAccordion
          id="profieltekst"
          label="Profiel"
          description="Wie Ilona is en wat zij meebrengt"
          tone="dark"
        >
        <section className="profileSection" aria-labelledby="profile-title">
          <div className="profileStatement" data-reveal>
            <p className="eyebrow eyebrowLight">Profiel</p>
            <h2 id="profile-title">Persoonlijke aandacht met gevoel voor stijl</h2>
          </div>
          <div className="profileCopy" data-reveal data-reveal-delay="1">
            <p className="profileLead">
              Ik ben een echt mensenmens. Ik krijg energie van mode, klantcontact en een winkel
              waarin mensen zich welkom voelen.
            </p>
            <p>
              Voor mij begint goed verkopen met luisteren. Ik wil begrijpen wat een klant zoekt,
              maar ook aanvoelen waar iemand onzeker over is. Met tactvol en eerlijk advies help
              ik klanten kleding te vinden die bij hun persoonlijkheid en figuur past.
            </p>
            <p>
              Ik werk graag in een klein en persoonlijk team waarin collega’s elkaar kennen en
              samen verantwoordelijkheid nemen. Enthousiasme, gastvrijheid en betrouwbaarheid zijn
              eigenschappen die ik iedere werkdag meebreng.
            </p>
            <p className="profilePillarsLabel">Wat Ilona meebrengt</p>
            <ul className="profilePillars" aria-label="Wat Ilona meebrengt">
              <li><span>01</span><strong>Persoonlijk klantadvies</strong><p>Ilona neemt de tijd om klanten te leren kennen. Ze kijkt verder dan alleen de kledingmaat en zoekt naar combinaties waarin iemand zich echt prettig voelt.</p></li>
              <li><span>02</span><strong>Verkoopgevoel</strong><p>Door haar ervaring bij Shoeby en Sissy-Boy weet Ilona hoe belangrijk verkoopdoelen zijn. Ze combineert commercieel denken met oprechte aandacht.</p></li>
              <li><span>03</span><strong>Styling en presentatie</strong><p>Ilona is dagelijks bezig met kleding, trends en combinaties. Ze houdt van een verzorgde winkel en ziet snel wat netter, aantrekkelijker of overzichtelijker kan.</p></li>
              <li><span>04</span><strong>Positieve teamenergie</strong><p>Ilona is enthousiast, spontaan en verbindend. Ze vindt het belangrijk dat collega’s elkaar kennen, ondersteunen en samen voor een goede sfeer zorgen.</p></li>
            </ul>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion
          id="praktijk"
          label="In de praktijk"
          description="Een voorbeeld van persoonlijk klantadvies"
          tone="soft"
        >
        <section className="practiceSection" aria-labelledby="practice-title">
          <div className="practiceHeading" data-reveal>
            <p className="eyebrow">Uit de winkelpraktijk</p>
            <h2 id="practice-title">Wanneer een klant weer gaat stralen</h2>
          </div>
          <div className="practiceCopy" data-reveal data-reveal-delay="1">
            <p>
              Bij Shoeby hielp Ilona regelmatig klanten die onzeker waren over hun uiterlijk of
              figuur. Ze sprak die onzekerheid niet zomaar tegen, maar luisterde en zocht rustig
              naar kleding die de sterke kanten van de klant benadrukte.
            </p>
            <p>
              Door een andere pasvorm of combinatie te laten proberen, zag de klant zelf het verschil.
            </p>
            <blockquote>
              <p>“Als iemand in de spiegel kijkt en je ziet de sprankeling terugkomen, dan is mijn advies geslaagd.”</p>
              <footer>Ilona Frederiks</footer>
            </blockquote>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion
          id="ervaring"
          label="Werkervaring"
          description="Functies, verantwoordelijkheden en rolaccenten"
        >
        <section className="experienceSection" aria-labelledby="experience-title">
          <div className="editorialHeading" data-reveal>
            <p className="sectionIndex">02</p>
            <div>
              <p className="eyebrow">Werkervaring</p>
              <h2 id="experience-title">Ervaring die vertrouwen geeft.</h2>
            </div>
            <p className="sectionIntro">
              Ervaring in modeverkoop, klantadvies, ondernemerschap en gastvrijheid — altijd met
              aandacht voor mensen en een verzorgde omgeving.
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
        </SectionAccordion>

        <SectionAccordion
          id="beschikbaarheid"
          label="Ambitie & beschikbaarheid"
          description="Gewenste functie, uren en persoonlijke voorkeuren"
          tone="dark"
        >
        <section className="ambitionSection" aria-labelledby="ambition-title">
          <div className="ambitionStory" data-reveal>
            <p className="eyebrow eyebrowLight">Ambitie</p>
            <h2 id="ambition-title">Groeien binnen de winkel</h2>
            <p className="ambitionLead">
              Ilona zoekt een vaste functie als verkoopmedewerker in een kledingwinkel. Op termijn
              wil zij zich ontwikkelen richting een leidinggevende rol.
            </p>
            <p>
              Haar ervaring als ondernemer, het begeleiden van groepen en haar leidinggevende rol
              binnen een worshipband hebben haar geleerd om verantwoordelijkheid te nemen, overzicht
              te bewaren en mensen met positieve energie mee te nemen. Dat natuurlijke leiderschap
              wil zij verder ontwikkelen in de winkel.
            </p>
            <div className="personalNote">
              <p className="eyebrow eyebrowLight">Persoonlijk</p>
              <h3>Mode, muziek en verbinding</h3>
              <p>
                Mode en muziek lopen als een rode draad door Ilona’s leven. Ze is dagelijks bezig
                met kleding, styling en trends en brengt in groepen graag mensen samen.
              </p>
              <p>
                Ilona is tien jaar getrouwd met Anton. Samen hebben zij een zoon, Benjamin, van 4
                jaar.
              </p>
            </div>
          </div>

          <div className="availabilityPanel" data-reveal data-reveal-delay="1">
            <p className="eyebrow">Beschikbaarheid</p>
            <h3>Een persoonlijke winkel past het best.</h3>
            <dl>
              <div><dt>Gewenste functie</dt><dd>Verkoopmedewerker in een kledingwinkel</dd></div>
              <div><dt>Dienstverband</dt><dd>Vaste baan</dd></div>
              <div><dt>Beschikbaar</dt><dd>16–24 uur per week</dd></div>
              <div><dt>Voorkeursdagen</dt><dd>Maandag, dinsdag en donderdag</dd></div>
              <div><dt>Weekend</dt><dd>Alleen bij hoge uitzondering</dd></div>
              <div><dt>Regio</dt><dd>Maximaal circa 30 minuten reizen vanaf Zwolle</dd></div>
              <div><dt>Rijbewijs</dt><dd>In bezit</dd></div>
              <div><dt>Startdatum</dt><dd><time dateTime="2026-08-17">17 augustus 2026</time></dd></div>
              <div><dt>Voorkeur</dt><dd>Een kleine, persoonlijke kledingwinkel</dd></div>
              <div><dt>Ambitie</dt><dd>Doorgroeien richting leidinggevende</dd></div>
            </dl>
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion
          id="talenten"
          label="Talenten"
          description="Drie krachtlijnen uit de Jane Talentenrapportage"
          tone="soft"
        >
        <section className="quotesSection" aria-labelledby="quotes-title">
          <div className="quotesHeading" data-reveal>
            <p className="eyebrow">Professioneel profiel</p>
            <h2 id="quotes-title">Wat haar werk typeert.</h2>
            <p>
              Drie krachtlijnen uit de Jane Talentenrapportage. Jane® is een
              geregistreerd advies- en trainingsproduct dat motivatiepatronen en potentiële
              vaardigheden in kaart brengt.
            </p>
          </div>
          <div className="quoteGrid">
            {talentQuotes.map((item, index) => (
              <article key={item.talent} data-reveal data-reveal-delay={String(index)}>
                <span className="talentIndex" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.talent}</strong>
                  <small>Jane Talentenrapportage</small>
                </footer>
              </article>
            ))}
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion
          id="portfolio"
          label="Portfolio"
          description="Vier verzorgde beautylooks"
        >
        <section className="portfolioSection" aria-labelledby="portfolio-title">
          <div className="editorialHeading" data-reveal>
            <p className="sectionIndex">03</p>
            <div>
              <p className="eyebrow">Beauty archive</p>
              <h2 id="portfolio-title">Het oog wil ook wat.</h2>
            </div>
            <p className="sectionIntro">
              Een compacte selectie van verzorgde beautylooks op persoon. Alleen het zichtbare
              eindresultaat staat centraal.
            </p>
          </div>

          <details className="portfolioDisclosure">
            <summary>
              <span className="portfolioToggleLabel">
                <span className="portfolioToggleClosed">Bekijk beauty archive</span>
                <span className="portfolioToggleOpen">Sluit beauty archive</span>
                <small>{portfolio.length} beelden</small>
              </span>
              <span className="portfolioToggleIcon" aria-hidden="true" />
            </summary>

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
                      srcSet={item.image.endsWith(".jpg")
                        ? `${item.image.replace(".jpg", "-480.jpg")} 480w, ${item.image} ${item.width}w`
                        : undefined}
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
          </details>
        </section>
        </SectionAccordion>

        <SectionAccordion
          id="opleiding"
          label="Opleiding"
          description="Trainingen, certificaten en creatieve basis"
        >
        <section className="educationSection" aria-labelledby="education-title">
          <div className="educationHeading" data-reveal>
            <p className="sectionIndex">04</p>
            <p className="eyebrow">Opleiding</p>
            <h2 id="education-title">Een creatieve basis.</h2>
          </div>
          <div className="educationList">
            {education.map((item) => (
              <article key={item.title} data-reveal>
                <time dateTime={item.dateTime}>{item.period}</time>
                <h3>
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.title} <span aria-hidden="true">↗</span>
                    </a>
                  ) : item.title}
                </h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
        </SectionAccordion>

        <SectionAccordion
          id="connect"
          label="Connect"
          description="LinkedIn en professioneel profiel"
        >
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
          </div>
        </section>
        </SectionAccordion>

        <footer className="contact" id="contact" aria-labelledby="contact-title">
          <div className="contactTop" data-reveal>
            <p className="eyebrow eyebrowLight">Contact</p>
            <h2 id="contact-title">Kennismaken met Ilona?</h2>
            <p>
              Ilona maakt graag kennis met een kleine, persoonlijke kledingwinkel in Zwolle en omgeving.
            </p>
            <div className="contactActions">
              <a
                className="contactCta"
                href="https://wa.me/31657177997"
                target="_blank"
                rel="noreferrer"
              >
                Maak kennis met Ilona <ArrowIcon />
              </a>
              <a className="contactCta contactCtaSecondary" href="/Ilona-Frederiks-CV.pdf" download>
                Download cv als pdf <span aria-hidden="true">↓</span>
              </a>
            </div>
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
            <div className="footerMeta">
              <span>Ilona Frederiks · Zwolle</span>
              <span className="siteCredit">
                Website gebouwd door{" "}
                <a href="https://www.ewvo.nl/" target="_blank" rel="noreferrer">
                  Anton Frederiks · EWVO.nl <span aria-hidden="true">↗</span>
                </a>
              </span>
            </div>
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
