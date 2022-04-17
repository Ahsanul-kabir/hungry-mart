import React from 'react';
import './Support.css';
import team from '../../../images/team.svg';

const Support = () => {
    return (
        <div className='support-container'>
            <div>
                <div className="d-flex justify-content-center">
                    <img src={team} alt="" />
                </div>
                <h2 className="d-flex justify-content-center">DEDICATED SUPPORT FORUM</h2>
                <p className="d-flex justify-content-center">Join the conversation on Support Forum to find solutions, ask questions, and share your ideas.</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-warning fw-bold">SUPPORT LINK</button>
                </div>
            </div>
        </div>
    );
};

export default Support;