import React, { Component } from 'react'

export default class TablaMultiplicarV2 extends Component {
   
   
   
  selNumero = React.createRef()

  state = {
    opcionSel:[],
    listaNumeros: []
  }

  obtenerOptions = ()=>{
        for (let index = 0; index <=4; index++) {
            let numAleatorio = Math.floor(Math.random() * 999)
            this.state.opcionSel.push(numAleatorio)
            
        }
  }



  multiplicar = (e) => {
    e.preventDefault();
    let numero = parseInt(this.selNumero.current.value)
    console.log(numero)
    let listaNumeros2 = []

    let contador = 1
    while (contador != 11) {
      listaNumeros2.push(numero * contador)
      contador++
    }
    console.log(listaNumeros2)

    this.setState({
      listaNumeros: listaNumeros2,
      opcionSel:[]
    })
  }

  render() {
    return (
      <div>
        {this.obtenerOptions()}
        <h1>Tabla de Multiplicar</h1>
        <form onSubmit={this.multiplicar} >
          <label>Numero: </label>
          <select id='select' ref={this.selNumero}>
            {this.state.opcionSel.map((opcion,index)=>{
                return(<option key={index}>{opcion}</option>)
            })}
          </select>
          <button>Multiplicar</button>
        </form>
        <h1> Tabla de multiplicar: {this.state.listaNumeros[0]}</h1>
        <table>
          <thead>
            <tr>
              <th>Operacion</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
          {this.state.listaNumeros.map((numero, index) => {
            return (
              
                <tr key={index}>
                  <td>{this.state.listaNumeros[0]}*{index + 1} = </td>
                  <td>{numero}</td>
                </tr>
              
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }
}

