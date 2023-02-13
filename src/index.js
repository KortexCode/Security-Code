import React from "react";
import ReactDOM from 'react-dom/client';
import {App} from './components/App/index';
import "./styles/index.css";

//Aquí renderizamos la app completa
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <App/> 
    </React.Fragment>
);