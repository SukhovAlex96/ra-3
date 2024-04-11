import React, { useState } from 'react';
import Star from './Star';

function Stars(props) {
    const { count } = props;
    const arr = [...Array(count).keys()];
    const result = 0 < count && count < 6;
    return (
        <>{ result && <ul className="card-body-stars u-clearfix">
            {arr.map(index => <Star key={index} />)}
        </ul>}</>
    );
}

export default Stars;