import React from "react";
import {UncontrolledProps} from "./UncontrolledAccordion";

export const AccordionTitle = ({title, onClick}: UncontrolledProps) => {
    return <div>
        <h1 onClick={ ()=>{
            if (onClick) {
                onClick()
            }} }>{title}</h1>
    </div>
};