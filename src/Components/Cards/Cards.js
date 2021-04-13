import React from 'react';
import classes from './Cards.module.css';

const Cards =(props)=>(
    <div className={classes.cardsmaindiv} style={{'background-color': props.color}}>
        <div className={classes.cardsinnerdiv}>
            <h1>{props.heading}</h1>
            <h3>{props.desc}</h3>
            <button className={classes.btn}>More</button>
        </div>
    </div>
);

export default Cards;