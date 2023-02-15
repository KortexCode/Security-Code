import React from "react";
import {useComposeState} from "../../hooks/useComposeState.js";
import "../../styles/UseState.css"
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
    //Emulando respuesta del backend
    React.useEffect(()=>{
        if(state.loading){
            setTimeout(()=>{
                console.log("Haciendo validación");

                state.value === SECURITY_CODE ? setState(
                    {
                        loading:false,
                        confirmed:true,
                    }
                ): 
                setState({loading:false, error:true});

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
                <input className="UseState__input" value={state.value} placeholder="Código de seguridad" onChange={
                        (event)=> setState({value:event.target.value})}
                >
                </input>
                <button className="UseState__btn-check" onClick={()=> {setState({loading:!state.loading, error: false})}}>
                    Comprobar
                </button>
            </div>
        )
    }
    else if(!state.deleted && state.confirmed){
        return(
            <div>
                <p>¿Estás seguro que deseas eliminar?</p>
                <button onClick={()=> setState({deleted:true})}>Eliminar</button>
                <button onClick={()=> setState({confirmed:false, value:""})}>
                    Regresar
                </button>
            </div>
          
        )
    }
    else{
        return(
            <div>
                <p>useState fue elminado, ¿Deseas recuperar a UseState?</p>
                <button onClick={()=> setState({deleted:false, confirmed:false, value:""})}>
                    Recuperar
                </button>           
            </div>
        )
    }

   
}

export {UseState}