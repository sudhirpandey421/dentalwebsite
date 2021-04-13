import React from 'react';
import classes from './Admissioncard.module.css';

const Admissioncard=(props)=>(
  <div className={classes.mainadmissioncarddiv} style={{'color':props.color}}>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
      <div>
        <h1>{props.durationheading}</h1>
      </div>
      <div>
        <p>{props.durationcontent}</p>
      </div>
  </div>
);

export default Admissioncard;