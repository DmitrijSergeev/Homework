import React, {useState} from 'react';
import {Star} from "./Rating";

export const UncontrolledRating = () => {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value}/>
            <Star selected={value}/>
            <Star selected={value}/>
            <Star selected={value}/>
            <Star selected={value}/>
        </div>
    );
};
