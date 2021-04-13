import React from 'react';
import classes from './Informationcard.module.css';

const Informationcard =(props)=>{


    return (<div className={classes.maininformationcarddiv}>
        <div className={classes.innercarddiv}>
            <h1>{props.heading}</h1>
        </div>
    </div>);
};
export default Informationcard;