import React from "react";

import { Link } from "react-router-dom";


function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img src="media/images/homeHero.png" style={{width:"80%", marginLeft:"90px"}}  alt="" className="mb-5" />
        <h1 className="mt-5 text-muted">Invest in everything</h1>
        <p className="text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
            <Link  style={{color:"white", textDecoration:"none"}} to="/signup">
                             Sign up for free
                           </Link>
        </button>
      </div>
    </div>
  );
}

export default Hero;
