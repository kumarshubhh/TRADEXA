import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading Section */}
      <div className="row p-5 border-top text-center">
        <h1>People</h1>
      </div>

      {/* Profile Section */}
      <div className="row text-muted align-items-center" style={{ lineHeight: "1.8", fontSize: "16px" }}>
        {/* Image Column */}
        <div className="col-lg-6 col-md-12 text-center p-5">
          <img
            src="media/images/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="rounded-circle img-fluid"
            style={{ width: "60%", maxWidth: "250px" }}
          />
          <h5 className="mt-4">Nithin Kamath</h5>
          <h6 className="text-primary">Founder, CEO</h6>
        </div>

        {/* Text Column */}
        <div className="col-lg-6 col-md-12 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade-long stint as a trader.
            Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on:{" "}
            <a href="#" className="text-primary fw-bold">Homepage</a> |{" "}
            <a href="#" className="text-primary fw-bold">TradingQnA</a> |{" "}
            <a href="#" className="text-primary fw-bold">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
