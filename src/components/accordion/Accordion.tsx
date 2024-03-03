import React from 'react';

type AccordionProps = {
    title: string
    collapsed: boolean
}
export const Accordion = ({title, collapsed}: AccordionProps) => {
    return {collapsed} && <AccordionTitle title={title} collapsed={collapsed}/>
    // if (collapsed) {
    //     return <div>
    //         <AccordionTitle title={title} collapsed={collapsed}/>
    //     </div>
    // } else {
    //     return <div>
    //         <AccordionTitle title={title} collapsed={collapsed}/>
    //         <AccordionBody/>
    //     </div>
    // }
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