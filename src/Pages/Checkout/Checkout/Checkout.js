// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import checkout from '../../../images/checkout.gif'

const Checkout = () => {
    // const params = useParams()

    return (
        <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: "#F5F4F9" }}>
            {/* <h2>This is checkout page {params.foodId}</h2> */}
            <img src={checkout} alt="" className='w-50 h-100' />
        </div>
    );
};

export default Checkout;