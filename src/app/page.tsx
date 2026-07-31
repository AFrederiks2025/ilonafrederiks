import Image from "next/image";
import styles from "./page.module.css";

const experience = [
  {
    period: "2020 - 2023",
    role: "Eigenaar & bruidsstyliste",
    company: "Be-you-tiful",
    description: "Bruidsstyling, haar en visagie vanuit een eigen onderneming.",
  },
  {
    period: "2018 - 2019",
    role: "Verkoopmedewerkster",
    company: "Sissy-Boy",
    description: "Persoonlijk klantcontact, verkoop en winkelpresentatie.",
  },
  {
    period: "2017",
    role: "Medewerker bediening",
    company: "Blij",
    description: "Gastvrijheid en service in een levendige omgeving.",
  },
  {
    period: "2016 - 2020",
    role: "Dansdocent",
    company: "Creatieve workshops",
    description: "Dansworkshops verzorgd op verschillende scholen.",
  },
  {
    period: "2011 - 2016",
    role: "Verkoopmedewerkster",
    company: "Shoeby Stadshagen",
    description: "Verkoop, klantadvies en ondersteuning op de winkelvloer.",
  },
];

const education = [
  {
    period: "2013 - 2016",
    title: "Song & Dance, MBO 4",
    detail: "Zang, dans en acteren",
  },
  {
    period: "2012 - 2013",
    title: "HQ",
    detail: "Creatief tussenjaar",
  },
  {
    period: "2008 - 2012",
    title: "VMBO",
    detail: "Handel & Verkoop",
  },
];

const talents = [
  "Klantgericht",
  "Sociaal",
  "Creatief",
  "Ondernemend",
  "Volhardend",
  "Presenteren",
];

export default function Home() {
  return (
    <>
      <a className={styles.skipLink} href="#inhoud">
        Ga naar de inhoud
      </a>

      <header className={styles.header}>
        <a className={styles.wordmark} href="#top" aria-label="Ilona Frederiks - naar boven">
          IF<span>.</span>
        </a>
        <nav className={styles.nav} aria-label="Hoofdnavigatie">
          <a href="#profiel">Profiel</a>
          <a href="#ervaring">Ervaring</a>
          <a href="#opleiding">Opleiding</a>
          <a className={styles.navContact} href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="inhoud">
        <section className={styles.hero} id="top" aria-labelledby="hero-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>CV · Styling · Verkoop · Creativiteit</p>
            <h1 id="hero-title">
              Ilona
              <span>Frederiks</span>
            </h1>
            <p className={styles.lead}>
              Enthousiaste, sociale en creatieve professional uit Zwolle. Ik breng
              mensen, stijl en service samen.
            </p>
            <div className={styles.heroActions}>
              <a className={styles.primaryButton} href="mailto:ilonafrederiks@gmail.com">
                Neem contact op
                <span aria-hidden="true">↗</span>
              </a>
              <a className={styles.textLink} href="#ervaring">
                Bekijk mijn ervaring
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className={styles.portraitWrap}>
            <div className={styles.portraitAccent} aria-hidden="true" />
            <Image
              className={styles.portrait}
              src="/ilona-frederiks.jpeg"
              alt="Portret van Ilona Frederiks"
              width={355}
              height={542}
              sizes="(max-width: 760px) 78vw, 38vw"
              priority
            />
            <p className={styles.location}>
              <span aria-hidden="true">●</span> Zwolle, Nederland
            </p>
          </div>
        </section>

        <section className={styles.profileSection} id="profiel" aria-labelledby="profiel-title">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>01</p>
            <h2 id="profiel-title">Over mij</h2>
          </div>
          <div className={styles.profileContent}>
            <p className={styles.profileStatement}>
              “Ik krijg energie van mensen, mooie dingen maken en samen zorgen
              dat iemand zich gezien voelt.”
            </p>
            <div className={styles.profileDetails}>
              <p>
                Mijn ervaring loopt van retail en gastvrijheid tot dansonderwijs
                en bruidsstyling. In al die rollen staan aandacht, presentatie en
                persoonlijk contact centraal.
              </p>
              <p>
                Ik werk graag samen, pak verantwoordelijkheid en combineer een
                positieve instelling met creativiteit en doorzettingsvermogen.
              </p>
              <ul className={styles.talentList} aria-label="Kernkwaliteiten">
                {talents.map((talent) => (
                  <li key={talent}>{talent}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.experienceSection} id="ervaring" aria-labelledby="ervaring-title">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>02</p>
            <h2 id="ervaring-title">Werkervaring</h2>
          </div>
          <div className={styles.timeline}>
            {experience.map((item) => (
              <article className={styles.timelineItem} key={`${item.company}-${item.period}`}>
                <p className={styles.period}>{item.period}</p>
                <div className={styles.timelineMarker} aria-hidden="true">
                  <span />
                </div>
                <div className={styles.timelineCopy}>
                  <p className={styles.company}>{item.company}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.educationSection} id="opleiding" aria-labelledby="opleiding-title">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionNumber}>03</p>
            <h2 id="opleiding-title">Opleiding</h2>
          </div>
          <div className={styles.educationGrid}>
            {education.map((item) => (
              <article className={styles.educationCard} key={item.title}>
                <p>{item.period}</p>
                <h3>{item.title}</h3>
                <span>{item.detail}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact" aria-labelledby="contact-title">
          <p className={styles.contactEyebrow}>Kennismaken?</p>
          <h2 id="contact-title">Laten we in gesprek gaan.</h2>
          <p>
            Op zoek naar een sociale en creatieve collega met ervaring in
            verkoop, styling en presentatie? Ik hoor graag van je.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:ilonafrederiks@gmail.com">
              <span>E-mail</span>
              ilonafrederiks@gmail.com
            </a>
            <a href="tel:+31657177997">
              <span>Telefoon</span>
              06 - 57 17 79 97
            </a>
            <p>
              <span>Locatie</span>
              Zwolle
            </p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Ilona Frederiks</p>
        <a href="#top">Naar boven ↑</a>
      </footer>
    </>
  );
}
