import React from 'react';
import './App.css';
import {Rating} from "./components/raiting/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onoff/OnOff";
import {UncontrolledRating} from "./components/raiting/UncontrolledRating";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";


function App() {

    return (
        <div className="App">
            <div className={'rating'}>
                <Rating value={0}/>
                <Rating value={1}/>
                <Rating value={2}/>
                <Rating value={3}/>
                <Rating value={4}/>
                <Rating value={5}/>
                <UncontrolledRating/>
            </div>
            <Accordion title={'Hello world'} />
            <UncontrolledAccordion title={'Bye world'} />

            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}
export default App;
