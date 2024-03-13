import React from 'react';
import './App.css';
import {ControlledRating} from "./components/raiting/ControlledRating";
import {ControlledAccordion} from "./components/accordion/ControlledAccordion";
import {OnOff} from "./components/onoff/OnOff";
import {UncontrolledRating} from "./components/raiting/UncontrolledRating";
import {UncontrolledAccordion} from "./components/accordion/UncontrolledAccordion";


function App() {

    return (
        <div className="App">
            <div className={'rating'}>
                <ControlledRating value={0}/>
                <ControlledRating value={1}/>
                <ControlledRating value={2}/>
                <ControlledRating value={3}/>
                <ControlledRating value={4}/>
                <ControlledRating value={5}/>
                <UncontrolledRating/>
            </div>
            <ControlledAccordion title={'Hello world'} />
            <UncontrolledAccordion title={'Bye world'} />

            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}
export default App;
