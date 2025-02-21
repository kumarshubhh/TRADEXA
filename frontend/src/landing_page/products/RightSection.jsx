import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore }) {
    return ( 
       
        <div className="container mt-5">
        <div className="row">
           
           
            <div className="col-6 p-5 mt-5 " >


                <h1 className='text-muted'>{productName}</h1>
                <p className='text-muted'>{productDescription}</p>
               

                <div>
               
                <a href={learnMore} style={{ textDecoration:"none"}} >Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                
               
            </div>

            <div className="col-6 ">
                <img src={imageURL} alt="" style={{width:"100%"}} />
            </div>
        </div>
       </div>
     );
}

export default RightSection;