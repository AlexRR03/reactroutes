import React, { Component } from 'react'

export default class FormSimple extends Component {
    cajaNombre = React.createRef();
    cajaEdad = React.createRef();

    state = {
        user:null

    }
    //PARA PROCESAR LA PETICION NECSITAMOS UN METODO
    //QUE RECIBA event
    peticionForm = (e)=>{
        e.preventDefault();
        //console.log("Peticion lista")
        let nombre = this.cajaNombre.current.value;
        let edad = parseInt(this.cajaEdad.current.value)
        this.setState({
            user:{
                nombre:nombre,
                edad:edad
            }
        })
       
    }
  render() {
    return (
      <div>
        <h1>Formulario simple React </h1>
        
            {
                this.state.user &&
                (<h2 style={{color:"blue"}}>
                    Nombre: {this.state.user.nombre}, 
                    Edad: {this.state.user.edad} 
                </h2>)
            }
       
            <form onSubmit={this.peticionForm}>
                <label>Nombre: </label>
                <input type="text"  ref={this.cajaNombre}/>
                <label>Edad: </label>
                <input type="text" ref={this.cajaEdad} />
                <button>
                    Enviar datos
                </button>
            </form>
      </div>
    )
  }
}
