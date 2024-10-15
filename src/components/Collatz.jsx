import React, { Component} from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef()

    state = {
        numero:[]
    }

    obtenerNum=(e)=>{
        e.preventDefault(e);
        let numero=[]
        let valor = parseInt(this.cajaNumero.current.value)
        numero.push(valor)
       while (this.state.numero == 1) {
            if (this.state.numero%2 == 0) {
                valor = valor/2
                numero.push(valor)
                
            } else {
                valor = valor*3+1
                numero.push(valor) 
            }
                
        }
        this.setState({
            numero:numero
        })

    }
  render() {
    return (
      <div>
        {
            this.state.numero &&
            (<ul>{
                this.state.numero.map(()=>{
                    <li>{this.state.numero}</li>
                })
                }</ul>)

        }
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.obtenerNum}>
            <label>Numero:</label>
            <input type="text" ref={this.cajaNumero} />
            <button>Enviar</button>
        </form>
      </div>
    )
    }
}
