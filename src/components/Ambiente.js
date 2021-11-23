import React from "react";
import ArCondicionado from "./ArCondicionado";

export default class Ambiente extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            temperatura: 20
        }
    }

    render() {
      return  <main>
            <div>Temperatura Ambiente: {this.state.temperatura} graus</div>
            <ArCondicionado></ArCondicionado>
        </main>
    }

}