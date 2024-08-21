/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import './NewsBlogs.css';
import newsImg1 from '../../images/healthy1.jpg';
import newsImg2 from '../../images/hygiene3.jpeg';
import newsImg3 from '../../images/healthy4.jpg';

const NewsBlogs = () => {
  return (
    <>
        <div className="ftco-section bg-light">
            <div className="container">
                {/* header section */}
                <div className="row justify-content-center pb-5 mb-3">
                    <div className="col-md-7 heading-section text-center animate">
                        <h2>Latest news from our blog</h2>
                        <span className="subheading">News & Blog</span>
                    </div>
                </div>
                {/* content section */}

                <div className="row d-flex">
                    <div className="col-md-4 d-flex animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="/" className="block-20 rounded" 
                            style={{
                                backgroundImage : `url(${newsImg1})`,
                            }}
                            ></a>
                            <div className="text mt-3">
                                <div className="meta mb-2">
                                    <div>
                                        <a href="#">August 21, 2024</a>
                                    </div>
                                    <div>
                                        <a href="#">Admin</a>
                                    </div>
                                    <div></div>
                                </div>
                                <div className="heading">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi odit quisquam itaque dicta
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="/" className="block-20 rounded"
                            style={{
                                backgroundImage : `url(${newsImg2})`,
                            }}
                            ></a>
                            <div className="text-muted">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit ipsum dicta necessitatibus nostrum, consectetur itaque ullam sunt minima, id non vero amet? Illum id blanditiis exercitationem sed animi quisquam!
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="/" className="block-20 rounded"
                            style={{
                                backgroundImage : `url(${newsImg3})`,
                            }}
                            ></a>
                            <div className="text-muted">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia impedit ipsum dicta necessitatibus nostrum, consectetur itaque ullam sunt minima, id non vero amet? Illum id blanditiis exercitationem sed animi quisquam!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>

  )
}

export default NewsBlogs