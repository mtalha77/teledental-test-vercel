import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DentalGuidance = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#E0F2FC" }}>
      <Row className="align-items-between">
        {/* Left Column - Image */}
        <Col md={5} className="mb-4 mb-md-0 py-5">
          <img
            src="/images/smiling-sample.png"
            alt="Dental Guidance"
            className="img-fluid rounded-3"
          />
        </Col>

        {/* Right Column - Content */}
        <Col md={6} className="py-5">
          <h1
            className="mb-4 dental_guidance_title"
            style={{ fontSize: "3rem" }}
          >
            The Dental Guidance From Your Home
          </h1>
          <p
            className={`mt-5 font_piazzolla px-2 fw-medium text_blue `}
            style={{ fontSize: "1.3rem" }}
          >
            Talk to a Dentist Online — Virtual Dental Help from Live Dentists,
            Anytime.
          </p>
          <p
            className={`mt-1 font_piazzolla px-2 fw-medium `}
            style={{ fontSize: "1.3rem" }}
          >
            Online Dental Consultations for Tooth Pain, Cavities, and Dentistry
            Concerns — Get Expert Answers from Real Dentists.
          </p>
          <Link to="/book-appointment" className="mt-5 d-inline-block">
            <button size="lg" className="btn pink_btn">
              Book Now
            </button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default DentalGuidance;
