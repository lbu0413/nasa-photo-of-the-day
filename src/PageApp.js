import React from "react";
import axios from 'axios';
import Explanation from "./Explanation"
import Images from './Images'
import styled, { keyframes } from 'styled-components';


const StyledPageApp = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const PageApp = (props) => {
    const { data } = props;

    return (
        <StyledPageApp className='PageApp-container'>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <Explanation data={data} />
            <Images data ={data}/>
        </StyledPageApp>
    )
}

export default PageApp;