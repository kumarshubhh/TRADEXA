import React from 'react';

function Awards() {
    return (  
        <div className="container mt-5">
            <div className="row align-items-center text-center text-md-start">
                <div className="col-md-6 p-4">
                    <img src="media/images/largestBroker.svg" className="img-fluid" alt="Largest Broker" />
                </div>
                <div className="col-md-6 p-4">
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><p>Futures and options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li><p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/media/images/pressLogos.png" className="img-fluid mt-4" alt="Press Logos" />
                </div>
            </div>
        </div>
    );
}

export default Awards;
