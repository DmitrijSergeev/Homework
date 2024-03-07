import React from 'react';
import './App.css';
import {Rating} from "./components/raiting/Rating";
import {Accordion} from "./components/accordion/Accordion";
import {OnOff} from "./components/onoff/OnOff";

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
            </div>
            <Accordion title={'Hello world'} collapsed={true}/>
            <Accordion title={'Bye world'} collapsed={false}/>

            <OnOff on={true}/>
        </div>
    );
}
export default App;
