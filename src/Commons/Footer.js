import { useLocation, useHistory } from "react-router";
import DentistSignUpModal from "../Auth/DentistSignUpModal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const history = useHistory();
  const [isSignUpModalVisible, setIsSignUpModalVisible] = React.useState("");
  const [isVerificationModalVisible, setIsVerificationModalVisible] =
    React.useState(false);
  const [entity, setEntity] = React.useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleStartConsultation = () => {
    // Check if email is entered
    if (!email || !email.trim()) {
      setEmailError("Please enter your email");
      return;
    }

    // Check if email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    // Consultation functionality would go here
    console.log("Start consultation with email:", email);

    // Navigate to booking page
    history.push("/book-appointment");
  };

  const scrollToFAQ = (e) => {
    e.preventDefault();

    // If not on homepage, first navigate to homepage
    if (location.pathname !== "/") {
      history.push("/");
      // Need to wait for navigation to complete before scrolling
      setTimeout(() => {
        const faqElement = document.getElementById("faq");
        if (faqElement) {
          // Scroll to the FAQ element with an offset of 100px from the top
          window.scrollTo({
            top: faqElement.offsetTop - 100,
            behavior: "smooth",
          });
        }
      }, 500);
    } else {
      // Already on homepage, just scroll
      const faqElement = document.getElementById("faq");
      if (faqElement) {
        // Scroll to the FAQ element with an offset of 100px from the top
        window.scrollTo({
          top: faqElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer
      style={{
        display:
          location.pathname.includes("messages") ||
          location.pathname.includes("verification-success")
            ? "none"
            : "block",
        backgroundColor: "#1A2433",
        color: "white",
      }}
    >
      <div className="footer-container">
        {/* Top Navigation */}
        <div className="footer-top">
          <div className="footer-logo-nav">
            <Link to={"/"}>
              <img src={"/images/logo-with-text.png"} alt="Teledental Logo" />
            </Link>

            <div className="footer-nav">
              <Link to={"/"} className="footer-nav-link">
                Home
              </Link>
              <Link to={"/contact-us"} className="footer-nav-link">
                Contact
              </Link>
              <Link to={"/join-us"} className="footer-nav-link">
                Join Us
              </Link>
              <a href="#faq" className="footer-nav-link" onClick={scrollToFAQ}>
                FAQ
              </a>
              <Link to={"/auth"} className="footer-nav-link">
                Log In
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Main Content */}
        <div className="footer-content">
          <div className="footer-appointment">
            <h2 className="footer-heading" style={{ fontWeight: 900 }}>
              <strong>Book Your Appointment</strong>
            </h2>
            <div className="footer-form">
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={handleEmailChange}
                className="footer-input"
                style={{ padding: "10px 12px", height: "42px" }}
              />
              {emailError && (
                <div
                  style={{
                    color: "#ff6b6b",
                    fontSize: "0.8rem",
                    marginTop: "0.25rem",
                    textAlign: "left",
                  }}
                >
                  {emailError}
                </div>
              )}
              <button
                className="footer-button mt-4"
                onClick={handleStartConsultation}
                style={{ width: "210px" }}
              >
                <strong>Start Consultation</strong>
              </button>
            </div>
          </div>

          <div className="footer-social">
            <h2 className="footer-heading-second font_piazzolla">
              Follow Teledental
            </h2>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon">
                <div className="social-icon-circle">
                  <i className="fa fa-facebook-f"></i>
                </div>
              </a>
              <a href="https://twitter.com" className="social-icon">
                <div className="social-icon-circle">
                  <i className="fa fa-twitter"></i>
                </div>
              </a>
              <a href="https://instagram.com" className="social-icon">
                <div className="social-icon-circle">
                  <i className="fa fa-instagram"></i>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="footer-articles">
          <div className="footer-articles-column">
            <ul className="footer-article-list">
              <li>
                <Link
                  to={
                    "/cosmetic-teledental-dentistry-teledentistry-treatment-information"
                  }
                  className="footer-article-link"
                >
                  Cosmetic Dentistry Information
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/local-dental-emergencies-teledental-common-dental-problems-consult"
                  }
                  className="footer-article-link"
                >
                  Common Local Dental Emergencies
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/local-gingivitis-teledental-periodontal-information-periodontist-consult"
                  }
                  className="footer-article-link"
                >
                  Gingivitis and Periodontal Information
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/best-teledental-care-local-teledentist-office-information"
                  }
                  className="footer-article-link"
                >
                  Best Teledental Care, Teledentistry Information
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/local-teledentistry-dental-crown-info-online-teledental-crowns-information"
                  }
                  className="footer-article-link"
                >
                  Dental Crown Information, Dental Veneers Discussion
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/local-teledentistry-dental-implants-question-info-teledental-dental-implant-answers"
                  }
                  className="footer-article-link"
                >
                  Teledental Dental Implant Information
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/live-teledental-orthodontics-virtual-consult"}
                  className="footer-article-link"
                >
                  Orthodontics and clear aligners
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/live-dentist-ai-teledental"}
                  className="footer-article-link"
                >
                  Teledental and AI Dental Care
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/virtual-tooth-cavity-teledental"}
                  className="footer-article-link"
                >
                  Tooth Cavity
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/sleep-wellness-virtual-dental-care"}
                  className="footer-article-link"
                >
                  Sleep Wellness Virtual Dental Care
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-articles-column">
            <ul className="footer-article-list">
              <li>
                <Link
                  to={
                    "/best-teeth-whitening-question-dentist-teledental-dental-veneers-info"
                  }
                  className="footer-article-link"
                >
                  Teeth Whitening and Dental Veneers
                </Link>
              </li>
              <li>
                <Link
                  to={"/local-teledental-stem-cells-dentistry-care-information"}
                  className="footer-article-link"
                >
                  Dental Stem Cell
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/cosmetic-teledental-dentistry-teledentistry-treatment-information"
                  }
                  className="footer-article-link"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/local-teledentistry-dental-implants-question-info-teledental-dental-implant-answers"
                  }
                  className="footer-article-link"
                >
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link
                  to={"/tooth-fracture-consult"}
                  className="footer-article-link"
                >
                  Tooth Fracture Information
                </Link>
              </li>
              <li>
                <Link
                  to={
                    "/local-periodontal-questions-about-gum-disease-and-dental-bone-graft-treatment"
                  }
                  className="footer-article-link"
                >
                  Local Periodontal Questions about Gum Disease and Dental Bone
                  Graft Treatment
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/virtual-teledental-root-canal-treatment-info"}
                  className="footer-article-link"
                >
                  Root canal treatment
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/teeth-sensitivity-and-teledental-sensitive-tooth"}
                  className="footer-article-link"
                >
                  Teeth Sensitivity and Teledental Sensitive Tooth
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/dental-implant-information"}
                  className="footer-article-link"
                >
                  Live Dental Implant Questions and Information
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  to={"/dental-insurance"}
                  className="footer-article-link"
                >
                  Local Dental Insurance and Dental Plan Teledental Info
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-combined-legal">
            <strong className="footer-copyright font_piazzolla">
              Copyright @ 2025 Teledental, All rights reserved{" "}
            </strong>
            <strong>|</strong>
            <a href="#" className="footer-legal-link">
              <strong>Cookies</strong>
            </a>
            <strong> | </strong>
            <Link to="/terms-and-conditions" className="footer-legal-link">
              <strong>Terms</strong>
            </Link>
            <strong> | </strong>
            <Link to="/privacy-policy-teledental" className="footer-legal-link">
              <strong>Privacy</strong>
            </Link>
          </div>
        </div>
      </div>

      <DentistSignUpModal
        isModalVisible={isSignUpModalVisible === "dentist"}
        setIsModalVisible={setIsSignUpModalVisible}
        setIsVerificationModalVisible={setIsVerificationModalVisible}
        setEntity={setEntity}
      />
    </footer>
  );
}

export default Footer;
