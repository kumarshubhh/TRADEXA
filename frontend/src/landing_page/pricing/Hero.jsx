import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 border-bottom text-center">
<h1>Pricing</h1>
<h3 className='text-muted mt-3' >Free equity investment and flate &#8377;20 traday and F&O trades</h3>
            </div>
            <div className="row p-5 mt-5 text-center">
            <div className="col-4  ">

<img src="media/images/pricingEquity.svg"  alt="" />
<h2 className='text-muted fs-3'> Free equity delivery</h2>
<p className='text-muted mt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

            </div>
            <div className="col-4 ">
            <img src="media/images/intradayTrades.svg"  alt="" />
<h2 className='text-muted fs-3'> Intraday and F&O trades</h2>
<p className='text-muted mt-4' > Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>



            </div>
            <div className="col-4 ">

            <img src="media/images/pricingEquity.svg"  alt="" />
<h2 className='text-muted fs-3'> Free direct MF</h2>
<p className='text-muted mt-4'> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges. </p>
            </div>

            </div>
        </div>
     );
}

export default Hero;