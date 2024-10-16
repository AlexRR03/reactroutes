import {BrowserRouter, Routes , Route}  from "react-router-dom";
import React, { Component } from 'react'
import Home from "./Home";
import Cine from "./Cine";
import Musica from "./Musica";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import TablaMultiplicar from "./TablaMultiplicar";
import TablaMultiplicarV2 from "./TablaMultiplicarV2";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <Routes>
            <Route path="/formulario" element={<FormSimple/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/cine" element={<Cine/>}></Route>
                <Route path="/musica" element={<Musica/>}></Route>
                <Route path="/collatz" element={<Collatz/>}></Route>
                <Route path="/tablaMultiplicar" element={<TablaMultiplicar/>}></Route>
                <Route path="/tablaMultiplicarV2" element={<TablaMultiplicarV2/>}></Route>
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
