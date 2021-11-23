import React from "react";

export default class ModoFuncionamento extends React.Component {

    botaoPressionado = (evento) => {
        let valor = evento.target.id
        this.props.alterar(valor)
    }

    render() {
        return <div>
            <button onClick={this.botaoPressionado} id="0">Ventilar</button>
            <button onClick={this.botaoPressionado} id="1">Resfriar</button>
            <button onClick={this.botaoPressionado} id="2">Aquecer</button>
        </div>
    }
}