import React from 'react';
import "./index.css"
import {
    Link
} from "react-router-dom";

import daniloPic from "../Pics/DaniloPic.jpg";
import instagram from "../Pics/instagram.jpg";
import email from "../Pics/email.png";
import linkIn from "../Pics/linkIn.png";
import gitHub from "../Pics/github.png"

import arrow from "../Pics/arrow-down-2-icon.gif";


const Home = () => (

    <section className="homeContainer">

        <div className="daniloPicAndHead">
            <img src={daniloPic} alt="daniloPic" className="daniloPic"></img>
            <h1 className="daniloButtafocoHome">Danilo Buttafoco</h1>
        </div>

        <div className="socialLinks">
            <a href="https://www.instagram.com/danilobuttafoco/"> <img src={instagram} alt="insta" className="logo"></img></a>
            <a href="mailto: danilo.buttafoco@student.kyh.se"> <img src={email} alt="email" className="logo"></img></a>
            <a href="https://www.linkedin.com/in/danilo-buttafoco-612096147/"> <img src={linkIn} alt="linkIn" className="logo"></img></a>
            <a href="https://github.com/DaniloButtafoco"> <img src={gitHub} alt="gitHub" className="logo"></img></a>
        </div>

        <div className="aboutContainer">
            <Link to="./about" ><p>About</p></Link>
        <img src={arrow} alt="gitHub" className="arrow"></img>
        </div>

    </section>
);

export default Home;