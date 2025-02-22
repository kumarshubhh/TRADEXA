import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return ( 
       <div className="container mt-5">
        <div className="row align-items-center">
            {/* Image Section */}
            <div className="col-md-6 col-sm-12 text-center">
                <img src={imageURL} alt="" style={{ width: "100%", maxWidth: "500px" }} />
            </div>

            {/* Content Section */}
            <div className="col-md-6 col-sm-12 p-4 text-center text-md-start">
                <h1 className='text-muted'>{productName}</h1>
                <p className='text-muted'>{productDescription}</p>

                <div className="d-flex justify-content-center justify-content-md-start gap-3">
                    <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>

                <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-3">
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" style={{ maxWidth: "120px" }} /></a>
                    <a href={appStore}><img src="media/images/appstoreBadge.svg" alt="" style={{ maxWidth: "120px" }} /></a>
                </div>
            </div>
        </div>
       </div>
    );
}

export default LeftSection;
