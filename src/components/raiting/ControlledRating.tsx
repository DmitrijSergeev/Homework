import React from 'react';

export type RatingProps = {
    value: 0|1|2|3|4|5
}
export const ControlledRating = ({value}: RatingProps) => {

    return <div>
        {/*<Star selected={value > 0}/>*/}
        {/*<Star selected={value > 1}/>*/}
        {/*<Star selected={value > 2}/>*/}
        {/*<Star selected={value > 3}/>*/}
        {/*<Star selected={value > 4}/>*/}
    </div>
};

type StarProps = {
    selected: boolean|number
    value: 0|1|2|3|4|5
    setValue: (value: 0|1 | 2 | 3 | 4 | 5 )=>void
}

export function Star({selected, setValue, value}: StarProps) {
    return <span onClick={ ()=>{ setValue(value) } }>
        {selected ? <b>star </b> : 'star '}
    </span>
}