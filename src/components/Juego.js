import React, { Component } from 'react';
import Casilla from './Casilla.js';

export class Juego extends Component{
    constructor(props){
        super(props);
        this.state = {
            botones: ["X", "O"],
            marcas: [["", "", ""], ["", "", ""], ["", "", ""]],
            ganador: ""
        };
        this.marcarJugada = this.marcarJugada.bind(this);
        this.comprobarGanador = this.comprobarGanador.bind(this);
    }
    
    comprobarGanador(arr){
        for(let i=0; i<arr.length; i++){
            if(arr[i][0] === arr[i][1] && arr[i][0] === arr[i][2] && arr[i][0] !== ""){
                this.setState({ganador: arr[i][0]});
            }
        }
        for(let i=0; i<arr.length; i++){
            if(arr[0][i] === arr[1][i] && arr[0][i] === arr[2][i] && arr[0][i] !== ""){
                this.setState({ganador: arr[0][i]});
            }
        }
        if(arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2]  && arr[0][0] !== ""){
            this.setState({ganador: arr[0][0]});
        }
        else if(arr[0][2] === arr[1][1] && arr[0][2] === arr[2][0] && arr[0][2] !== ""){
            this.setState({ganador: arr[0][2]});      
        }
    }

    marcarJugada(index1, index2){
        let jugadas = this.state.marcas;
        jugadas[index1][index2] = this.props.jugador;
        this.setState({marcas: jugadas});
        this.comprobarGanador(jugadas);
        if(this.props.jugador === "X"){
            this.props.cambiarJugador("O");
        }
        else{
            this.props.cambiarJugador("X");
        }
    }
  
    render(){
        return(
            <div>
                <div>
                    {this.state.ganador === "" ? (
                        <h2 className="subtitulo">Es el turno de {this.props.jugador}</h2>
                    ) : (
                        <h2 className="subtitulo">El ganador es {this.state.ganador}!</h2>
                    )}
                </div>    
                <div className="tablero">
                    <div className= "primera fila">
                        <Casilla className="" marca={this.state.marcas[0][0]} onClick={()=>this.marcarJugada(0,0)}/>
                        <Casilla className="columna" marca={this.state.marcas[0][1]} onClick={()=>this.marcarJugada(0,1)}/>
                        <Casilla className="" marca={this.state.marcas[0][2]} onClick={()=>this.marcarJugada(0,2)}/>
                    </div>
                    <div className="segunda fila">
                        <Casilla className="" marca={this.state.marcas[1][0]} onClick={()=>this.marcarJugada(1,0)}/>
                        <Casilla className="columna" marca={this.state.marcas[1][1]} onClick={()=>this.marcarJugada(1,1)}/>
                        <Casilla className="" marca={this.state.marcas[1][2]} onClick={()=>this.marcarJugada(1,2)}/>
                    </div>
                    <div className="tercera fila">
                        <Casilla className="" marca={this.state.marcas[2][0]} onClick={()=>this.marcarJugada(2,0)}/>
                        <Casilla className="columna" marca={this.state.marcas[2][1]} onClick={()=>this.marcarJugada(2,1)}/>
                        <Casilla className="" marca={this.state.marcas[2][2]} onClick={()=>this.marcarJugada(2,2)}/>
                    </div>
                </div>
                <button className="botonReinicio" onClick={()=> {
                    this.props.reiniciar();
                    this.setState({
                        marcas: [["", "", ""], ["", "", ""], ["", "", ""]],
                        ganador: ""            
                        });
                    }
                }> 
                    Reiniciar Juego
                </button>
            </div>
        );
    }
}