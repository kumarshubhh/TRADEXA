import React from 'react';

function Brokerage() {
    return ( 
       
        <div className="container">
            <div className="row">
                <div className="col-8 p-4">
                <a href="" style={{textDecoration:"none"}}>   <h3 className='fs-5'>Brokerage calculator</h3></a>

                <ul style={{lineHeight:"2.5", fontSize:"14px"}}>
                    <li>
                        Call & trades and RMS auto-squaeoff:Additional charges of 50 + GST per order.
                    </li>
                    <li>
                        Digital contracts notes will be sent via-e-email .
                    </li>
                    <li>
                        Physical copies of contracts notes, if reauire, shall be charged 20 per contract note Courier Chrges apply 
                    </li>
                    <li>if the account is in debit balance  any order placed, will be charged 40 per executed order instead of 20 per executed order </li>
                </ul>

                
                </div>
                <div className="col-4">
                 <a href="" style={{textDecoration:"none"}}>  <h3 className='fs-5'>List of charges</h3></a> 

                </div>
            </div>
        </div>
     );
}

export default Brokerage;