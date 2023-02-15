import React from "react";
import "../../styles/Confirm.css"

function Confirm(props){

    const handleDelete = ()=> props.setState({deleted:true});
    const handleConfirm = ()=> props.setState({confirmed:false, value:""});

    return(
        <div className="Confirm">
            <p className="Confirm__text">¿Estás seguro que deseas eliminar UseState?</p>
            <button className="Confirm__btn-delete" onClick={()=>handleDelete()}>Eliminar</button>
            <button className="Confirm__btn-confirm" onClick={()=>handleConfirm()}>Regresar</button>
        </div>  
    )
}

export {Confirm}