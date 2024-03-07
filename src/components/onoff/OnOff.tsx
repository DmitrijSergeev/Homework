import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffProps = {
    on: boolean
}
export const OnOff = ({on}: OnOffProps) => {

    const [] = useState('')

    const colorOn = on ? s.on : s.colorWhite;
    const colorOff = on ? s.colorWhite : s.off;
    const switchColor = on ? `${s.switch} ${s.on}` : `${s.switch} ${s.off}`

    return (
        <div>
            <div className={colorOn}>On</div>
            <div className={colorOff}>Off</div>
            <div className={switchColor}></div>
        </div>
    );
};
