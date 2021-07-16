import React from 'react';

const Color = props => {
    
    const {color1, color2} = props; // Destructure the path variables

    const style = {
        "color": `${color1}`,
        "backgroundColor": `${color2}`
    };
    
    return (
        <h2 style={style}>The word of the day is: {props.word}</h2>
    )
};

export default Color;