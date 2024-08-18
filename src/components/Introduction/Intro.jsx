import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <>
        <section className="intro-section no-pt no-pb mb-5 bg-light">
            <div className="container">
                <div className="row no-gutters">
                    {/* Image display section */}
                    <div className="col-md-5 p-md-5 img img-2 mt-5 mt-md-0">

                    </div>
                    {/* Headings and paragraph section */}
                    <div className="col-md-7 py-4 py-md-5 animate no-space">
                        <div className="heading-section mb-5">

                            <div className="pl-md-5">
                                <span className="subheading mb-2">
                                    Welcome to Healthcare
                                </span>
                                <h2 className="mb-2">
                                    Hello! Health Care is a natural way of improving your health
                                </h2>
                            </div>

                        </div>

                        <div className="pl-md-5 greyed">
                            <p>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar
                            </p>
                            <p>
                                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Healthcare service section */}

            <div className="row no-gutters">
                        {/* Healthcare service column */}
                        <div className="col-md-3 d-flex align-items-stretch">
                            <div className="consultation w-100 text-center px-4 px-md-5">
                                <h3 className="mb-4">Healthcare Services</h3>
                                <p>A small river named Duden flows by their place and supplies</p>
                                <a href="/" className="btn-custom">See services</a>
                            </div>
                        </div>
                         {/* Consultation column */}
                        <div className="col-md-6 d-flex align-items-stretch">
                            <div className="consultation consul w-100 text-center px-4 px-md-5">
                                <div className="text-center">
                                    <h3 className="mb-4">Free Consultation</h3>
                                </div>
                                <form action="#" className="appointment-form">
                                    <div className="row">
                                        {/* first name */}
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        {/* last name */}
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        {/* select option */}
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <div className="form-field">
                                                    <div className="select-wrapper">
                                                        <div className="icon">
                                                            <span class="bi bi-chevron-down"></span>
                                                        </div>

                                                        <select className="form-control">
                                                            <option value="Services"></option>
                                                            <option value="Services"></option>
                                                            <option value="Services"></option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                        {/* Date */}
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <div className="input-wrap">
                                                    <div className="icon">
                                                        <span class="bi bi-calendar"></span>
                                                    </div>
                                                    <input type="text" className="form-control appointment_date" placeholder='Date' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Time */}
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <div className="input-wrap">
                                                    <div className="icon">
                                                        <span class="bi bi-clock"></span>
                                                    </div>
                                                    <input type="text" className="form-control appointment_time ui-timepicker-input" placeholder='Time' />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Button section */}
                                        <div className="col-md-12 col-lg-6 col-xl-4">
                                            <div className="form-group">
                                                <input type="submit" value="Appointment"  class="btn-appoint btn-white px-2  py-2"/>          
                                            </div>
                                        </div>

                                    </div> 
                                </form>
                            </div>
                        </div>
                         {/* Health Expert column */}
                        <div className="col-md-3 d-flex align-items-stretch">
                        <div className="consultation w-100 text-center px-4 px-md-5">
                            <h3 className="mb-4">Find A Health Expert</h3>
                            <p>A small river named Duden flows by their place and supplies</p>
                            <a href="/" className="btn-custom">Meet our Expert Coach</a>
                        </div>  
                        </div>
                    </div>
        </section>
    </>
  )
}

export default Intro