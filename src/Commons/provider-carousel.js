import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProviderCarousel = () => {
  return (
    <div className="py-5" style={{ backgroundColor: "#375077" }}>
      <div className="container-fluid">
        <div className="row pt-3">
          <div className="col-lg-9 mx-auto">
            <h2 className="carosel_title text-center">
              Join <span>Teledental</span> as a <span>Dentist</span>
            </h2>
            <p className="carosel_subtitle p-0">Become a Virtual Provider</p>

            <p className="carosel_keywords">
              Expand your reach <span className="d-none d-md-inline">|</span>{" "}
              Grow your practice <span className="d-none d-md-inline">|</span>{" "}
              Deliver virtual care
            </p>
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Carousel indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                  style={{ backgroundColor: "#fff" }}
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="1"
                  style={{ backgroundColor: "#fff" }}
                ></li>
                <li
                  data-target="#myCarousel"
                  data-slide-to="2"
                  style={{ backgroundColor: "#fff" }}
                ></li>
              </ol>
              {/* Wrapper for carousel items */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Row className="carosel_card">
                    {/* Left Column - Image */}
                    <Col xs={12} md={6} className="mb-4 mb-md-0 py-3 py-md-5">
                      <img
                        src="/images/carosel-card-1.png"
                        alt="Dental Guidance"
                        className="img-fluid rounded-3"
                      />
                    </Col>

                    {/* Right Column - Content */}
                    <Col
                      xs={12}
                      md={6}
                      className="py-3 py-md-5 d-flex flex-column"
                    >
                      <div>
                        <h1
                          className="mb-4 title text-center text-md-start"
                          style={{ fontSize: "min(2rem, 7vw)" }}
                        >
                          Join the <span>Teledental.com</span> Team!
                        </h1>
                        <div
                          className="font_piazzolla px-0 fw-medium"
                          style={{
                            fontSize: "clamp(1.1rem, 5vw, 1.3rem)",
                            lineHeight: "1.6",
                          }}
                        >
                          <p className="mb-2 text-center text-md-start">
                            • As a Teledental Dentist.
                          </p>
                          <p className="text-center text-md-start">
                            • Let us help market your dental practice.
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto text-center text-md-start pt-4">
                        <Link to="/auth" className="btn blue_btn">
                          Book Now
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="carousel-item">
                  <Row className="carosel_card">
                    {/* Image and content arrangement for mobile */}
                    <Col xs={12} className="d-block d-md-none mb-4 py-3">
                      <img
                        src="/images/carosel-card-2.png"
                        alt="Dental Guidance"
                        className="img-fluid rounded-3"
                      />
                    </Col>

                    {/* Desktop layout - maintain original order */}
                    <Col md={6} className="d-none d-md-block mb-0 py-5">
                      <img
                        src="/images/carosel-card-2.png"
                        alt="Dental Guidance"
                        className="img-fluid rounded-3"
                      />
                    </Col>

                    {/* Right Column - Content */}
                    <Col
                      xs={12}
                      md={6}
                      className="py-3 py-md-5 d-flex flex-column"
                    >
                      <div>
                        <h1 className="mb-4 title text-center text-md-start">
                          <span>Partner With Us</span>
                        </h1>
                        <p
                          className="mb-4 title text-center text-md-start"
                          style={{ fontSize: "min(1.2rem, 5vw)" }}
                        >
                          Let's <span>&nbsp;collaborate&nbsp;</span> and{" "}
                          <span>&nbsp;revolutionize&nbsp;</span> dental care.
                        </p>
                      </div>
                      <div className="mt-auto text-center text-md-start pt-4">
                        <Link to="/auth" className="btn blue_btn">
                          Register as Dentist
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="carousel-item">
                  <Row className="carosel_card">
                    {/* Image and content arrangement for mobile */}
                    <Col xs={12} className="d-block d-md-none mb-4 py-3">
                      <img
                        src="/images/carosel-card-3.png"
                        alt="Dental Guidance"
                        className="img-fluid rounded-3"
                      />
                    </Col>

                    {/* Desktop layout - maintain original order */}
                    <Col md={6} className="d-none d-md-block mb-0 py-5">
                      <img
                        src="/images/carosel-card-3.png"
                        alt="Dental Guidance"
                        className="img-fluid rounded-3"
                      />
                    </Col>

                    {/* Right Column - Content */}
                    <Col
                      xs={12}
                      md={6}
                      className="py-3 py-md-5 d-flex flex-column"
                    >
                      <div>
                        <h1 className="mb-4 title text-center text-md-start">
                          <span>Add Teledental to Your Practice</span>
                        </h1>
                        <p
                          className="mb-4 title text-center text-md-start"
                          style={{ fontSize: "min(1.2rem, 5vw)" }}
                        >
                          Grow your dental practice by offering&nbsp;&nbsp;
                          <span>virtual consultations.</span>
                        </p>
                      </div>
                      <div className="mt-auto text-center text-md-start pt-4">
                        <Link to="/auth" className="btn blue_btn">
                          Register as Dentist
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              {/* Carousel controls */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderCarousel;
