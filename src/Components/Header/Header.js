import React from 'react';
import classes from './Header.module.css';

const Header = () => (
    <div className={classes.header}>
        <div className={classes.logo}></div>
        <h1 className={classes.title}>Dental College Azamgarh</h1>
    </div>
);

export default Header;