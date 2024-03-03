import React from 'react';

export type RatingProps = {
    value: number
}
export const Rating = ({value}: RatingProps) => {

    return <div>
        <Star selected={value > 0}/>
        <Star selected={value > 1}/>
        <Star selected={value > 2}/>
        <Star selected={value > 3}/>
        <Star selected={value > 4}/>
    </div>
};

type StarProps = {
    selected: boolean
}

function Star({selected}: StarProps) {

    if (selected) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}