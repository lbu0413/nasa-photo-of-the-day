import React from 'react'
import axios from 'axios'

const Images = (props) => {
    const { data } = props;
    
    
    return (
        <div>
            <img src={data.hdurl}></img>
        </div>
    )
}


export default Images