import React from 'react';
import img1 from '../../Images/img1.jpg';
import classes from './Imagecard.module.css';
import Cards from '../Cards/Cards';

const Imagecard =()=>(
    <div className={classes.mainimagecard}>
        <div className={classes.imagecardleft}>
            <img src={img1}/>
        </div>
        <div>
        <div className={classes.rightcardup}>
        <Cards heading="BDS Admission" desc="For More details on BDS Admission Click on More" color="black"/>
        </div>
        <div className={classes.rightcardbottom}>
        <Cards heading="MDS Admission" desc="For More details on MDS Admission Click on More" color="grey"/>      
        </div>
        </div>
    </div>
);

export default Imagecard;

