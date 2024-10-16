import React, { Component} from 'react'

export default class Collatz extends Component {
    cajaNumero = React.createRef()

    state = {
        numero:[]
    }

    obtenerNum=(e)=>{
        e.preventDefault();
        let valor = parseInt(this.cajaNumero.current.value)
        this.state.numero.push(valor)
        let num2 =[]
       while (valor!=1) {
            if (valor%2 == 0) {
                valor = valor/2            
            } else {
                valor = valor*3+1
            }
              num2.push(valor)  
        }
        this.setState({
            numero:num2
        })

    }
  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.obtenerNum}>
            <label>Numero:</label>
            <input type="text" ref={this.cajaNumero} />
            <button>Conjetura Collatz</button>
        </form>
        {
            this.state.numero &&
            (<ul>{
                this.state.numero.map((num,index)=>{
                    return(<li key={index}>{num}</li>)
                })
                }</ul>)

        }
      </div>
    )
    }
}
