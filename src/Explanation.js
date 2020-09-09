import React from 'react'


const Explanation = (props) => {
    const { data } = props;

    return(
        <div>{data.explanation}</div>
    )
}



export default Explanation;