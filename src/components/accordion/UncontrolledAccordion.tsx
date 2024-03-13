import React, {useState} from 'react';
import {AccordionProps} from "./ControlledAccordion";
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

export type UncontrolledProps = {
    title: string
    onClick?: ()=>void
}
export const UncontrolledAccordion = ({title}: AccordionProps) => {
    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={title} onClick={ ()=>{ setCollapsed(!collapsed) } }/>
        { !collapsed && <AccordionBody/> }
    </div>
};

