import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ food }) => {
    const { id, name, price, description, img } = food;

    const navigate = useNavigate()

    const navigateToServiceDetail = () => {
        navigate(`/checkout/${id}`)
    }

    return (
        <div className="card col-sm-12 col-sm-6 col-sm-4 m-2 shadow p-3 mb-5 bg-body rounded" style={{ width: "22rem" }}>
            <img src={img} className="card-img-top rounded" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price ${price}</p>
                <p className="card-text">{description}</p>
                <button onClick={() => navigateToServiceDetail(id)} className="btn btn-info text-white">Take Now</button>
            </div>
        </div>
    );
};

export default Service;