import React from 'react';
import {NormalButton, RedBackgroundButton, RentButton} from "./components/buttons/button";
import {Text} from "./components/text/texts";
import {Genres} from "./components/genres/genresComponent";
// @ts-ignore
import image from '../src/assets/images/history.svg'
import {AuthorComponent} from "./components/author/authorComponent";

function App() {
    return (
        <div className="App">
            <RedBackgroundButton title={"red"}/>
            <NormalButton title={"Normal"} height={40} width={11} borderRadius={0}/>
            <RentButton/>
            <Text text="hello from text" textStyle='heading-red'/>
            <Genres text={"hello nitish"} img={image}/>
            <AuthorComponent text = "Nitish author" />
        </div>
    );
}

export default App;
