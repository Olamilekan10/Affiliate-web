import React from 'react';
import './Carousel.css';
import fit1Image from '../../images/fitness3.jpg';
import fit2Image from '../../images/fitness2.jpg';
import fit3Image from '../../images/fitness1.jpg';
import health1 from '../../images/healthy1.jpg';
import health2 from '../../images/healthy4.jpg';
import health3 from '../../images/healthy5.jpg';


export const Carousel = () => {
  return (
    <>
        {/* carousel section */}
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={fit1Image} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Welcome to health Coach</h5>
                    <p>Get in shape faster, live your happy life</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={fit2Image} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Welcome to health Coach</h5>
                    <p>You can transform your health through habit change</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src={fit3Image} class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>A Fresh approach to a healthy life</h5>
                    <p>Unlock you potential with good nutrition</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </button>
            </div>

            {/* card description section */}
            <div className="container">
            <div class="card-deck">
                <div class="card">
                    <img src={health1} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Exercise Program</h5>
                    <p class="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    <div className="text-center">
                        <button class="btn btn-outline-primary my-3">Read More</button>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <img src={health2} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Nutrition Plans</h5>
                    <p class="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    <div className="text-center">
                        <button class="btn btn-outline-primary my-3">Read More</button>
                    </div>
                    </div>
                </div>
                <div class="card">
                    <img src={health3} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Diet Program</h5>
                    <p class="card-text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                    <div className="text-center">
                        <button class="btn btn-outline-primary my-3">Read More</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    </>
  )
}
