import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Support from '../Support/Support';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Services />
            <Support />
            <Footer />
        </>
    );
};

export default Home;