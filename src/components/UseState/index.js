import React from "react";

function UseState(){

    const [error, setError] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{

        if(loading){
            setTimeout(()=>{
                console.log("Haciendo validación");
                setLoading(false)
                console.log("Terminando validación");
            }, 3000);
        }
    
    }, [loading])

    return(
        <div className="UseState">
            <h2>Elimina UseState</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {error && <p>Error: el código es incorrecto</p>}
            {loading && <p>Cargando</p>}
            <input placeholder="Código de seguridad"></input>
            <button onClick={()=> setLoading(!loading)}>Comprobar</button>
        </div>
    )
}

export {UseState}