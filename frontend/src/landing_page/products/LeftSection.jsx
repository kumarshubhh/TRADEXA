import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo , learnMore, googlePlay, appStore}) {
    return ( 
       <div className="container mt-5">
        <div className="row">
            <div className="col-6 ">
                <img src={imageURL} alt="" style={{width:"100%"}} />
            </div>
           
            <div className="col-6 p-5 mt-5 " >


                <h1 className='text-muted'>{productName} </h1>
                <p className='text-muted'>{productDescription}</p>
               

                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo  <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}} >Learn More  <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='mt-3'>
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                <a href={appStore}  style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                </div>
               
            </div>
        </div>
       </div>
     );
}

export default LeftSection;