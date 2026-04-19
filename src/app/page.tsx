const serviceCards = [
  {
    title: "Product Engineering",
    text:
      "We plan, design, and ship web applications that are reliable, fast, and made for real daily usage.",
  },
  {
    title: "Platform Architecture",
    text:
      "We build the systems behind the interface so products stay maintainable as users, features, and complexity grow.",
  },
  {
    title: "Sub-Project Stewardship",
    text:
      "As a parent company, we support and evolve focused digital products under one disciplined engineering umbrella.",
  },
];

const principles = [
  {
    title: "Clear scope",
    text: "Start lean, solve the core problem, and avoid unnecessary layers.",
  },
  {
    title: "Strong foundations",
    text: "Prioritize stable architecture, readable code, and practical performance.",
  },
  {
    title: "Long-term thinking",
    text: "Ship software that can keep improving instead of being rebuilt from scratch.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Define the right product",
    text: "We align business goals, user needs, and technical boundaries before heavy implementation begins.",
  },
  {
    number: "02",
    title: "Build with discipline",
    text: "Design systems, application logic, and interfaces are developed with clarity and maintainability in mind.",
  },
  {
    number: "03",
    title: "Support real growth",
    text: "Once live, we refine, scale, and strengthen the product as usage expands.",
  },
];

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="page" id="top">
      <div className="shell">
        {/* Simple top bar with lightweight site navigation */}
        <header className="topbar">
          <div className="topbarInner">
            <div className="brandBlock">
              <span className="brand">Latten Technologies, LLC</span>
              <span className="tag">
                Parent company • software engineering • web applications
              </span>
            </div>

            <nav className="nav" aria-label="Primary navigation">
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero section: concise positioning with brutalist visual framing */}
        <section className="hero">
          <div className="heroGrid">
            <div className="heroCard">
              <span className="eyebrow">Minimal systems. Serious execution.</span>
              <h1 className="heroTitle">Software for products that need to last.</h1>
              <p className="heroText">
                Latten Technologies, LLC is a parent company and engineering studio
                focused on building clean, scalable web applications for real-world
                users. We keep the process simple, the systems durable, and the
                design intentional.
              </p>

              <div className="heroActions">
                <a className="primaryAction" href="#services">
                  View services
                </a>
                <a className="secondaryAction" href="mailto:jlatten@lattentechnologies.com">
                  jlatten@lattentechnologies.com
                </a>
              </div>
            </div>

            {/* Supporting panel with company positioning points */}
            <aside className="panel" aria-label="Company highlights">
              <h2 className="panelHeading">At a glance</h2>
              <ul className="panelList">
                <li>
                  <span className="panelLabel">Structure</span>
                  <span className="panelValue">Parent company for focused sub-projects</span>
                </li>
                <li>
                  <span className="panelLabel">Specialty</span>
                  <span className="panelValue">Modern web apps used by active audiences</span>
                </li>
                <li>
                  <span className="panelLabel">Style</span>
                  <span className="panelValue">Minimal, sharp, and built to scale</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        {/* Company overview */}
        <section className="section" id="about">
          <div className="sectionHeader">
            <div className="sectionLabel">Overview</div>
            <div>
              <h2 className="sectionTitle">
                A simple company site for a focused software business.
              </h2>
              <p className="sectionText">
                We build and oversee digital products with an engineering-first
                mindset. That means careful planning, straightforward systems, and
                dependable delivery without noise.
              </p>
            </div>
          </div>
        </section>

        {/* Service cards */}
        <section className="section" id="services">
          <div className="sectionHeader">
            <div className="sectionLabel">Services</div>
            <div>
              <h2 className="sectionTitle">What Latten Technologies does</h2>
              <p className="sectionText">
                From early product planning to scalable application delivery, the
                goal is the same: build useful software with strong fundamentals.
              </p>
            </div>
          </div>

          <div className="cardGrid">
            {serviceCards.map((card) => (
              <article key={card.title} className="card">
                <h3 className="cardTitle">{card.title}</h3>
                <p className="cardText">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Core working principles */}
        <section className="section" id="approach">
          <div className="sectionHeader">
            <div className="sectionLabel">Approach</div>
            <div>
              <h2 className="sectionTitle">Built with restraint and intent</h2>
              <p className="sectionText">
                The design language is stripped back, but the engineering process is
                thorough. Every decision should support clarity, performance, and growth.
              </p>
            </div>
          </div>

          <div className="cardGrid">
            {principles.map((item) => (
              <article key={item.title} className="card">
                <h3 className="cardTitle">{item.title}</h3>
                <p className="cardText">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Lightweight process timeline */}
        <section className="section">
          <div className="sectionHeader">
            <div className="sectionLabel">Process</div>
            <div>
              <h2 className="sectionTitle">How we move from idea to product</h2>
            </div>
          </div>

          <div className="processList">
            {processSteps.map((step) => (
              <article key={step.number} className="processItem">
                <div className="stepNumber">{step.number}</div>
                <div>
                  <h3 className="processTitle">{step.title}</h3>
                  <p className="processText">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA for partnership or inquiry */}
        <section className="cta" id="contact">
          <div className="ctaInner">
            <div>
              <h2 className="ctaTitle">Need a product partner with engineering depth?</h2>
              <p className="ctaText">
                Latten Technologies, LLC helps turn product direction into dependable
                web software with a clean foundation and a long shelf life.
                Reach out at jlatten@lattentechnologies.com.
              </p>
            </div>

            <a className="ctaAction" href="#top">
              Back to top
            </a>
          </div>
        </section>

        {/* Minimal footer */}
        <footer className="footer">
          <div className="footerInner">
            <span>© {year} Latten Technologies, LLC</span>
            <span>Minimal web engineering for thoughtful digital products.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
