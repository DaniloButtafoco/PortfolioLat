import React from 'react';
import "./index.css";
import htmlcss from "../Pics/htmlcss.jpg";
import ProgressBar from "./progressBar.js";

const testData = [
    { bgcolor: "orangered", completed: 70 },
    { bgcolor: "yellow", completed: 40 },
    { bgcolor: "blue", completed: 70 },
];

const Skillz = () => (
<div className="skillzPage">
    <img src={htmlcss} alt ="htmlcss" className="htmlCssPic"></img>

        {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
</div>


);

export default Skillz;