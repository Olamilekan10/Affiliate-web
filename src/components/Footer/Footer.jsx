import React from 'react';
import './Footer.css';
// import footerImg from '../../images/bg_2.webp';

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                {/* first row */}
                <div className="row justify-content-center">
                    <div className="col-10 col-lg-6">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus itaque nam vitae. Consequatur vel quibusdam dolor aspernatur! Ipsa corporis nam a dolor nemo, architecto aliquid facilis impedit harum, repudiandae ratione!
                    </div>
                </div>
                {/* second row */}
                <div className="row"></div>
                {/* third row */}
                <div className="row mt-5"></div>
            </div>
        </footer>
    </>
  )
}

export default Footer;