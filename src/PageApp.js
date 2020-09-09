import React from "react";
import axios from 'axios';
import Explanation from "./Explanation"
import Images from './Images'

const PageApp = (props) => {
    const { data } = props;

    return (
        <div className='PageApp-container'>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <Explanation data={data} />
            <Images data ={data}/>
        </div>
    )
}

export default PageApp;