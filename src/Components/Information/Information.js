import React from 'react';
import classes from './Information.module.css';
import Informationcard from '../Informationcard/Informationcard';

const Information = () => {

    return (<div className={classes.maininformationdiv}>
        <div className={classes.lefttop}>
            <Informationcard heading='Departments' desc='Computer Science' />
            {/* <h1>Departments</h1>
            <ul>
                <li>Computer Center</li>
            </ul>
            <ul>
                <li>Class Schedules</li>
            </ul>
            <ul>
                <li>Counselling Center</li>
            </ul>
            <ul>
                <li>Course Descriptions & Catalogue</li>
            </ul>
            <ul>
                <li>Scholarship & Fellowships</li>
            </ul>
            <ul>
                <li>Fitness and Recreation Facilities</li>
            </ul>
            <ul>
                <li>Financial Support</li>
            </ul>
            <ul>
                <li>Global Learning</li>
            </ul> */}
        </div>
        <div className={classes.righttop}>
        <Informationcard heading='Departments' desc='Computer Science'/>
            {/* <h2>Virtual Tour AICCEDS Programms</h2>
            <ul>
                <li>Virtual Tour Dental College</li>
            </ul>
            <ul>
                <li>Virtual Tour Pharmacy College</li>
            </ul>
            <ul>
                <li>Virtual Tour Children College</li>
            </ul> */}
        </div>
        <div className={classes.leftbottom}>
        <Informationcard heading='Departments' desc='Computer Science'/>
            {/* <h2>Academics</h2>
            <ul>
                <li>Life@AICCEDS</li>
            </ul>
            <ul>
                <li>Why AICCEDS</li>
            </ul>
            <ul>
                <li>Academic Calendars</li>
            </ul>
            <ul>
                <li>Administration</li>
            </ul>
            <ul>
                <li>Education & Study Experienec</li>
            </ul>
            <ul>
                <li>Placements</li>
            </ul>
            <ul>
                <li>Future Projects</li>
            </ul>
            <ul>
                <li>Campus Life At a Glance</li>
            </ul> */}
        </div>
        <div className={classes.rightbottom}>
        <Informationcard heading='Departments' desc='Computer Science'/>
            {/* <h2>Students Activities</h2>
            <ul>
                <li>Office of the Registrar</li>
            </ul>
            <ul>
                <li>Life @ Dental College Azamgarh</li>
            </ul>
            <ul>
                <li>Hostel Life</li>
            </ul>
            <ul>
                <li>CO-CurriculamStudent Activities</li>
            </ul>
            <ul>
                <li>Central Library</li>
            </ul>
            <ul>
                <li>Security & Discipline</li>
            </ul>
            <ul>
                <li>Health services</li>
            </ul>
            <ul>
                <li>Student Group Directory</li>
            </ul> */}
        </div>
    </div>
);
        };

export default Information;