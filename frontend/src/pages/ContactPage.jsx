import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <p className="contact-eyebrow">✦ GET IN TOUCH ✦</p>
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-icon">✉</span>
            <div>
              <h3>Email</h3>
              <p>hello@goldenhope.com</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">📍</span>
            <div>
              <h3>Location</h3>
              <p>New York, NY</p>
            </div>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-icon">🕐</span>
            <div>
              <h3>Hours</h3>
              <p>Mon – Fri, 9am – 6pm EST</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault();
          alert("Message sent! We'll be in touch soon.");
        }}>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="firstName">First Name</label>
              <input id="firstName" type="text" placeholder="Jane" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="lastName">Last Name</label>
              <input id="lastName" type="text" placeholder="Doe" required />
            </div>
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="jane@example.com" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Order inquiry, feedback..." required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={6} placeholder="Write your message here..." required />
          </div>

          <button type="submit" className="contact-submit-btn">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;