
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About CyberShield | Our Mission";

    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Learn about CyberShield, an educational platform promoting cybersecurity awareness, online safety, privacy and digital protection."
    );
  }, []);

  return (
    <section className="about-page">
      <div className="about-hero">
        <p>ABOUT CYBERSHIELD</p>
        <h1>Protecting Your <span>Digital World</span></h1>
        <p>
          CyberShield is an educational platform dedicated
          to cybersecurity awareness, online safety,
          privacy and digital protection.
        </p>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          We believe everyone deserves to feel safe online.
          Our goal is to make cybersecurity knowledge
          simple, accessible and useful for everyone.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to educate people about online
          threats and provide practical security tips
          to protect their digital lives.
        </p>

        <h2>What We Cover</h2>
        <p>
          Online Safety, Cybersecurity, Privacy and
          Security Guides.
        </p>
      </div>
    </section>
  );
}

export default About;
