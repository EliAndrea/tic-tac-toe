import React, { Component } from 'react';
import './App.css';
import { SeleccionJugador } from "./components/SeleccionJugador.js";
import { Juego } from "./components/Juego.js";

class App extends Component {
  constructor(){
    super();
    this.state = {
      mostrarTablero: false,
      jugador: ""
    };
  }
  
  activarTablero = () => {
    this.setState({mostrarTablero: true});  
  }
  
  seleccionarJugador = (simbolo) => {
    this.setState({jugador: simbolo});
  }
  
  reiniciarPartida = () => {
    this.setState({mostrarTablero: false});
  }
  
  render(){
    return(
      <div className="App">
        <h1 className= "titulo">Tic Tac Toe #</h1>
        {this.state.mostrarTablero ? (
          <Juego reiniciar={this.reiniciarPartida} jugador={this.state.jugador} cambiarJugador={this.seleccionarJugador}/>
        ) : (
          <SeleccionJugador mostrar={this.activarTablero} seleccion={this.seleccionarJugador}/>
        )}
      </div>
    );
  }
}

export default App;
