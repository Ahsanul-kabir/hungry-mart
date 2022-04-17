import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Service.css'

const Services = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='container mt-5'>
            <h2 className='text-center service-title'>Our Food Services</h2>
            <div className="row d-flex justify-content-center">
                {
                    foods.map(food => <Service food={food} key={food.id} />)
                }
            </div>
        </div>
    );
};

export default Services;