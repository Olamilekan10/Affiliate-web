import React from 'react';
import './NewsBlogs.css';
import newsImg1 from '../../images/healthy1.png';

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
                    <div className="blog-entry align-self-stretch card">
                        <img src={newsImg1} className="card-img-top" alt="Blog entry" />
                        <div className="card-body">
                            <a href="/" className="block-20 rounded">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus laudantium alias impedit incidunt quibusdam. Ipsam quidem eligendi asperiores, nemo porro fugiat aliquid laborum exercitationem, eaque ipsa aspernatur dolores quam.
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex animate">
                    <div className="blog-entry align-self-stretch card">
                        <img src={newsImg1} className="card-img-top" alt="Blog entry" />
                        <div className="card-body">
                            <a href="/" className="block-20 rounded">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veniam possimus hic. Quam labore, cumque obcaecati iste ducimus voluptates dicta exercitationem eveniet. Reprehenderit amet nam nobis, assumenda veritatis sapiente voluptatum.
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 d-flex animate">
                    <div className="blog-entry align-self-stretch card">
                        <img src={newsImg1} className="card-img-top" alt="Blog entry" />
                        <div className="card-body">
                            <a href="/" className="block-20 rounded">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illo? Consectetur aut cum quos. Consequuntur, laboriosam officiis alias modi, quaerat cupiditate voluptatem totam, hic recusandae in temporibus accusamus maiores a.
                            </a>
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