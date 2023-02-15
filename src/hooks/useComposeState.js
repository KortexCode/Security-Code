
import React from "react";

//Se recibe un objetos con los valores del estado inicial
function useComposeState(init_state){
    //Se crea un estado el cual tendrá como valor inicial el objeto recibido por parámetro
    const [state, set_state] = React.useState(init_state);
    //Este setState será una función que recibe el nuevo estado e internamente actualiza
    //el estado con set_state pero haciendo propagación para obtener objeto literal final
    const setState = (newState) => {
        set_state((prevState)=>({...prevState, ...newState}))
    }
    //Retorna 
    return {
        state,
        setState
    }
}

export {useComposeState}