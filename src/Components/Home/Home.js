import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Guideline from './Guideline/Guideline';
import Hero from './Hero/Hero';
import LatestBlog from './LatestBlog/LatestBlog';
import Subscribe from './Subscribe/Subscribe';
import UpcomingEvents from './UpcomingEvents/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Guideline></Guideline>
            <Hero></Hero>
            <Feedback></Feedback>
            <AboutUs></AboutUs>
            <UpcomingEvents></UpcomingEvents>
            <div className='mb-24'>
                <LatestBlog></LatestBlog>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;