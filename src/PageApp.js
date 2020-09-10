import React from "react";
import Explanation from "./Explanation"
import Images from './Images'
import styled, { keyframes } from 'styled-components';


const StyledPageApp = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-image: url("https://www.iliketowastemytime.com/sites/default/files/minimal-cold-space-hd-wallpaper.jpg");
    font-family: 'Londrina Outline', cursive;
    font-family: 'Press Start 2P', cursive;
    color: #d1d3e8; 

    .title{
        margin: 5% auto;
        color: #d1d3e8; 
        text-align: center;
        width: 100%;
    }
    .date{
        display: flex;
        width: 100%;
        margin: 3%;
        flex-direction: row-reverse;
    }
    &:hover{
        transition: all .5s ease-in-out;
        

    }
 
`


const PageApp = (props) => {
   
   
    const { data } = props;

    return (
        <StyledPageApp className='PageApp-container'>
            <h1 className="title">{data.title}</h1>
            <div className="date">{data.date}</div>
            <Explanation data={data} />
            <Images data={data}/>              
        </StyledPageApp>
    )
}

export default PageApp;