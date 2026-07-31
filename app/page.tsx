const experience = [
  {
    period: "2020–2023",
    role: "Be-you-tiful",
    description: "Eigen onderneming in bruidsstyling, haar en visagie.",
  },
  {
    period: "2016–2020",
    role: "Dansdocent",
    description: "Dansworkshops op scholen, met aandacht voor plezier en expressie.",
  },
  {
    period: "2018–2019",
    role: "Sissy-Boy",
    description: "Verkoopmedewerker met oog voor presentatie en persoonlijk advies.",
  },
  {
    period: "2017",
    role: "Blij",
    description: "Bediening en gastvrij contact met gasten.",
  },
  {
    period: "2011–2016",
    role: "Shoeby Stadshagen",
    description: "Verkoopmedewerker in mode en klantadvies.",
  },
];

const education = [
  {
    period: "2013–2016",
    title: "Song & Dance — MBO 4",
    description: "Zang, dans en acteren",
  },
  {
    period: "2012–2013",
    title: "HQ",
    description: "Tussenjaar voor creativiteit",
  },
  {
    period: "2008–2012",
    title: "VMBO",
    description: "Handel en verkoop",
  },
];

const workStyle = [
  {
    title: "Zichtbaar maken",
    description:
      "Ik presenteer mensen, ideeën en producten verzorgd en aantrekkelijk, met oog voor detail.",
  },
  {
    title: "Helder maken",
    description:
      "Ik vertaal een bedoeling naar eenvoudige, praktische stappen zodat iedereen weet waar hij of zij aan toe is.",
  },
  {
    title: "Vooruitbrengen",
    description:
      "Ik zie mogelijkheden, houd vast aan wat goed werkt en geef nieuwe ideeën een praktische plek.",
  },
];

const strengthLabels = [
  "Sterk in presentatie",
  "Kansen zien",
  "Kwaliteit vasthouden",
  "Helder uitleggen",
  "Open voor vernieuwing",
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="masthead" aria-label="Hoofdnavigatie">
        <a className="wordmark" href="#profiel" aria-label="Naar het profiel van Ilona Frederiks">
          <span>Curriculum vitae</span>
          <span className="wordmarkDot" aria-hidden="true" />
          <span>Zwolle</span>
        </a>
        <nav aria-label="Secties">
          <a href="#ervaring">Ervaring</a>
          <a href="#werkwijze">Werkwijze</a>
          <a href="#opleiding">Opleiding</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="monogram" href="#profiel" aria-label="Terug naar boven">
          IF
        </a>
      </header>

      <section className="hero" id="profiel" aria-labelledby="hero-title">
        <div className="portraitColumn">
          <div className="portraitFrame">
            <img
              src="/ilona-frederiks.jpg"
              alt="Portret van Ilona Frederiks"
              width="1536"
              height="2048"
              fetchPriority="high"
            />
          </div>
          <div className="namePlate">
            <p>Profiel</p>
            <h1 id="hero-title">
              Ilona <span>Frederiks</span>
            </h1>
          </div>
          <span className="folio" aria-hidden="true">01</span>
        </div>

        <div className="introColumn">
          <p className="eyebrow">Allround professional in styling, verkoop & dans</p>
          <p className="intro">
            Enthousiast, sociaal en creatief. Ik werk graag met mensen en breng ervaring in
            styling, verkoop, gastvrijheid en dans samen.
          </p>
          <p className="supportingCopy">
            Ik maak mensen, ideeën en producten graag zichtbaar op een aantrekkelijke manier.
            Daarbij zie ik kansen, vertaal ik plannen naar heldere stappen en houd ik vast aan een
            aanpak die kwaliteit oplevert.
          </p>
          <a
            className="primaryLink"
            href="https://wa.me/31657177997"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp met Ilona"
          >
            WhatsApp met Ilona <ArrowIcon />
          </a>

          <div className="introFacts" aria-label="Kerngegevens">
            <div>
              <span>Basis</span>
              <strong>Zwolle</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>People · Styling · Performance</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section experienceSection" id="ervaring" aria-labelledby="experience-title">
        <div className="sectionHeading">
          <p className="sectionNumber">02</p>
          <div>
            <p className="eyebrow">Loopbaan</p>
            <h2 id="experience-title">Werkervaring</h2>
          </div>
          <p className="sectionLead">
            Van ondernemerschap en styling tot verkoop, hospitality en onderwijs.
          </p>
        </div>

        <ol className="timeline">
          {experience.map((item) => (
            <li key={`${item.period}-${item.role}`}>
              <time>{item.period}</time>
              <span className="timelineMarker" aria-hidden="true" />
              <div>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="qualities" id="werkwijze" aria-labelledby="work-style-title">
        <div className="qualitiesIntro">
          <p className="eyebrow">Kernkwaliteiten</p>
          <h2 id="work-style-title">Zo werk ik.</h2>
          <p>
            Een natuurlijke combinatie van presentatie, discipline, kansen zien, helderheid en een
            open blik op vernieuwing.
          </p>
        </div>
        <div className="workStyleContent">
          <div className="workStyleGrid">
            {workStyle.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <ul className="strengthLabels" aria-label="Sterke punten">
            {strengthLabels.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section educationSection" id="opleiding" aria-labelledby="education-title">
        <div className="sectionHeading educationHeading">
          <p className="sectionNumber">03</p>
          <div>
            <p className="eyebrow">Achtergrond</p>
            <h2 id="education-title">Opleiding</h2>
          </div>
        </div>

        <div className="educationGrid">
          {education.map((item) => (
            <article key={`${item.period}-${item.title}`}>
              <time>{item.period}</time>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact" aria-labelledby="contact-title">
        <div className="contactIntro">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Laten we kennismaken.</h2>
          <p>Beschikbaar voor een gesprek over een passende functie of samenwerking.</p>
        </div>
        <address>
          <a href="mailto:ilonafrederiks@gmail.com">
            <span>E-mail</span>
            <strong>ilonafrederiks@gmail.com</strong>
            <ArrowIcon />
          </a>
          <a href="tel:+31657177997">
            <span>Telefoon</span>
            <strong>06 57177997</strong>
            <ArrowIcon />
          </a>
          <a href="https://www.ilonafrederiks.nl" target="_blank" rel="noreferrer">
            <span>Website</span>
            <strong>ilonafrederiks.nl</strong>
            <ArrowIcon />
          </a>
        </address>
        <div className="footerLine">
          <span>Ilona Frederiks</span>
          <span>CV · Zwolle</span>
        </div>
      </footer>
    </main>
  );
}
