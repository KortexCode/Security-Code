import React from "react";
import {useComposeState} from "../../hooks/useComposeState.js"
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

                state.value === SECURITY_CODE ? setState({loading:false}): 
                setState({loading:false, error:true});

                console.log("Terminando validación");
            }, 3000);
        }
    
    }, [state.loading]);

    //Validaciones


    return(
        <div className="UseState">
            <h2>Elimina UseState</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {state.error && <p>Error: el código es incorrecto</p>}
            {state.loading && <p>Cargando</p>}
            <input value={state.value} placeholder="Código de seguridad" onChange={
                    (event)=> setState({value:event.target.value})}
            >
            </input>
            <button onClick={()=> {setState({loading:!state.loading, error: false})}}>
                Comprobar
            </button>
        </div>
    )
}

export {UseState}