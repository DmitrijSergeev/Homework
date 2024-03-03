import React from 'react';
import s from './OnOff.module.css'

type OnOffProps = {
    color: string
}
export const OnOff = ({color}: OnOffProps) => {
    return (
        <div>
            <div className={s.on}>On</div>
            <div className={s.off}>Off</div>
            <div className={s.switch}></div>
        </div>
    );
};
