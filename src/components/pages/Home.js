import React from 'react';

import HeroSection from '../HeroSection/HeroSection.js';
import Images from '../Images/Images';
import MainWhite from "../MainWhite/MainWhite.js";
import MainBlack from "../MainBlack/MainBlack.js";
import Footer from '../Footer/Footer'

import '../../App.css';

function Home(){
    return(
        <>
            <HeroSection path='/' />
            <MainWhite path='/'/>
            <MainBlack path='/'/>
            <Images path='/'/>
            <Footer path='/'/>
        </>
    );
}
export default Home;