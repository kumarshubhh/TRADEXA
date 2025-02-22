import React from 'react';

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row align-items-center text-center text-md-start">
                <div className="col-md-6 mb-4">
                    <img src="media/images/education.svg" className="img-fluid" alt="Education" />
                </div>
                <div className="col-md-6 mb-4">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="" className='text-decoration-none'>Varsity <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p className='mt-4'>
                        TradingQ&A, the most active trading and investment community in India for all your market-related queries.
                    </p>
                    <a href="" className='text-decoration-none'>TradingQ&A <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;