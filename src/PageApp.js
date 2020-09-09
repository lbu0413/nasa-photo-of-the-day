import React from "react";
import axios from 'axios';

const PageApp = (props) => {
    const { data } = props;

    return (
        <div className='explanation-container'>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <div>{data.explanation}</div>
            <div>{data.hdurl}</div>
        </div>
    )
}

export default PageApp;