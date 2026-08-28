import "./profile.css";

export default function Profile() {
  const teamMembers = [
    {
      id: "clive",
      name: "Clive Malcom Kyaligamba",
      role: "Developer",
      expertise: "Web Development & Digital Solutions",
      avatar:
        "https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Clive%20Malcom%20Kyaligamba&backgroundColor=f5f2fa",
      description:
        "Develops reliable web solutions with a focus on maintainable code, responsive interfaces, and practical implementation of product requirements.",
      skills: ["JavaScript", "React", "Web Development", "API Integration"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "clive@group4solutions.com",
      },
    },
    {
      id: "macrine",
      name: "Jangu, Macrine",
      role: "Developer",
      expertise: "Frontend Development & User Interfaces",
      avatar:
        "https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Macrine%20Jangu&backgroundColor=f5f2fa",
      description:
        "Builds responsive and accessible interfaces with attention to usability, consistency, and reliable performance across modern devices and environments.",
      skills: ["React", "JavaScript", "Responsive Design", "UI Development"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "macrine@group4solutions.com",
      },
    },
    {
      id: "diana",
      name: "Mwangi, Diana",
      role: "Developer",
      expertise: "Frontend Development & Application Logic",
      avatar:
        "https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Diana%20Mwangi&backgroundColor=f5f2fa",
      description:
        "Develops structured and responsive web applications, working across interfaces, application logic, and integrations to deliver dependable products for real-world use.",
      skills: ["JavaScript", "React", "Web Applications", "Application Logic"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "diana@group4solutions.com",
      },
    },
    {
      id: "joe",
      name: "Mwangi, Joe",
      role: "Developer",
      expertise: "Web Applications & Technical Implementation",
      avatar:
        "https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Mwangi%20Joe&backgroundColor=f5f2fa",
      description:
        "Works on the implementation of scalable web solutions, combining clean development practices with practical problem solving to support reliable digital products.",
      skills: [
        "JavaScript",
        "React",
        "Web Applications",
        "Technical Implementation",
      ],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "joe@group4solutions.com",
      },
    },
    {
      id: "enoch",
      name: "Mwenda, Enoch",
      role: "Developer",
      expertise: "Web Development & Technical Solutions",
      avatar:
        "https://api.dicebear.com/10.x/notionists-neutral/svg?seed=Mwenda%20Enoch&backgroundColor=f5f2fa",
      description:
        "Contributes to the development of dependable digital products through structured implementation, responsive development, and attention to practical technical requirements.",
      skills: ["JavaScript", "React", "Web Development", "Technical Solutions"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "enoch@group4solutions.com",
      },
    },
  ];

  const strengths = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "We create responsive and accessible interfaces that balance visual quality with usability across different devices and screen sizes.",
    },
    {
      number: "02",
      title: "Application Logic",
      description:
        "We structure application behavior carefully so that interfaces remain reliable, understandable, and maintainable as products grow.",
    },
    {
      number: "03",
      title: "API Integration",
      description:
        "We connect applications with external services and APIs to extend functionality and turn interfaces into useful working products.",
    },
    {
      number: "04",
      title: "Technical Problem Solving",
      description:
        "We approach implementation challenges systematically, breaking complex requirements into practical and manageable solutions.",
    },
  ];

  const collaboration = [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by clarifying the problem, requirements, users, and expected outcome before writing code.",
    },
    {
      number: "02",
      title: "Divide",
      description:
        "We organize the work into focused responsibilities so each contributor can work effectively while keeping the larger product in view.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "We implement our assigned components while following shared conventions for structure, styling, and functionality.",
    },
    {
      number: "04",
      title: "Review",
      description:
        "We bring the pieces together, review the implementation, identify inconsistencies, and refine the final product as a team.",
    },
  ];

  const projectValue = [
    "Responsive web experiences",
    "Modern React applications",
    "API-connected interfaces",
    "Practical digital solutions",
    "Maintainable application structures",
    "User-focused product experiences",
  ];

  return (
    <main className="profile-page">
      {/* HERO */}
      <section className="profile-hero">
        <div className="tag-pill">Our People</div>

        <h1 className="profile-title">The Developers Behind Group 4</h1>

        <p className="profile-subtitle">
          A collaborative team of developers building reliable, responsive, and
          purposeful digital products with a focus on quality, maintainability,
          and real-world usability.
        </p>
      </section>

      {/* TEAM */}
      <section className="team-section">
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="member-card" key={member.id}>
              <div className="member-top-row">
                <div className="avatar-wrapper">
                  <img
                    src={member.avatar}
                    alt={`${member.name} avatar`}
                    className="member-avatar"
                    loading="lazy"
                  />

                  <div className="avatar-badge-purple" />
                </div>

                <div className="member-meta">
                  <h2 className="member-name">{member.name}</h2>

                  <span className="member-role">{member.role}</span>

                  <span className="member-expertise">{member.expertise}</span>
                </div>
              </div>

              <p className="member-desc">{member.description}</p>

              <div className="member-skills-section">
                <span className="skills-label">Core Competencies:</span>

                <div className="member-skills">
                  {member.skills.map((skill) => (
                    <span className="skill-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="member-footer">
                <div className="social-links-row">
                  <a
                    href={member.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label={`${member.name} GitHub`}
                    title="GitHub Profile"
                  >
                    <span className="social-mark">GH</span>
                  </a>

                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn"
                    aria-label={`${member.name} LinkedIn`}
                    title="LinkedIn Profile"
                  >
                    <span className="social-mark">in</span>
                  </a>

                  <a
                    href={`mailto:${member.socials.email}`}
                    className="social-btn"
                    aria-label={`Email ${member.name}`}
                    title="Direct Email"
                  >
                    <span className="social-mark">@</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COLLECTIVE STRENGTH */}
      <section className="profile-section">
        <div className="profile-section-heading">
          <div className="section-label">COLLECTIVE STRENGTH</div>

          <h2>More Than Individual Skills</h2>

          <p>
            Our strength comes from combining different areas of technical
            capability into one collaborative development process.
          </p>
        </div>

        <div className="strengths-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.number}>
              <div className="strength-number">{item.number}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* COLLABORATION */}
      <section className="collaboration-section">
        <div className="profile-section-heading">
          <div className="section-label">COLLABORATION</div>

          <h2>How We Work Together</h2>

          <p>
            We treat development as a collaborative process where individual
            contributions come together to form one coherent product.
          </p>
        </div>

        <div className="collaboration-grid">
          {collaboration.map((step) => (
            <article className="collaboration-card" key={step.number}>
              <div className="collaboration-number">{step.number}</div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT VALUE */}
      <section className="project-value-section">
        <div className="project-value-content">
          <div className="section-label">WHAT WE BRING</div>

          <h2>Built Around Practical Outcomes</h2>

          <p>
            We focus on turning requirements and ideas into digital products
            that are functional, responsive, maintainable, and useful to the
            people who interact with them.
          </p>
        </div>

        <div className="project-value-list">
          {projectValue.map((item, index) => (
            <div className="project-value-item" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>

              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="profile-cta">
        <div>
          <div className="section-label">EXPLORE OUR WORK</div>

          <h2>See What We Build Together.</h2>

          <p>
            Explore the projects where our technical skills, collaborative
            process, and practical approach come together.
          </p>
        </div>

        <a href="/projects" className="profile-cta-button">
          View Projects →
        </a>
      </section>
    </main>
  );
}
