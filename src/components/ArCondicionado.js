import React from "react";
import ModoFuncionamento from "./ModoFuncionamento";
import Velocidade from "./Velocidade";

export default class ArCondicionado extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            funcionamento: 0,
            velocidade: 0
        }
    }

    alterarFuncionamento = (valor) => {
        this.setState({
            funcionamento: valor
        })
    }

    alterarVelocidade = (valor) => {
        this.setState({
            velocidade: valor
        })
    }

    render() {
        return <div>
            <h2>Ar Condicionado </h2>
            <div>Modo de Funcionamento: {this.state.funcionamento}</div>
            <div>Velocidade: {this.state.velocidade}</div>
            <ModoFuncionamento alterar={this.alterarFuncionamento}></ModoFuncionamento>
            <Velocidade alterar={this.alterarVelocidade} valor={this.state.velocidade}></Velocidade>
        </div>
    }
}