import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffProps = {
    //on: boolean
}
export const OnOff = () => {

    const [on, setOn] = useState(true)

    const colorOn = on ? s.on : s.colorWhite;
    const colorOff = on ? s.colorWhite : s.off;
    const switchColor = on ? `${s.switch} ${s.on}` : `${s.switch} ${s.off}`

    const onClick = () => {
        setOn(!on)
    }
    const offClick = () => {
        setOn(!on)
    }

    return (
        <div>
            <div onClick={onClick} className={colorOn}>On</div>
            <div onClick={offClick} className={colorOff}>Off</div>
            <div className={switchColor}></div>
        </div>
    );
};
