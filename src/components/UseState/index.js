import React from "react";

const SECURITY_CODE = "paradigma";

function UseState(){

    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(()=>{

        if(loading){
            setTimeout(()=>{
                console.log("Haciendo validación");
                value === SECURITY_CODE ? setLoading(false): 
                (setLoading(false), setError(true));
                console.log("Terminando validación");
            }, 3000);
        }
    
    }, [loading]);


    return(
        <div className="UseState">
            <h2>Elimina UseState</h2>
            <p>Por favor, escribe el código de seguridad</p>
            {error && <p>Error: el código es incorrecto</p>}
            {loading && <p>Cargando</p>}
            <input value={value} placeholder="Código de seguridad" onChange={
                (event)=> setValue(event.target.value)
            }></input>
            <button onClick={()=> 
                    {
                        setError(false);
                        setLoading(!loading);  
                    } 
                }>Comprobar</button>
        </div>
    )
}

export {UseState}