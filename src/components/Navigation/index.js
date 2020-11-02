import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

import * as ROUTES from '../../constants/routes';

const Navigation = () => (

    <div className ="many">

    <div className="menyContainer">
        
    <p className="daniloButtafoco">Danilo Buttafoco</p>

            <li>
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
            <li>
                <Link to={ROUTES.ABOUT}>About</Link>
            </li>
            <li>
                <Link to={ROUTES.SKILLZ}>Skillz</Link> </li>
            <li>
                <Link to={ROUTES.CONTACT}>Contact</Link>
            </li>
            <li>
                <Link to={ROUTES.PROJECTS}>Projects</Link>
            </li>


    </div>

    </div>

)

 export default Navigation;