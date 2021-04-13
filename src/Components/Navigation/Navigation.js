import React from 'react';
import classes from './Navigation.module.css'

const Navigation = () => (
    <div className={classes.navigation}>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Gallery</a>
        <a href='#'>Contact</a>
    </div>
);

export default Navigation;