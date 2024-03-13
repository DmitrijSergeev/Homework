import React, {useState} from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type AccordionProps = {
    title: string
}
export const ControlledAccordion = ({title}: AccordionProps) => {

    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={title} />
        <button onClick={ ()=>{ setCollapsed(!collapsed) } }>
            TOGGLE
        </button>
        { !collapsed && <AccordionBody/> }
    </div>
};

