import React from "react";
import {Loading} from "../Loading"
import "../../styles/UseState.css";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value: "",
            error: false,
            loading: false,
        }
    }
    mandalo(param){
        const cosa = param;
        console.log(cosa)
    }
    componentDidUpdate(){
        if(this.state.loading){
            setTimeout(()=>{
                this.state.value === SECURITY_CODE ? this.setState({loading:false}): 
                (this.setState({loading:false}), this.setState({error:true}));
                this.mandalo(this.state.value);
                
            }, 3000);
        }   
    }
    
    render(){
        const {value, loading, error} = this.state;

        return(
            <div className="ClassState">
                <h2>Elimina ClassState</h2>
                <p>Por favor, escribe el código de seguridad</p>
                <input value={value} placeholder="Código de seguridad" onChange={(event)=>{
                    this.setState({value: event.target.value})
                }}></input>
                <button onClick={()=> this.setState(
                    {
                        loading: !this.state.loading,
                        error:false,
                    })}
                >
                    Comprobar
                </button>
                {loading && <Loading></Loading>}
                {error && <p>Error: el código no es correcto</p>}
            </div>
        )
    }
   
}

export {ClassState}