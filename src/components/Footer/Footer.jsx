import React from 'react';
import './Footer.css';
// import footerImg from '../../images/bg_2.webp';

const Footer = () => {
  return (
    <>
        <footer className="footer-section">
            <div className="container">
                {/* first row */}
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-6">
                        <div className="subscribe mb-5">
                            <form action="#" className="subscribe-form">
                                <div className="form-group d-flex">
                                    <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
                                    <input type="submit" value="Subscribe" className="form-control submit px-3" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* second row */}
                <div className="row">
                    <div className="col-md-4 col-lg-5">
                        <div className="row">
                            <div className="col-md-12 col-lg-8 mb-md-0 mb-4">
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-7">
                        <div className="row">
                            {/* <div className="col-md-12 col-lg-8 mb-md-0 mb-4">

                            </div> */}
                        </div>
                    </div>
                </div>
                {/* third row */}
                <div className="row mt-5"></div>
            </div>
        </footer>
    </>
  )
}

export default Footer;