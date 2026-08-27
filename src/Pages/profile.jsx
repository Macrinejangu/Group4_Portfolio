import "./profile.css";

export default function Profile() {
  const teamMembers = [
    {
      id: "alex",
      name: "Alex Rivera",
      role: "Lead Frontend Engineer",
      expertise: "React Architecture & State Logic",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
      description:
        "Leads application architecture, responsive state coordination, and modern component lifecycle engineering across our digital product portfolio.",
      skills: [
        "React",
        "JavaScript (ES6+)",
        "Web APIs",
        "Component Architecture",
      ],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "alex@group4solutions.com",
      },
    },
    {
      id: "sophia",
      name: "Sophia Chen",
      role: "UI/UX & Design Systems Lead",
      expertise: "Figma Systems & Typography Hierarchy",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
      description:
        "Engineers intuitive design systems, accessible UI interactions, and visual layouts to deliver polished, human-centered web experiences.",
      skills: [
        "Figma",
        "UI/UX Design",
        "CSS Architecture",
        "Interaction Design",
      ],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "sophia@group4solutions.com",
      },
    },
    {
      id: "marcus",
      name: "Marcus Vance",
      role: "Frontend Data & Verification Engineer",
      expertise: "Graph Visualization & Logic Engines",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
      description:
        "Develops client-side data parsing, topological graph connection algorithms, and engagement verification tools for analytical applications.",
      skills: ["JavaScript", "React", "Data Structures", "Graph Algorithms"],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "marcus@group4solutions.com",
      },
    },
    {
      id: "elena",
      name: "Elena Rostova",
      role: "Frontend Engineer & Quality Lead",
      expertise: "Performance & Cross-Browser Standards",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80",
      description:
        "Ensures flawless rendering, strict accessibility compliance, and silky smooth client interactions across mobile and desktop devices.",
      skills: [
        "React",
        "JavaScript",
        "Responsive Web Design",
        "Quality Assurance",
      ],
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "elena@group4solutions.com",
      },
    },
  ];

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="tag-pill">Our People</div>

        <h1 className="profile-title">
          The Engineering Talent Driving{" "}
          <span className="purple-gradient-text">Group 4</span>
        </h1>

        <p className="profile-subtitle">
          A dedicated team of specialized software engineers and design
          architects collaborating to build purposeful digital products and
          verification tools.
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
                    alt={member.name}
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

                <span className="member-company-tag">Group 4 Core</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
