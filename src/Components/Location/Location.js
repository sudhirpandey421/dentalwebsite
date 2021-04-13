import React from 'react';
import classes from './Location.module.css';

const Location =()=>(
    <div className={classes.mainlocationdiv}>
        <div className={classes.mapdiv}>
            <h1>map lagega kaise</h1>
            </div>
        <div className={classes.locationdiv}>
            <h1>City Office</h1>
            <p>Children Senior Secondry School Mear Railyway Station, Azamgarh (U.P.),India</p>
            <h2>Main Campus</h2>
            <p>Azamgarh Dental College, Itura Chandeshwar, Azamgarh (U.P.),India</p>
            <span>Contact:</span><strong>0562-245915</strong>
            <span>Mobile:</span><strong>9415683844</strong>
        </div>
    </div>
);

export default Location;