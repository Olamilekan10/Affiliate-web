import React from "react";
import "./Stories.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import person1 from "../../images/person-2.jpg.webp";
import person2 from "../../images/person-3.jpg.webp";
import person3 from "../../images/person_2.jpg.webp";

const Stories = () => {
  const options = {
    loop: true,
    margin: 10,
    // nav: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  return (
    <>
      {/* Successful stories section */}
      <div className="success-story-section mt-5 overflow-hidden">
        <div className="stories">
          {/* Header part */}
          <div className="row justify-content-center pb-5 mb-3">
            <div className="col-md-7 heading-section text-center animate fadeInUp ftco-animated">
              <span className="subheading mb-3">Stories</span>
              <h2>Successful stories</h2>
            </div>
          </div>

          {/* OwlCarousel section */}
          <div className="container p-5 shadow-lg">
            <OwlCarousel className="owl-theme" {...options}>
              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <img src={person1} alt="Person Story" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 p-4">
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.?
                      </p>

                      {/* Name section */}
                      <div className="client-name">
                        <h3 className="Stories-name">John Doe</h3>
                        <p className="subordinate">Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <img src={person2} alt="Person Story" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 p-4">
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.?
                      </p>

                      {/* Name section */}
                      <div className="client-name">
                        <h3 className="Stories-name">Rony Smith</h3>
                        <p className="subordinate">Client/Messenger</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                      <img src={person3} alt="Person Story" />
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 p-4">
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.?
                      </p>

                      {/* Name section */}
                      <div className="client-name">
                        <h3 className="Stories-name">John Doe</h3>
                        <p className="subordinate">Client/Messenger</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>

          {/* Consultation section */}
          <section className="ftco-intro">
            <div className="overlay"></div>

            {/* content part */}
            <div className="container">
              <div className="row">
                <div className="col-md-9">
                    <h2>We Provide Free Health Care Consultation</h2>
                    <p className="mb-0">
                        Your Health is Our Top Priority with Comprehensive, Affordable Health.
                    </p>
                </div>
                <div className="col-md-3 d-flex align-items-center">
                    <p className="mb-0">
                        {/* <button className="btn btn-light px-4 py-3">Free Consultation</button> */}
                    </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Stories;
