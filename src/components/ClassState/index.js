import React from "react";
import {Loading} from "../Loading"
import "../../styles/UseState.css";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            error: false,
            loading: false,
        }
    }

 /*    UNSAFE_componentWillMount(){
        console.log("<Loading> será montado")
    }

    componentDidMount(){
        console.log("<Loading> fue montado")
    } */

   /*  componentWillUnmount(){
        console.log("soy el ClassState")
    } */

    componentDidUpdate(){
        if(this.state.loading){
            setTimeout(()=>{
                console.log("Haciendo validación");
                this.setState({loading:false})
                console.log("Terminando validación");
            }, 3000);
        }
    }
    
    render(){
        return(
            <div className="ClassState">
                <h2>Elimina ClassState</h2>
                <p>Por favor, escribe el código de seguridad</p>
                <input placeholder="Código de seguridad"></input>
                <button onClick={()=> this.setState({loading: !this.state.loading})}>Comprobar</button>
                {this.state.loading && <Loading></Loading>}
                {this.state.error && <p>Error: el código no es correcto</p>}
            </div>
        )
    }
   
}

export {ClassState}