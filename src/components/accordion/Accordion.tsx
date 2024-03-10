import React, {useState} from 'react';

type AccordionProps = {
    title: string
    //collapsed: boolean
}
export const Accordion = ({title}: AccordionProps) => {

    const [collapsed, setCollapsed] = useState(false)

    return <div>
        <AccordionTitle title={title} />
        <button onClick={ ()=>{ setCollapsed(!collapsed) } }>TOGGLE</button>
        { !collapsed && <AccordionBody/> }
    </div>
};
export const AccordionTitle = ({title}: AccordionProps) => {
    return <div>
        <h1>{title}</h1>
    </div>
};
const AccordionBody = () => {
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