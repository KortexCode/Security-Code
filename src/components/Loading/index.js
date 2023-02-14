import React from "react";

class Loading extends React.Component{

    componentWillUnmount(){
        console.log("<Loading> fue desmontado")
    }
    
    render(){
        return(
            <p className="Loading">
                Cargando...
            </p>
        )
    }
   
}

export {Loading}