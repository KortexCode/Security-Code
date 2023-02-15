import React from "react";
import {useComposeState} from "../../hooks/useComposeState.js";
import {Confirm} from "../Confirm"
import {Delete} from "../Delete"
import "../../styles/UseState.css";
const SECURITY_CODE = "paradigma";

function UseState(){
    //Hacemos uso de un custom hook y le enviamos los estados de nuestro componente
    const {state, setState} = useComposeState(
        {
            value:"",
            error: false,
            loading: false,
            deleted: false,
            confirmed: false,
        }
    );
    //Haciendo uso de formas declarativas
    //Declaramos eventos
    const onConfirmed = ()=> setState({loading:false, confirmed:true});
    const onError = ()=> setState({loading:false, error:true});
    //Declaramos manejadores para los eventos de botones
    const handleInput = (event)=> setState({value:event.target.value});
    const handleCheck= ()=> {setState({loading:!state.loading, error: false})};

    //Emulando respuesta del backend
    React.useEffect(()=>{
        if(state.loading){
            setTimeout(()=>{
                console.log("Haciendo validación");

                state.value === SECURITY_CODE ? onConfirmed(): 
                onError();

                console.log("Terminando validación");
            }, 3000);
        }
    
    }, [state.loading]);

    //Validaciones para renderizar
    if(!state.deleted && !state.confirmed){
        return(
            <div className="UseState">
                <h2 className="UseState__title">Elimina UseState</h2>
                <p className="UseState__text">Por favor, escribe el código de seguridad</p>
                {state.error && <p>Error: el código es incorrecto</p>}
                {state.loading && <p>Cargando</p>}
                <input className="UseState__input" value={state.value} placeholder="Código de seguridad" onChange={(event)=> handleInput(event)}>
                </input>
                <button className="UseState__btn-check" onClick={()=>{handleCheck()}}>
                    Comprobar
                </button>
            </div>
        )
    }
    else if(!state.deleted && state.confirmed){
        return(
            <Confirm setState={setState}/>
        )
    }
    else{
        return(
           <Delete setState={setState}/>
        )
    } 
}

export {UseState}