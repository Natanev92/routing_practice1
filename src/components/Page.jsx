import React from 'react';

const Page = props => {
    
    const param = props.word;
    
    if (isNaN(param)) {
        return (
            <h2>The word is: {param}</h2>
        )
    }
    else {
        return (
            <h2>The number is {param}</h2>
        )
    }
};

export default Page;