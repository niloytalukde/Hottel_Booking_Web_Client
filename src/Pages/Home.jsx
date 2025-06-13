import React from 'react';
import Hero from '../Components/Home/Hero';
import FeaturedDestination from '../Components/Home/FeaturedDestination';
import ExclusiveOffers from '../Components/Home/ExclusiveOffers';
import Testimonial from '../Components/Home/Testimonial';
import NewsLatter from '../Components/Home/NewsLatter';

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <FeaturedDestination></FeaturedDestination>
            <ExclusiveOffers></ExclusiveOffers>
            <Testimonial></Testimonial>
            <NewsLatter></NewsLatter>
        </>
    );
};

export default Home;