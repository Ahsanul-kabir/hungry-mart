import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const params = useParams();

    return (
        <div>
            <h2>This is checkout page {params.foodId}</h2>
        </div>
    );
};

export default Checkout;