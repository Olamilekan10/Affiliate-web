import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import testipics from '../../images/hygiene.jpg';
import testipics2 from '../../images/hygiene5.jpeg';
import testipics3 from '../../images/hygiene3.jpeg';
import testipics4 from '../../images/hygiene4.jpeg';
import testipics5 from '../../images/hygiene5.jpeg';
import testipics6 from '../../images/hygiene4.jpeg';
import testipics7 from '../../images/hygiene3.jpeg';
import testipics8 from '../../images/healthy1.jpg';

const Testimonies = () => {
    return (
        <section className="testimony-section bg-light p-5">
            <div className="container">
                {/* Header part */}
                <div className="row justify-content-center pb-5 mb-3">
                    <div className="col-md-7 heading-section text-center animate fadeInUp ftco-animated">
                        <span className="subheading mb-3">Testimonies</span>
                        <h2>Happy Climate & Nature</h2>
                    </div>
                </div>

                {/* Animation part */}
                <div className="row animate fadeInUp">
                    <div className="col-md-12">
                        <OwlCarousel
                            className="owl-theme"
                            loop
                            margin={10}
                            nav
                            autoplay
                            autoplayTimeout={3000}
                            responsive={{
                                0: { items: 1 },
                                600: { items: 3 },
                                1000: { items: 4 }
                            }}
                        >
                            <div className="item"><img src={testipics} alt="Owl" /></div>
                            <div className="item"><img src={testipics2} alt="Owl" /></div>
                            <div className="item"><img src={testipics3} alt="Owl" /></div>
                            <div className="item"><img src={testipics4} alt="Owl" /></div>
                            <div className="item"><img src={testipics5} alt="Owl" /></div>
                            <div className="item"><img src={testipics6} alt="Owl" /></div>
                            <div className="item"><img src={testipics7} alt="Owl" /></div>
                            <div className="item"><img src={testipics8} alt="Owl" /></div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonies;
