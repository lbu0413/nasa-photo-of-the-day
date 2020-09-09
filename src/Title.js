import React from "react";
import axios from 'axios';

const Title = (props) => {
    const { data } = props;

    return (
        <div className='explanation-container'>
            <h1>{data.title}</h1>
        </div>
    )
}

export default Title;