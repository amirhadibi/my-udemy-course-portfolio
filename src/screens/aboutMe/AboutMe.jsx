import React from 'react';
import './aboutMe.css';
import person from '../../images/Me.png';

function AboutMe() {
    return (
        <div className="about__container" id="about-me">
            <div className="about__container img">
                <img src={person} alt="my photo"></img>
            </div>                    
            <div className="about__text">
                <h1>ABOUT ME</h1>
                <p>Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another. </p>
            </div>
        </div>
    )


}

export default AboutMe;