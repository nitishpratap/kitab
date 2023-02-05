import React from 'react';
import {NormalButton, RedBackgroundButton, RentButton} from "./components/buttons/button";

function App() {
    return (
        <div className="App">
            <RedBackgroundButton title={"red"}/>
            <NormalButton title={"Normal"} height={40} width={120}/>
            <RentButton/>
        </div>
    );
}

export default App;
