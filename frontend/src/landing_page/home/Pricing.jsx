import React from 'react';

function Pricing() {
    return (  
        <div className="container mb-5">
            <div className="row justify-content-center text-center text-md-start">
                <div className="col-md-4 mb-4">
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" className='text-decoration-none'>See Pricing <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="row text-center">
                        <div className="col-6 p-3 border">
                            <h1 className='mb-3'>&#8377;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col-6 p-3 border">
                            <h1 className='mb-3'>&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
