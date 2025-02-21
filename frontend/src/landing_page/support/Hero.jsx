import React from 'react';

function Hero() {
    return (
       <section className="container-fluid" id='supportHero'>
        <div className=" p-3 mt- mb-" id='supportWrraper'>
            <h4>Support Portal</h4>
            <a href="">Track TIckets </a>
        </div>

        <div className="row p-5 m-3 mb-5 mx-2" >
          <div className="col-6">
            <h3 className='fs-3'>
            Search for an answer or browse help topics to create a ticket 
            </h3>
            <input type="search" placeholder='Eg: how do i activate F&O, why is my order getting rejected..' /> <br />

          <a href="" className='p-2'>  Track account opening </a>
           <a href="" className='p-2'>  Track segment activation  </a>
           <a href="" className='p-2'>  Intraday margins </a> <br />
             <a href="" className='p-2'> Kite user manual </a>
          </div>
          <div className="col-6 p-3 " >
<h3>Featured</h3>
<ol>
    <li>
        <a href="">MCX Crude option contract expiry - February 2025</a>
    </li>
    <li>
        <a href="">
        Latest Intraday leverages and Square-off timings </a>
    </li>
</ol>

          </div>
        </div>
       </section>
     );
}

export default Hero;