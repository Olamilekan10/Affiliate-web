import React from 'react';
import './OtherServices.css';
import iconImg1 from '../../images/diet.png';
import iconImg2 from '../../images/result.png';
import iconImg3 from '../../images/healthy1.png';
import iconImg4 from '../../images/enjoy.png';

const OtherServices = () => {
  return (
    <>
        <section className="other-service-section">
            <div className="other-service container mt-5">
                {/* Header section */}
                <div className="row justify-content-center pb-5 mb-3">
                    <div className="col-md-7 heading-section text-center animate fadeInUp ftco-animated">
                        <span className="subheading mb-3">Other Services</span>
                        <h2>How it works?</h2>
                    </div>
                </div>

                {/* Image icon and content section */}
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <div className="icon-container mb-3">
                            <img src={iconImg1} alt="" className="service-icon" />
                        </div>
                        <h3>Follow the program</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <div className="icon-container mb-3">
                            <img src={iconImg2} alt="" className="service-icon" />
                        </div>
                        <h3>Work for result</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <div className="icon-container mb-3">
                            <img src={iconImg3} alt="" className="service-icon" />
                        </div>
                        <h3>Eat healthy Food</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-center mb-4">
                        <div className="icon-container mb-3">
                            <img src={iconImg4} alt="" className="service-icon" />
                        </div>
                        <h3>Enjoy your life</h3>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default OtherServices;
