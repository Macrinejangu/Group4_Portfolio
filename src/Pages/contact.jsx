import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    serviceType: "Web Application Engineering",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      serviceType: "Web Application Engineering",
      message: "",
    });

    setSubmitted(false);
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <div className="tag-pill">Get in Touch</div>

        <h1 className="contact-title">
          Let's Start a{" "}
          <span className="purple-gradient-text">Conversation</span>
        </h1>

        <p className="contact-subtitle">
          Have an inquiry regarding our digital solutions, interested in product
          collaboration, or looking to discuss engineering specifications?
          Connect directly with Group 4.
        </p>
      </section>

      {/* MAIN GRID */}
      <section className="contact-grid">
        {/* FORM CARD */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="contact-success-box">
              <div className="success-icon-wrap">
                <span className="success-check">✓</span>
              </div>

              <div className="success-text-content">
                <h3 className="success-heading">Message Successfully Sent</h3>

                <p className="success-text">
                  Thank you, <strong>{formData.name}</strong>. Your inquiry
                  regarding <em>{formData.serviceType}</em> has been received.
                  Our team will get back to you at <code>{formData.email}</code>
                  .
                </p>

                <button onClick={handleReset} className="btn-gradient-primary">
                  Send Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h2 className="form-title">Send Us a Direct Message</h2>

                <p className="form-desc">
                  Fill out the fields below and our engineering team will
                  respond promptly.
                </p>
              </div>

              {/* NAME + EMAIL */}
              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="contact-name" className="field-label">
                    Full Name *
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="field-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-email" className="field-label">
                    Email Address *
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="field-input"
                  />
                </div>
              </div>

              {/* SERVICE + SUBJECT */}
              <div className="form-row-2col">
                <div className="form-field">
                  <label htmlFor="contact-service" className="field-label">
                    Area of Interest
                  </label>

                  <select
                    id="contact-service"
                    value={formData.serviceType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        serviceType: e.target.value,
                      })
                    }
                    className="field-select"
                  >
                    <option value="Web Application Engineering">
                      Web Application Engineering
                    </option>

                    <option value="Data Verification & Analytics">
                      Data Verification & Analytics
                    </option>

                    <option value="UI/UX Design Systems">
                      UI/UX Design Systems
                    </option>

                    <option value="Influencer Checker Feedback">
                      Influencer Checker Feedback
                    </option>

                    <option value="General Partnership">
                      General Partnership
                    </option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-subject" className="field-label">
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Brief summary of inquiry"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subject: e.target.value,
                      })
                    }
                    className="field-input"
                  />
                </div>
              </div>

              {/* MESSAGE */}
              <div className="form-field">
                <label htmlFor="contact-message" className="field-label">
                  Message *
                </label>

                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  placeholder="Provide context on your digital project, technical questions, or timeline requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="field-textarea"
                />
              </div>

              {/* ACTION */}
              <div className="form-action-row">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-gradient-primary"
                >
                  <span>{submitting ? "Transmitting..." : "Send Message"}</span>
                </button>

                <span className="privacy-notice">
                  We respect your privacy. No spam.
                </span>
              </div>
            </form>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="contact-sidebar">
          {/* CONTACT INFORMATION */}
          <div className="info-box-card">
            <h3 className="info-box-title">Direct Communication</h3>

            <div className="info-item">
              <div className="info-icon-wrap">✉</div>

              <div>
                <span className="info-label">General & Inquiries</span>

                <a
                  href="mailto:contact@group4solutions.com"
                  className="info-val-link"
                >
                  contact@group4solutions.com
                </a>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrap">◷</div>

              <div>
                <span className="info-label">Expected Response</span>

                <span className="info-val-text">
                  Typically within 24–48 hours
                </span>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon-wrap">▢</div>

              <div>
                <span className="info-label">Project Inquiries</span>

                <span className="info-val-text">
                  Accepting select frontend and analytical development requests
                </span>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq-quick-box">
            <h4 className="faq-quick-title">Quick Information</h4>

            <div className="faq-item">
              <strong>How do I try the Influencer Checker?</strong>

              <p>
                You can test it directly on our live deployment at{" "}
                <a
                  href="https://influencer-authenticity-checker.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  influencer-authenticity-checker.vercel.app
                </a>
                .
              </p>
            </div>

            <div className="faq-item">
              <strong>What technologies do you use?</strong>

              <p>
                We build production web frontends with React, modern JavaScript,
                semantic CSS architecture, and Figma systems.
              </p>
            </div>
          </div>

          {/* MAP */}
          <div className="map-card">
            <div className="map-heading">
              <span className="about-label">LOCATION</span>

              <h3>Group 4</h3>

              <p>Ngong Road, Nairobi, Kenya</p>
            </div>

            <iframe
              title="Group 4 location"
              src="https://www.google.com/maps?q=Moringa%20School%20Ngong%20Road%20Nairobi&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </aside>
      </section>
    </main>
  );
}
