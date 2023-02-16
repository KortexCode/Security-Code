import React from "react";
import { UseState } from "../UseState";
import {ClassState} from "../ClassState";
import "../../styles/App.css";


function App(){

    return(
        <div className="App">
            <UseState></UseState>
            <ClassState></ClassState>
        </div>
    )
}

export{App}