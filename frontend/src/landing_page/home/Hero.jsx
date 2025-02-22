import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row text-center justify-content-center">
        <div className="col-12">
          <img 
            src="media/images/homeHero.png" 
            className="img-fluid mb-4" 
            alt="Hero"
          />
        </div>
        <div className="col-lg-8 col-md-10 col-12">
          <h1 className="mt-3 text-muted">Invest in everything</h1>
          <p className="text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <Link to="/signup"   className="btn btn-primary fs-5 mt-3 px-4 py-2"  >
          
          Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
