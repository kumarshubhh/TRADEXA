import React from 'react';

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-3 d-flex justify-content-between align-items-center" id="supportWrapper">
                <h4>Support Portal</h4>
                <a href="#" className="text-primary">Track Tickets</a>
            </div>

            <div className="row p-5 mx-2">
                {/* Left Section */}
                <div className="col-lg-6 col-md-12 mb-4">
                    <h3 className="fs-3">
                        Search for an answer or browse help topics to create a ticket
                    </h3>
                    <input 
                        type="search" 
                        className="form-control mt-3" 
                        placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
                    />
                    <div className="mt-3">
                        <a href="#" className="btn btn-outline-primary me-2 mb-2">Track account opening</a>
                        <a href="#" className="btn btn-outline-primary me-2 mb-2">Track segment activation</a>
                        <a href="#" className="btn btn-outline-primary me-2 mb-2">Intraday margins</a>
                        <a href="#" className="btn btn-outline-primary me-2 mb-2">Kite user manual</a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="col-lg-6 col-md-12">
                    <h3>Featured</h3>
                    <ol className="list-unstyled">
                        <li>
                            <a href="#" className="text-primary">
                                MCX Crude option contract expiry - February 2025
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-primary">
                                Latest Intraday leverages and Square-off timings
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
