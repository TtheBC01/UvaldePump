const services = [
  {
    title: "Pump Repair",
    description:
      "24/7 emergency diagnostics and repair for all major pump brands. We minimize downtime for your livestock and home.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Well Testing",
    description:
      "Comprehensive flow testing and water quality analysis to ensure your system meets state efficiency standards.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Parts Inventory",
    description:
      "We stock a massive inventory of gaskets, motors, control boxes, and pipes. If we don't have it, we can get it overnight.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <path d="M12 1v22M4.22 4.22l15.56 15.56M1 12h22M4.22 19.78L19.78 4.22" />
      </svg>
    ),
  },
  {
    title: "Solar Systems",
    description:
      "Off-grid solar pump solutions perfect for remote pastures. Sustainable, reliable, and practically maintenance-free.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="miter"
        aria-hidden="true"
      >
        <path d="M12 2.69l5.74 5.74-5.74 5.74-5.74-5.74L12 2.69zM12 10.43l5.74 5.74-5.74 5.74-5.74-5.74 5.74-5.74z" />
      </svg>
    ),
  },
];

function Logo() {
  return (
    <a
      href={import.meta.env.BASE_URL}
      className="header-logo-link"
      aria-label="Uvalde Pump home"
    >
      <img
        src={`${import.meta.env.BASE_URL}uvalde-pump-logo.png`}
        alt="Uvalde Pump logo"
        className="header-logo-image"
      />
      <div className="logo-text">
        Uvalde <span>Pump</span>
      </div>
    </a>
  );
}

function Header() {
  return (
    <header>
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services" className="nav-link">
            Services
          </a>
          <a href="#parts" className="nav-link">
            Parts
          </a>
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="tel:8302781400" className="btn">
            Call 830-278-1400
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-content">
            <span className="hero-subtitle">Est. Texas 1960</span>
            <h1>Reliable Water Solutions for South Texas</h1>
            <div className="flourish" />
            <p>
              Expert installation, repair, and parts for livestock, residential, and
              commercial water systems across South Texas. We keep the water flowing when
              you need it most.
            </p>
            <div className="hero-actions">
              <a href="tel:8302781400" className="btn">
                Request Service
              </a>
              <a href="#services" className="btn btn-outline">
                View Services
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img
              src={`${import.meta.env.BASE_URL}hero.jpg`}
              alt="Water pump equipment in South Texas field"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Capabilities</h2>
        <p>
          From deep well submersibles to solar-powered surface pumps, our technicians
          are certified to handle the rigorous demands of South Texas conditions.
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="icon-box">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartsSection() {
  return (
    <section id="parts" className="section">
      <div className="container">
        <h2>Pump Parts in Stock</h2>
        <p>
          We keep South Texas customers running with inventory for pumps, motors,
          pressure switches, gaskets, and control boxes from trusted brands.
        </p>
        <a href="tel:8302781400" className="btn btn-outline">
          Ask About Parts Availability
        </a>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Uvalde Pump</h2>
        <p>
          Since 1960, Uvalde Pump has helped ranches, homeowners, and businesses keep
          dependable water service throughout South Texas.
        </p>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section cta-banner">
      <div className="container">
        <h2>Need a Part? Need a Pro?</h2>
        <p>
          Don&apos;t wait until the tank is dry. Call or email the local experts at Uvalde Pump
          today.
        </p>
        <div className="cta-actions">
          <a href="tel:8302781400" className="btn">
            Call 830-278-1400
          </a>
          <a href="mailto:sales@uvaldepump.com" className="btn cta-email-btn">
            Email sales@uvaldepump.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <div className="footer-logo-wrap">
              <Logo />
            </div>
            <p>
              Serving South Texas since 1960. <br />
              Licensed &amp; Insured.
            </p>
          </div>
          <div className="footer-info footer-contact">
            <h3>Contact Us</h3>
            <address className="contact-address">
              3839 E Main St
              <br />
              Uvalde, TX 78801
            </address>
            <a href="mailto:sales@uvaldepump.com" className="contact-email">
              sales@uvaldepump.com
            </a>
            <a href="tel:8302781400" className="contact-large">
              830-278-1400
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PartsSection />
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
