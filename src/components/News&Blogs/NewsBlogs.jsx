import React from 'react';
import './NewsBlogs.css';
import newImg1 from '../../images/healthy1.jpg';

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
                {/* <div className="row d-flex">
                    <div className="col-md-4 d-flex animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="/" className="block-20 rounded" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint accusamus laudantium alias impedit incidunt quibusdam. Ipsam quidem eligendi asperiores, nemo porro fugiat aliquid laborum exercitationem, eaque ipsa aspernatur dolores quam.</a>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="/" className="block-20 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veniam possimus hic. Quam labore, cumque obcaecati iste ducimus voluptates dicta exercitationem eveniet. Reprehenderit amet nam nobis, assumenda veritatis sapiente voluptatum.
                            </a>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex animate">
                        <div className="blog-entry align-self-stretch">
                            <a href="/" className="block-20 rounded">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, illo? Consectetur aut cum quos. Consequuntur, laboriosam officiis alias modi, quaerat cupiditate voluptatem totam, hic recusandae in temporibus accusamus maiores a.</a>
                        </div>
                    </div>
                </div> */}

                <div class="card-deck p-5">
                <div class="card">
                    <img src={newImg1} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={newImg1} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <img src={newImg1} class="card-img-top" alt="..." />
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    </div>
                    <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default NewsBlogs