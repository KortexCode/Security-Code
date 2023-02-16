import React from "react";
import "../../styles/Delete.css"

function Delete(props){

    const handleRecovery = ()=> props.dispatch({type: props.actionsTypes.recovery});

    return(
        <div className="Delete">
            <p className="Delete__text">useState fue elminado, ¿Deseas recuperar a UseState?</p>
            <button className="Delete__btn-recovery" onClick={handleRecovery}>
                Recuperar
            </button>           
        </div>
    )
}

export {Delete}