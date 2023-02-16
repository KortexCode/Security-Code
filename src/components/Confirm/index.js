import React from "react";
import "../../styles/Confirm.css"

function Confirm(props){

    const handleDelete = ()=> props.dispatch({type: props.actionsTypes.delete});
    const handleBack= ()=> props.dispatch({type: props.actionsTypes.back});

    return(
        <div className="Confirm">
            <p className="Confirm__text">¿Estás seguro que deseas eliminar UseState?</p>
            <button className="Confirm__btn-delete" onClick={handleDelete}>Eliminar</button>
            <button className="Confirm__btn-confirm" onClick={handleBack}>Regresar</button>
        </div>  
    )
}

export {Confirm}