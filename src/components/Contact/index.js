import React from 'react';
import "./index.css";

import phone from "../Pics/phone.jpg"
import pizza from "../Pics/pizzagif.gif";
import mailIcon from "../Pics/email.png"


const Contact = () => (
<div className="kontaktaMig">
    <img src={pizza} alt="pizza" className="pizza"></img>

    <div className="phoneNMBR">
    <img src={phone} alt="phone" className="icon"></img>
    <p>+46 - 706055448</p>
    </div>

    <div className="mailContact">
    <img src={mailIcon} alt="phone" className="icon"></img>
    <a href="mailto: danilo.buttafoco@student.kyh.se"> <p>Danilo.buttafoco@student.kyh.se</p></a>
    </div>
    <h1>
        CONTACT ME!
    </h1>

    </div>
);
export default Contact;