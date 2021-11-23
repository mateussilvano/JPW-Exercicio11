import React from "react";

export default class Velocidade extends React.Component {

    alteraValor = (evento) => {
        let valor = evento.target.value
        this.props.alterar(valor)
    }

    render() {
        return <div>
            <input type="number" max="3" min="0" onChange={this.alteraValor} value={this.props.valor}></input>
        </div>
    }
}