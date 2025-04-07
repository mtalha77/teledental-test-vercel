import Header from "../Commons/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS for carousel functionality

const HomeDentist = () => {

  return (
    <>
      <Header />
      <div className="hero-section">
        <div className=""></div>
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <div className="text-center text-white">
            <img
              src="/images/teledental-logo-without-text.png"
              alt="Teledental Logo"
              className="logo mb-3"
            />
            <h1 className="fw-bold display-4 text-white">
              Expand Your Online Reach
            </h1>
            <button className="btn btn-teledental mt-4 px-4 py-2 rounded-pill">
              Become a Teledental Practitioner
            </button>
          </div>
        </div>
      </div>

      <div className="bg-light py-3">
        <div className="container">
          <p className="carousel-text text-center mb-0">
            Carousel Banner: Put announcements here
          </p>
        </div>
      </div>

      <div className="custom-home-dentist-bg-primary text-white py-5">
        <div className="">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-md-4 mb-lg-0 pt-5 mt-5">
              <div className="d-flex flex-column align-items-center text-center align-items-lg-start text-lg-start ps-lg-5 pt-5 mt-5">
                <img
                  src="/images/teledental-logo-without-text.png"
                  alt="Teledental Logo"
                  className="logo-white mb-3"
                />
                <h2 className="congratulations-text display-5">
                  Consultations
                  <br />
                  With Your
                  <br />
                  Patients
                </h2>
                <button className="btn bg-white mt-4 px-4 py-2 rounded-pill consultation_btn">
                  Start Here / Register
                </button>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              {/* Desktop version with circles - visible only on large screens */}
              <div
                className="steps-container position-relative d-none d-lg-block"
                style={{ minHeight: "650px" }}
              >
                {/* First Circle */}
                <div
                  className="step-circle step-1 position-absolute"
                  style={{
                    top: "-5%",
                    left: "5%",
                    zIndex: 1,
                  }}
                >
                  <div className="step-content text-center">
                    <h3 className="custom-home-dentist-primary-text-color step-number mb-1">
                      1
                    </h3>
                    <h3 className="custom-home-dentist-primary-text-color fw-bold mb-2">
                      Register as Dentist
                    </h3>
                    <p className="custom-home-dentist-primary-text-color step-desc mb-0">
                      Create an account and get approved by Teledental. You will
                      be able to set up your availability (days & time)
                    </p>
                  </div>
                </div>

                {/* Second Circle */}
                <div
                  className="step-circle step-2 position-absolute"
                  style={{
                    top: "40%",
                    left: "28.5%",
                    zIndex: 2,
                  }}
                >
                  <div className="step-content text-center">
                    <h3 className="step-number text-white mb-1">2</h3>
                    <h3 className="fw-bold text-white mb-2">
                      Receive Appointments
                    </h3>
                    <p className="step-desc text-white mb-0">
                      Teledental will connect you with online patients based on
                      the availability you have provided.
                    </p>
                  </div>
                </div>

                {/* Third Circle */}
                <div
                  className="step-circle step-3 position-absolute"
                  style={{ top: "10%", right: "0%", zIndex: 1 }}
                >
                  <div className="step-content text-center">
                    <h3 className="custom-home-dentist-primary-text-color step-number mb-1">
                      3
                    </h3>
                    <h3 className="custom-home-dentist-primary-text-color fw-bold mb-2">
                      Online Consultations
                      <br />
                      With Patients
                    </h3>
                    <p className="custom-home-dentist-primary-text-color step-desc mb-0">
                      Create an account and get approved by Teledental. You will
                      be able to set up your availability (days & time)
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile version - visible only on small and medium screens */}
              <div className="d-block d-lg-none py-4">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center mb-3 py-2">
                          <span
                            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold me-3"
                            style={{
                              width: "36px",
                              height: "36px",
                              minWidth: "36px",
                            }}
                          >
                            <span className="text-white">1</span>
                          </span>
                          <div>
                            <h4 className="mb-1 fw-bold text-white">
                              Register as Dentist
                            </h4>
                            <p className="mb-0 text-white-50 small">
                              Create an account and set up your availability
                            </p>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-3 py-2">
                          <span
                            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold me-3"
                            style={{
                              width: "36px",
                              height: "36px",
                              minWidth: "36px",
                            }}
                          >
                            <span className="text-white">2</span>
                          </span>
                          <div>
                            <h4 className="mb-1 fw-bold text-white">
                              Receive Appointments
                            </h4>
                            <p className="mb-0 text-white-50 small">
                              Connect with online patients based on your
                              availability
                            </p>
                          </div>
                        </li>
                        <li className="d-flex align-items-center py-2">
                          <span
                            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white fw-bold me-3"
                            style={{
                              width: "36px",
                              height: "36px",
                              minWidth: "36px",
                            }}
                          >
                            <span className="text-white">3</span>
                          </span>
                          <div>
                            <h4 className="mb-1 fw-bold text-white">
                              Online Consultations
                            </h4>
                            <p className="mb-0 text-white-50 small">
                              Conduct virtual consultations with patients
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="join-section py-5">
        <div className="container text-center text-white">
          <div className="static-header mb-4">
            <h2 className="fw-bold fs-1 mb-2 text-carousel-piazzolla-white ">
              Join{" "}
              <span className="text-carousel-piazzolla-pink">Teledental</span>{" "}
              as a <span className="text-carousel-piazzolla-pink">Dentist</span>
            </h2>
            <h3 className="display-4 mb-3 text-carousel-inter-white">
              Become a Virtual Provider
            </h3>
            <p className="fs-5 mb-4 text-carousel-piazzolla-white">
              Expand your reach{" "}
              <span className="text-carousel-piazzolla-pink">|</span> Grow your
              practice <span className="text-carousel-piazzolla-pink">|</span>{" "}
              Deliver virtual care
            </p>
          </div>

          <div
            id="joinCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* Slide 1 - Original Slide */}
              <div className="carousel-item active">
                <div
                  className="bg-white rounded p-4 p-md-5 mx-auto"
                  style={{ maxWidth: "800px", minHeight: "300px" }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                      <img
                        src="/images/best-virtual.png"
                        alt="Teledental Team Logo"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-md-8 text-md-start text-center">
                      <h4 className=" fs-3 mb-3 carousel-slider-text ">
                        Join the{" "}
                        <span className="carousel-slider-text fw-bold ">
                          Teledental.com{" "}
                        </span>{" "}
                        Team!
                      </h4>
                      <ul className="list-unstyled text-dark mb-4">
                        <li className="position-relative ps-3 mb-2 text-md-start text-center carousel-slider-text ">
                          • As a Teledental Dentist.
                        </li>
                        <li className="position-relative ps-3 mb-2 text-md-start text-center carousel-slider-text ">
                          • Let us help market your dental practice.
                        </li>
                      </ul>
                      <button className="btn btn-register py-2 px-4 rounded-pill">
                        Register as Dentist
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 2 - Partner With Us */}
              <div className="carousel-item">
                <div
                  className="bg-white rounded p-4 p-md-5 mx-auto"
                  style={{ maxWidth: "800px", minHeight: "300px" }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                      <div className="position-relative">
                        <img
                          src="/images/Ic-tooth.png"
                          alt="Dental Tooth Icon"
                          className="img-fluid"
                          style={{ maxWidth: "200px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8 text-md-start text-center">
                      <h3 className="fw-bold fs-2 mb-2 carousel-slider-text ">
                        Partner With Us
                      </h3>
                      <p className="text-dark fs-5 mb-4">
                        Let's{" "}
                        <span className="fw-bold carousel-slider-text ">
                          collaborate
                        </span>{" "}
                        and{" "}
                        <span className="fw-bold carousel-slider-text ">
                          revolutionize
                        </span>{" "}
                        dental care.
                      </p>
                      <button className="btn btn-register py-2 px-4 rounded-pill">
                        Register as Dentist
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slide 3 - Add Teledental to Your Practice */}
              <div className="carousel-item">
                <div
                  className="bg-white rounded p-4 p-md-5 mx-auto"
                  style={{ maxWidth: "800px", minHeight: "300px" }}
                >
                  <div className="row align-items-center">
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                      <div className="position-relative">
                        <img
                          src="/images/carousel3.png"
                          alt="Teledental Tooth Heart Logo"
                          className="img-fluid"
                          style={{ maxWidth: "200px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-8 text-md-start text-center">
                      <h3 className="fw-bold fs-2 mb-2 carousel-slider-text ">
                        Add Teledental to Your Practice
                      </h3>
                      <p className="carousel-slider-text  fs-5 mb-4">
                        Grow your dental practice by offering{" "}
                        <span className="fw-bold carousel-slider-text ">
                          virtual consultations
                        </span>
                        .
                      </p>
                      <button className="btn btn-register py-2 px-4 rounded-pill">
                        Register as Dentist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#joinCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#joinCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>

            {/* Carousel Indicators */}
            <div className="carousel-indicators position-relative mt-4">
              <button
                type="button"
                data-bs-target="#joinCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#joinCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#joinCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>

      <div className="join-email-section py-5">
        <div className="container h-100 d-flex pt-5 pb-5 align-items-center justify-content-center">
          <div className="text-center text-white">
            <img
              src="/images/teledental-logo-without-text.png"
              alt="Teledental Logo"
              className="logo mb-3"
            />
            <h1 className="fw-bold display-5 text-carousel-inter-white">
              Join the Teledental Team
            </h1>

            <p className="fs-5 mb-4 text-carousel-piazzolla-white">
              Let's get your dental account set up for consultations.
            </p>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email *"
              aria-label="Email"
            />

            <button className="btn btn-teledental mt-4 px-4 py-2 rounded-pill">
              Begin Account Setup
            </button>
          </div>
        </div>
      </div>

      <div className="home-dentist-banner">
        <div className="">
          <img
            src="/images/dentist-home-banner.png"
            alt="Teledental Logo"
            className="banner"
          />
          <h1 className="fw-bold display-5 text-carousel-inter-white ">
            Join the Teledental Team
          </h1>
        </div>
      </div>
    </>
  );
};

export default HomeDentist;
