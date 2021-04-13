import React from 'react';
import img1 from '../../Images/img1.jpg';
import './Banner.css';

const Banner = () => (
    <div className='slider'>
        <div className='slide'><img src={img1} /></div>
        <div className='slide'><img src={img1} /></div>
        <div className='slide'><img src={img1} /></div>
    </div>
);

export default Banner;