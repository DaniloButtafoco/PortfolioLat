import React from 'react';
import "./index.css"

import quill from "../Pics/QuillPic.png"
import projekt1 from "../Pics/projekt1Pic.png"
import brott from "../Pics/brottssidaPic.png"
import gitHub from "../Pics/githubgif.gif"
import gitHubText from "../Pics/githubimg.png"

const Projects = () => (

<section className="projectsPage">

    <div className="picContainer">

        <div className="picAndP">
        <img src={quill} alt="daniloPic" className="picProject"></img>
        <p>Quill</p>
        </div>

        <div className="picAndP">
        <img src={projekt1} alt="daniloPic" className="picProject"></img>
        <p>My first project</p>
        </div>
        
        <div className="picAndP">
        <img src={brott} alt="daniloPic" className="picProject"></img>
        <p>Crimeapp</p>
        </div>
    </div>

    <a href="https://github.com/DaniloButtafoco"> <img src={gitHub} alt="daniloPic" className="gitHubPro"></img> </a>
    <img src={gitHubText} alt="daniloPic" className="gitHubPro"></img>
    
</section>
);

export default Projects;