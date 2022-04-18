import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/social/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: 'gray' }} className='w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px', backgroundColor: 'gray' }} className='w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn w-50 d-block mx-auto my-2' style={{ height: '40px', backgroundColor: '#F3F3F3' }}>
                    <img style={{ width: '30px' }} src={googleIcon} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;