import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffProps = {
    //on: boolean
}
export const OnOff = () => {

    const [on, setOn] = useState(false)

    const colorOn = on ? s.colorWhite : s.on;
    const colorOff = on ? s.off : s.colorWhite;
    const switchColor = on ? `${s.switch} ${s.off}` : `${s.switch} ${s.on}`

    const onClick = () => {
        setOn(false)
    }
    const offClick = () => {
        setOn(true)
    }

    return (
        <div>
            <div onClick={onClick} className={colorOn}>On</div>
            <div onClick={offClick} className={colorOff}>Off</div>
            <div className={switchColor}></div>
        </div>
    );
};
