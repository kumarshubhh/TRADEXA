import React from 'react';

function Brokerage() {
    return ( 
        <div className="container p-4">
            <div className="row">
                <div className="col-md-8 p-4">
                    <a href="" style={{textDecoration:"none"}}>   
                        <h3 className='fs-5'>Brokerage calculator</h3>
                    </a>
                    <ul className="list-unstyled" style={{lineHeight:"2", fontSize:"14px"}}>
                        <li>Call & trades and RMS auto-squaeoff: Additional charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via email.</li>
                        <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <a href="" style={{textDecoration:"none"}}>  
                        <h3 className='fs-5'>List of charges</h3>
                    </a> 
                </div>
            </div>
        </div>
    );
}

export default Brokerage;
