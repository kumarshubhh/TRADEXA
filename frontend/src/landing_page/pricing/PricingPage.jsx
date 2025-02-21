import React from 'react';
import Hero from './Hero';
import Brokerage from './Brokerage';
import OpenAccount from '../OpenAccount';

function PricingPage() {
    return (  
        <div>
            <Hero/>
            <OpenAccount/>
            <Brokerage/>
        </div>
        
    );
}

export default PricingPage;