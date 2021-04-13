import React from 'react';
import classes from './Footer.module.css';


const Footer = () => (
    <div className={classes.footermaindiv}>
        <div className={classes.footerleft}>
            <h1>Contact Us</h1>
            <strong style={{'fontSize': '22px'}}><i class="fa fa-phone-square" aria-hidden="true"></i> : 05462-245915</strong>
            <strong style={{'fontSize': '24px'}}><i class="fas fa-mobile"></i>   : 9415683844</strong>
        </div>
        <div className={classes.footermid}>
            <h1> <i class="fas fa-address-card"></i> Address </h1>
            <p>Itaura-Chandeshwar Azamgarh campus For
            Dental college
            Azamgarh (U.P.)-276138, India</p>
            <strong><i class="fas fa-envelope-square"></i>  : admin@aicceds.org</strong>
            <strong><i class="fas fa-envelope-square"> </i> : btripathi@aicceds.org</strong>
        </div>
        <div className={classes.footerright}>
            <h1>Social Links</h1>
            <h1> <i class="fab fa-facebook"></i>  <i class="fab fa-twitter"></i>   <i class="fab fa-linkedin"> </i>   <i class="fab fa-instagram"></i>   <i class="fab fa-youtube"></i>   </h1>
        </div>
    </div>
);

export default Footer;

