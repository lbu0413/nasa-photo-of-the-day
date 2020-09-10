import React from 'react'
import axios from 'axios'
import styled, { keyframes } from 'styled-components';

const StyledImages = styled.div`
    width: 80%;
    margin: 3% auto;

    .main-image{
        width: 80%;
        border-radius: 2%;
        border: 1px solid darkblue;
    
    }
    .copyright{
        margin-top: 5%;
    }

`

const Images = (props) => {
    const { data } = props;
    
    
    return (
        <StyledImages>
            <img className="main-image" src={data.hdurl} alt={`${data.title}`}></img>
            <div className="copyright">Copyright: {data.copyright}</div>
        </StyledImages>
    )
}


export default Images