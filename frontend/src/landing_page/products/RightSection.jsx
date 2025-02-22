import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center">
                
                {/* Text Section */}
                <div className="col-md-6 col-sm-12 p-4 text-center text-md-start">
                    <h1 className='text-muted'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>

                    <div>
                        <a href={learnMore} style={{ textDecoration: "none" }}>Learn More <i className="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>

                {/* Image Section */}
                <div className="col-md-6 col-sm-12 text-center">
                    <img src={imageURL} alt="" style={{ width: "100%", maxWidth: "500px" }} />
                </div>

            </div>
        </div>
    );
}

export default RightSection;
