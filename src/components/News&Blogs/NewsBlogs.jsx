import React from 'react'

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
                            <a href="/" className="block-20 rounded" ></a>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex animate">
                        
                    </div>
                    <div className="col-md-4 d-flex animate">
                        
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default NewsBlogs