import { NavLink } from "react-router-dom";
import "./about.css";

export default function About() {
  const capabilities = [
    {
      number: "01",
      title: "API Integrations",
      description:
        "Connecting legacy architectures with modern interfaces to create reliable and practical digital experiences.",
    },
    {
      number: "02",
      title: "Verification Technology",
      description:
        "Building tools for anti-bot protection, reputation validation, secure auditing, and dependable information verification.",
    },
    {
      number: "03",
      title: "Creative Frontend",
      description:
        "Creating highly responsive interfaces with thoughtful interaction design and attention to detail.",
    },
    {
      number: "04",
      title: "Digital Product Development",
      description:
        "Turning practical ideas into functional digital products through research, design, implementation, and continuous refinement.",
    },
  ];

  const values = [
    {
      number: "01",
      title: "Practical Utility",
      description:
        "Every feature should serve a clear purpose and solve a genuine user problem.",
    },
    {
      number: "02",
      title: "Integrity & Verification",
      description:
        "We value dependable information, careful reasoning, and responsible technical implementation.",
    },
    {
      number: "03",
      title: "Refined Experience",
      description:
        "We believe good software should feel clear, considered, accessible, and easy to navigate.",
    },
  ];

  const approach = [
    {
      number: "01",
      title: "Discovery & Research",
      description:
        "We understand the problem, identify user needs, and establish clear objectives before implementation.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "We map user flows and establish the structure and visual direction of the product.",
    },
    {
      number: "03",
      title: "Focused Development",
      description:
        "We build modular, maintainable interfaces with attention to responsiveness and usability.",
    },
    {
      number: "04",
      title: "Testing & Refinement",
      description:
        "We review the product, identify weaknesses, and refine the experience before delivery.",
    },
  ];

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-label">ABOUT GROUP 4</div>

        <h1 className="about-title">
          Building purposeful software with <span>engineering discipline.</span>
        </h1>

        <p className="about-lead">
          Group 4 is a collaborative team focused on building practical digital
          solutions that combine thoughtful design, reliable engineering, and
          meaningful user experiences.
        </p>
      </section>

      {/* MISSION / IDENTITY */}
      <section className="about-story">
        <article className="story-card">
          <div className="about-label">OUR MISSION</div>

          <h2>Fusing Playful Spirit with Professional Rigor</h2>

          <p>
            Our team is built on a shared ethos: we believe digital tools should
            be purposeful, accessible, and uncompromisingly trustworthy. Whether
            building an influencer's audience validity tool or creating
            educational experiences, we prioritize clarity over noise.
          </p>
        </article>

        <article className="story-card story-card-highlight">
          <div className="about-label">OUR IDENTITY</div>

          <h2>Who We Are</h2>

          <p>
            We are a team of aspiring software developers working together to
            solve real-world digital challenges. We combine our different
            perspectives, technical skills, and design thinking to create
            useful, accessible, and well-structured digital experiences.
          </p>
        </article>
      </section>

      {/* CAPABILITIES */}
      <section className="about-section">
        <div className="section-heading">
          <div className="about-label">CAPABILITIES</div>

          <h2>What We Build</h2>

          <p>
            We bring together technical thinking and user-focused design to
            create practical digital products.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.number}>
              <div className="card-number">{item.number}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="values-section">
        <div className="section-heading">
          <div className="about-label">TECHNOLOGY & DESIGN</div>

          <h2>Our Technology & Design Stack</h2>

          <p>
            We build modular, maintainable products. Each team member
            contributes specialized skills covering architecture, frontend
            development, data, verification, and system design.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article className="value-card" key={value.number}>
              <div className="value-number">{value.number}</div>

              <h3>{value.title}</h3>

              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="about-section">
        <div className="section-heading">
          <div className="about-label">METHODOLOGY</div>

          <h2>Our 4-Stage Approach</h2>

          <p>
            A structured process that helps us move from an idea to a functional
            and refined digital product.
          </p>
        </div>

        <div className="approach-grid">
          {approach.map((step) => (
            <article className="approach-card" key={step.number}>
              <div className="approach-number">{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div>
          <div className="about-label">WHAT WE DO BEST</div>

          <h2>Purposeful technology. Thoughtful design.</h2>

          <p>
            From API integrations and verification technology to creative
            frontend experiences, we combine engineering discipline with
            practical problem-solving to build useful digital products.
          </p>
        </div>

        <div className="about-actions">
          <NavLink to="/profile" className="about-button primary">
            View Team →
          </NavLink>

          <NavLink to="/projects" className="about-button secondary">
            View Projects
          </NavLink>
        </div>
      </section>
    </main>
  );
}
