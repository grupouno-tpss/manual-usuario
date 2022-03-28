import React from "react";
import ModeloLogico from "../../assets/images/modelo-logico.png";
import ModeloLogicoCliente from "../../assets/images/m-logico-cliente.png";

class MapaSistema extends React.Component {
    render() {
        return (
            <div>
                <br/><br/>
                <h4 id="item-2">Mapa del sistema</h4>
                <hr/><br/>
                <img src={ModeloLogico}></img>
                <img src={ModeloLogicoCliente}></img>
            </div>
        );
    }
}

export default MapaSistema;