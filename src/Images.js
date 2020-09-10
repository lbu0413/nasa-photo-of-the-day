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
    button{
        width: 40%;
        margin-top: 5%;
        padding: 20px;
        font-family: 'Londrina Outline', cursive;
        font-family: 'Press Start 2P', cursive;
        background-color: black;
        color: #d1d3e8; 
        margin-bottom: 5%;
    }
    button:hover{
        transition: 0.8s;
        background-color: #d1d3e8; 
        color: black;
        border: 1px solid black;
    }

`

const Images = (props) => {
    const { data } = props;
    
    // const openImage = () => {
    //     return <img className="main-image" src={data.hdurl} alt={`${data.title}`}></img>
    // }
    
    return (
        
        <StyledImages>
            {/* <button onClick={() => openImage}>The image of {data.title}</button> */}

            <img className="main-image" src={data.hdurl} alt={`${data.title}`}></img>
            <div className="copyright">Copyright: {data.copyright}</div>
        </StyledImages>
      
    )
}


export default Images