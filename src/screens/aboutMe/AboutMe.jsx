import React from 'react';
import './aboutMe.css';
import Header from '../header/Header';
import eifel from '../../images/Eifel.JPG';

function AboutMe() {
    return (

        <div className="container" id="about-me"> 
            <div className="leftpane">

                <div className="about__text">
                    <h1>Whispers of Wisdom</h1>
                    <p>Every man's life ends the same way. It is only the details of how he lived and how he died that distinguish one man from another. _Hemingway </p>
                    <p>For what it’s worth, it’s never too late to be whoever you want to be. I hope you live a life you’re proud of, and if you find that you’re not, I hope you have the strength to start over. _Scott Fitzgerald </p>
                    <p>if a man does not master his circumstances then he is bound to be mastered by them. _Amor Towles </p>
                    <p>It is not true that people stop pursuing dreams because they grow old; they grow old because they stop pursuing dreams. _Gabriel García Márquez</p>
                    <p>Strictly speaking, we do not make decisions. Decisions make us. _José Saramago</p>
                </div>
            </div>
            <div className="middlepane">
                <div className="">
                    <div className="">
                        <Header />
                    </div>

                    <div className="about__container img">
                        <img src={eifel} alt="me smiling with Eifel Tower"></img>
                    </div>

                </div>
            </div>
            <div className="rightpane">
                <div className="">
                <div className="about__text">
                    <h1>From People Whom I worked With</h1>
                    <p>It’s been a wonderful experience to work with you! Your hardworking, kindness, and friendship will be greatly missed. Wish you and your family all the best for your next chapter of life! Stay in touch!. _Linping </p>
                    <p>Wow, has it been 25 years?  It has been a pleasure working with you all these years. Please take care of yourself and your family.  Good luck on your next opportunity / future endeavors. _Gregg </p>
                    <p>Amir It has been an absolute pleasure working with you over the years.  I wish you and your family nothing but the very best.  Please let me know if I can help with anything in the future. _Chris </p>
                    <p>Amir, I wish you the very best on your next adventure and thank you for all you have done to support me, my teams, and Mergent. _John </p>
                </div>


                </div>
            </div>
        </div>
    )
}

export default AboutMe;