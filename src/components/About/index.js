import React from 'react';
import "./index.css";

import daniloPic from "../Pics/DaniloPic.jpg"

const About = () => (

    <section className="aboutContainerAboutPage">

        <div className="infoCardsDanilo">

            <div className="daniloContainer">
            <img src={daniloPic} alt="danilo" className="daniloPicAbout"></img>
            <p>25 years</p>
            <p>Stockholm, Sweden</p>
            </div>
            <hr className="hrAbout" />

            <h1 className="heading">Hello! <br/>I am Danilo.</h1>
            <p className="infoDanilo">
            I am 25 years old, from Stockholm. 
            Right now I am studying front-end development at KYH Stockholm. <br/> <br/>
        
            In addition to programming, my interests are football, 
            hanging out with friends and having fun!
            </p>


        </div>

        <div className="workCard">
        <h2 className="headingWorkcard">
            WORK & SCHOOL
        </h2>
            <hr className="hrAbout" />
            <h3 className="headingWorkcardH3">
            Work
        </h3>
        <p>
                Current: Hemköp Hornstull
            </p>
        <p>
            MAX Hamburgare Kungsträdgården
        </p>
        <p>
            Qliro
        </p>
        <p>
            Bar Ristorante Porto Salvo
        </p>
        <hr className="hrAbout"/>

            <h3 className="headingWorkcardH3">
            School
        </h3>
        <p>
            Current: ​Front-end Developer KYH Stockholm
        </p>
        <p>
            Thorildsplans Gymnasium Stockholm
        </p>


        </div>


    </section>
);

export default About;