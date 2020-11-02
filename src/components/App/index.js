import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import "./index.css";

import Navigation from '../Navigation'
import About from '../About';
import Home from '../Home';
import Skillz from '../Skillz'; 
import Contact from '../Contact';
import Projects from '../Projects';
import * as ROUTES from '../../constants/routes';

const App = () => (
<Router>


    
<Navigation />


<Route exact path={ROUTES.ABOUT} component={About}/>
<Route exact path={ROUTES.HOME} component={Home} />
<Route exact path={ROUTES.SKILLZ} component={Skillz} />
<Route exact path={ROUTES.CONTACT} component={Contact} />
<Route exact path={ROUTES.PROJECTS} component={Projects} />



    </Router>
);
export default App;