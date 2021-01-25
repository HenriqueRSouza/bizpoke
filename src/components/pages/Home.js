import React from 'react';
import HeroSection from '../HeroSection/HeroSection.js';
import Images from '../Images/Images';
import Main from "../Main/Main.js";
import Footer from '../Footer/Footer'
import '../../App.css';

function Home(){
    return(
        <>
            <HeroSection path="/home"/>
            <Main path="/home/main"/>
            <Images path="/movie"/>
            <Footer path="/footer"/>
        </>
    );
}
export default Home;