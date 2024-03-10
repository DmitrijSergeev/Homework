import React, {useState} from 'react';
import {AccordionBody, AccordionTitle} from "./UncontrolledAccordion";

export type AccordionProps = {
    title: string
}
export const Accordion = ({title}: AccordionProps) => {

    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={title} />
        <button onClick={ ()=>{ setCollapsed(!collapsed) } }>TOGGLE</button>
        { !collapsed && <AccordionBody/> }
    </div>
};

