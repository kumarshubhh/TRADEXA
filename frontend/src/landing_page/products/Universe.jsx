import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">

        <h1 className="text-muted mt-3">The TraDexa Universe</h1>
        <p className="text-muted mt-3">Extend your trading and investment experience even further with our partner platforms</p>
        
         <div className="col-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png"alt="" />
            <p className="text-small text-muted p-3 "> Thematic investing platform .</p>
         </div>
         <div className="col-4 p-3 mt-5">
         <img src="media/images/streakLogo.png"alt=""  style={{width:"45%"}}/>
         <p className="text-small text-muted p-3"> Algo & strategy platform  </p>
         </div>
         <div className="col-4 p-3 mt-5">
         <img src="media/images/sensibullLogo.svg"alt="" style={{width:"85%"}} />   
         <p className="text-small text-muted p-4"> Option trading platform.</p>
         </div>


         <div className="col-4 p-3 mt-2">
            <img src="media/images/zerodhaFundhouse.png"alt=""  style={{width:"50%"}}/>
            <p className="text-small text-muted p-3">  Asset management </p>
         </div>
         <div className="col-4 p-3 mt-2">
         <img src="media/images/goldenpiLogo.png"alt="" />
         <p className="text-small text-muted p-3"> Bond trading platform.</p>
         </div>
         <div className="col-4 p-3 mt-2">
         <img src="media/images/dittoLogo.png"alt="" style={{width:"30%"}} />
         <p className="text-small text-muted p-3 "> Insurance</p>
         </div>

         <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-3" 
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
