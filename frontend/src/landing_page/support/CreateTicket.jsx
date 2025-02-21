import React from 'react';

function CreateTicket() {
    return ( 
       <div className="container">
        <div className="row fs-9">
            <h1 className='fs-4 text-muted'>
            To create a ticket, select a relevant topic
            </h1>
       
        <div className="col-4 mt-3">
            <h4>
            <i class="fa-solid fa-circle-plus"></i>  Account Opening 
            </h4>
         <a style={{textDecoration:"none",lineHeight:"2"}} href="">  Getting started</a> <br />
           <a style={{textDecoration:"none", lineHeight:"2"}} href=""> Online</a> <br />
           <a style={{textDecoration:"none",lineHeight:"2"}} href=""> Offline</a> <br />
           <a style={{textDecoration:"none",lineHeight:"2"}} href="">Charges</a><br />
           <a style={{textDecoration:"none",lineHeight:"2"}} href=""> Company, Partnership and HUF</a><br />
           <a style={{textDecoration:"none",lineHeight:"2"}} href="">Non Resident Indian (NRI)</a><br />
        </div>

        <div className="col-4 mt-3">
            <h4>
            <i class="fa-solid fa-user-large"></i>  Your Zerodha Account
            </h4>
         <a style={{textDecoration:"none" , lineHeight:"2"}} href="">   Login credentials</a><br />
           <a style={{textDecoration:"none", lineHeight:"2"}} href=""> Your Profile </a><br />
           <a style={{textDecoration:"none" ,lineHeight:"2"}} href=""> Account modification and segment addition</a><br />
           <a  style={{textDecoration:"none", lineHeight:"2"}} href=""> CMR & DP ID</a><br />
           <a  style={{textDecoration:"none", lineHeight:"2"}} href=""> Nomination</a><br />
           
           <a style={{textDecoration:"none", lineHeight:"2"}} href=""> Transfer and conversion of shares</a>

        </div>

        <div className="col-4 mt-3">
            <h4>
            <i class="fa-solid fa-chart-simple"></i> Trading and Markets
            </h4> <div style={{textDecoration:"none", lineHeight:"2"}}>
           <a style={{textDecoration:"none" ,lineHeight:"2"}} href="">Trading FAQs</a><br />
          <a   style={{textDecoration:"none", lineHeight:"2"}} href="">  Kite</a><br />
          <a style={{textDecoration:"none", lineHeight:"2"}} href="">  Margins</a><br />
          <a style={{textDecoration:"none", lineHeight:"2"}} href="">  Product and order types</a><br />
          <a style={{textDecoration:"none", lineHeight:"2"}} href="">  Corporate actions</a><br />
          <a   style={{textDecoration:"none", lineHeight:"2"}} href="">  Kite features</a><br />
          </div>
        </div>

        <div className="col-4 mt-5">
            <h4>
            <i class="fa-solid fa-folder"></i>   Funds
            </h4>
         <a style={{textDecoration:"none",lineHeight:"2"}} href="">  Fund withdrawal</a> <br />
           <a style={{textDecoration:"none", lineHeight:"2"}} href=""> Adding funds</a> <br />
           <a style={{textDecoration:"none",lineHeight:"2"}} href=""> Adding bank accounts
           </a> <br />
           <a style={{textDecoration:"none",lineHeight:"2"}} href="">eMandates</a><br />
           
        </div>

        <div className="col-4 mt-5">
            <h4>
            <i class="fa-solid fa-terminal"></i>   Console
            </h4>
         <a style={{textDecoration:"none" , lineHeight:"2"}} href="">   IPO</a><br />
           <a style={{textDecoration:"none", lineHeight:"2"}} href=""> Portfolio </a><br />
           <a style={{textDecoration:"none" ,lineHeight:"2"}} href=""> Funds statement</a><br />
           <a  style={{textDecoration:"none", lineHeight:"2"}} href=""> Profile</a><br />
           <a  style={{textDecoration:"none", lineHeight:"2"}} href=""> Reports</a><br />
           
           <a style={{textDecoration:"none", lineHeight:"2"}} href=""> Referral program </a>

        </div>

        <div className="col-4 mt-5">
            <h4>
            <i class="fa-solid fa-chart-simple"></i>  Coin
            </h4> <div style={{textDecoration:"none", lineHeight:"2"}}>
           <a style={{textDecoration:"none" ,lineHeight:"2"}} href=""> Understanding mutual funds and Coin</a><br />
          <a   style={{textDecoration:"none", lineHeight:"2"}} href="">  Coin app</a><br />
          <a style={{textDecoration:"none", lineHeight:"2"}} href="">  Coin web</a><br />
          <a style={{textDecoration:"none", lineHeight:"2"}} href="">  Product and order types</a><br />
          <a style={{textDecoration:"none", lineHeight:"2"}} href="">  Transactions and reports</a><br />
          <a   style={{textDecoration:"none", lineHeight:"2"}} href="">  National Pension Scheme (NPS)</a><br />
          </div>
        </div>

        </div>
       </div>
     );
}

export default CreateTicket;