
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact Us | CyberShield";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Contact CyberShield for questions, suggestions and information about cybersecurity, online safety and digital privacy."
    );
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    event.target.reset();
  }

  return (
    <section className="contact-page">

      <div className="contact-heading">
        <p>GET IN TOUCH</p>
        <h1>Contact <span>CyberShield</span></h1>
        <p>Have a question? We would love to hear from you.</p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            Contact us for questions, suggestions
            or cybersecurity-related information.
          </p>

          <div className="contact-item">
            <span>🛡️</span>
            <div>
              <h3>Our Platform</h3>
              <p>CyberShield Digital Security</p>
            </div>
          </div>

          <div className="contact-item">
            <span>🔐</span>
            <div>
              <h3>Our Mission</h3>
              <p>Making the digital world safer.</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            placeholder="Write your message..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message →</button>
        </form>

      </div>
    </section>
  );
}

export default Contact;
