import React from 'react'
import styled, { keyframes } from 'styled-components';

const StyledExplanation = styled.div`
    display: flex;
    width: 80%;
    letter-spacing: 3px;
    line-height: 150%;
`


const Explanation = (props) => {
    const { data } = props;

    return(
        <StyledExplanation>
             {data.explanation}
        </StyledExplanation>
    )
}

export default Explanation;