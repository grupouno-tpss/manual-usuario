import React from "react";

class NavigationManual extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Manual de usuario - SRI</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                               
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-2" type="search" placeholder="¿Qué desea buscar?" aria-label="Search"/>
                                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
                <br />
                <br />
            </div>
        );
    }
}

export default NavigationManual;