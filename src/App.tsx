import React from 'react';
import './App.css';
import {Rating} from "./components/raiting/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onoff/OnOff";

function App() {

    return (
        <div className="App">
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Accordion title={'Hello world'} collapsed={true}/>
            <Accordion title={'Bye world'} collapsed={false}/>

            <OnOff color={'red'}/>
        </div>
    );
}
export default App;
