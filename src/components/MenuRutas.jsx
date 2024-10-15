import React, { Component } from 'react'

export default class MenuRutas extends Component {
    render() {
        return (
            <div>
                <div>
                    <ul>
                        <li>
                            <a href="/formulario">Iniciar sesion</a>
                        </li>
                        <li>
                            <a href="/collatz">Collatz</a>
                        </li>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/cine">Cine</a>
                        </li>
                        <li>
                            <a href="/musica">Musica</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
