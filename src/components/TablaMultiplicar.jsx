import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
  cajaNumero = React.createRef()

  state = {
    listaNumeros: []
  }

  multiplicar = (e) => {
    e.preventDefault();
    let numero = parseInt(this.cajaNumero.current.value)
    console.log(numero)
    let listaNumeros2 = []

    let contador = 1
    while (contador != 11) {
      listaNumeros2.push(numero * contador)
      contador++
    }
    console.log(listaNumeros2)

    this.setState({
      listaNumeros: listaNumeros2
    })
  }

  render() {
    return (
      <div>
        <h1>Tabla de Multiplicar</h1>
        <form onSubmit={this.multiplicar} >
          <label>Numero: </label>
          <input type="text" ref={this.cajaNumero} />
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
