import React from 'react';
// @ts-ignore
import image from '../src/assets/images/history.svg'
// @ts-ignore
import tempImg from '../src/assets/images/41wF-Gp0H8L._SL160_.jpg'
import {Header} from "./components/header/header";
import {Text} from "./components/text/texts";
import {Book} from "./components/book/book";
import {RentButton} from "./components/buttons/button";
function App() {
    return (
        <div className="App">
            <Header/>
            <Text text = "hello mahima"/>
            <button/>
            <Book/>
            <RentButton/>
        </div>
    );
}

export default App;
