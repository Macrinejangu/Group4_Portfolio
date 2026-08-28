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

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="tag-pill">Our People</div>

        <h1 className="profile-title">The Developers Behind Group 4</h1>

        <p className="profile-subtitle">
          A collaborative team of developers building reliable, responsive, and
          purposeful digital products with a focus on quality, maintainability,
          and real-world usability.
        </p>
      </section>

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
    </main>
  );
}
