import React from "react";
import axios from 'axios';

const PageApp = (props) => {
    const { data } = props;

    return (
        <div className='PageApp-container'>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <Explanation />
            <div><img src = {data.hdurl}></img></div>
        </div>
    )
}

export default PageApp;