import React, {useState} from 'react';
import {AccordionProps} from "./Accordion";

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
export const AccordionTitle = ({title, onClick}: UncontrolledProps) => {
    return <div>
        <h1 onClick={ ()=>{
            if (onClick) {
                onClick()
            }} }>{title}</h1>
    </div>
};
export const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};