import React from 'react';
import classes from './Bdsadmission.module.css';
import Admissioncard from '../Admissioncard/Admissioncard';

const Bdsadmisssion = () => (
    <div className={classes.bdsadmissionmaindiv}>
        <div className={classes.Bdsadmissionheadingdiv}>
            <Admissioncard heading='BDS At Dental College Azamgarh' />
        </div>
        <div className={classes.bdsadmissioncontentdiv}>
            <Admissioncard  content="The field of Dentistry has come a long way since its prehistoric era and has bloomed into one of the fastest growing and researched sciences in the field of medicine. With esthetic and beauty coming to the forefront of the new cultural era this field has gained enormous importance as a medical field. As the population of the country is becoming more literate by the day the importance of dental care and cosmetics is now seeing the light of dawn.
            More and more people are now turning to dentists to get their treatment done. Considering the increased population in our country and the ratio set by WHO between the population and the Dentists, number of dental surgeons are now required in the country. This offers an excellent professional opportunity to those who have both the scientific background and artistic bend of mind because dentistry is a mixture of scientific knowledge and artistic skills. With the Dental Council of India mulling with the idea of a bridge course between MBBS & BDS, new opportunities are on the horizon for budding dentists.
            Last but not least, with the limited number of hours and no frequent emergencies one can confine one's working to a limited number of hours. Only sky is the limit as far as the scope of dentistry is concerned. While there is only one human body, two eyes, two ears, one nose but there are 32 teeth; each of them is as important as any other organ and vulnerable to disease as individual organs." color='black'/>
        </div>
        <div className={classes.durationheadingdiv}>
            <Admissioncard durationheading="Duration & Syllabus"/>
        </div>
        <div className={classes.durationcontentdiv}>
            <Admissioncard  durationcontent="Bachelor of Dental Surgery (BDS) is a four-year course followed by 1 year of the compulsory internship period, mandatory for obtaining the Degree and  Registration." color='black'/>
        <div>
            <h2><u>Subject to be Covered</u>:</h2>
            <ul><li>1st Year - Anatomy, Physiology, Biochemistry & Dental materials.</li></ul>
            <ul><li>2nd Year - Pharmacology, General Pathology, General Microbiology, Dental Anatomy, Histology, Preclinical Conservative & Preclinic Prosthetic</li></ul>
            <ul><li>3rd Year - General Medicine, General Surgery, Oral Pathology & Community Dentistry</li></ul>
            <ul><li>4th Year - Oral Medicine, Oral Surgery, Periodontics, Conservative & Endodontics, Prosthodontics & Orthodontics</li></ul>
            <ul><li>With the Dental Council Of India with the idea of bridge of course between MBBS & BDS, new opportunities are on the horizon for budding dentists.</li></ul>
        </div>
        <div>
            <h2>Admission Process:</h2><p>Is through State Government Counseling conducted by DGME at <a href="https://upneet.gov.in">www.upneet.gov.in</a></p>
            <h2>Process for Counselling: </h2>
            <ul><li>Register at UP NEET </li></ul>
            <ul><li>Through candidate log in, submit choice for BDS Course</li></ul>
            <ul><li>Select First Preference as (022) – Dental College Azamgarh, Azamgarh</li></ul>
            <ul><li>Helpline No: 9889195610, 9889031414, 9889195609, 9795500444, 8189063699</li></ul>
            <ul><li>Email Id: admission@saraswaticolleges.com</li></ul>
        </div>
        </div>
    </div>
);

export default Bdsadmisssion;