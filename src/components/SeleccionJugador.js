import React, { Component } from 'react';

export class SeleccionJugador extends Component {
    constructor(props){
        super(props);
        this.state = {
            jugador: ""
        }
    }
    render(){
        return(
            <div>
                <h2 className= "subtitulo">Selección de jugadores</h2>
                <div className= "caja ingresojugadores">
                    <h3 className="encabezado">Ingrese los nombres de los jugadores:</h3>
                    <div className="jugador uno">
                        <p>Player 1</p>
                        <input type= "text"/>
                    </div>
                    <div className="jugador dos">
                        <p>Player 2</p>
                        <input type= "text"/>
                    </div>    
                </div>
                <div className="caja seleccionSimbolo">
                    <h3 className="encabezado">Seleccione el simbolo del jugador 1:</h3>
                    <button onClick={()=>{
                        this.props.seleccion("X");
                        this.props.mostrar();
                        }} 
                        className="boton equis"> X 
                    </button>
                    <button onClick={()=>{
                        this.props.seleccion("O");
                        this.props.mostrar();
                        }}
                        className="boton circulo"> O 
                    </button>
                </div>
            </div>
        );
    }
}