import React from 'react';
import img1 from '../../Images/img1.jpg';
import classes from './Features.module.css';

const Features =()=>(
    <div className={classes.featuremain}>
        <div className={classes.featureleft}>
            <h2>Features</h2>
            <ul>
                <li> Azamgarh Dental College Established in 2005</li>
            </ul>
            <ul>
                <li>A promising career as a good and reputed professional.</li>
            </ul>
            <ul>
                <li>2,78,570 sq. ft. of Academic, clinical and Recreational Area
Modern Amenities for Teaching & Research</li>
            </ul>
            <ul>
                <li>More than 3000 Alumni</li>
            </ul>
            <ul>
                <li>Managed by top professionals in the field of Dentistry</li>
            </ul>
        </div>
        <div className={classes.featureright}>
            <img src={img1}/>
        </div>
    </div>
)

export default Features;