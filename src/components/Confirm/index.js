import React from "react";
import "../../styles/Confirm.css"

function Confirm(props){

    const handleDelete = ()=> props.dispatch({type:"Delete"});
    const handleConfirm = ()=> props.dispatch({type:"Confirm"});

    return(
        <div className="Confirm">
            <p className="Confirm__text">¿Estás seguro que deseas eliminar UseState?</p>
            <button className="Confirm__btn-delete" onClick={()=>handleDelete()}>Eliminar</button>
            <button className="Confirm__btn-confirm" onClick={()=>handleConfirm()}>Regresar</button>
        </div>  
    )
}

export {Confirm}