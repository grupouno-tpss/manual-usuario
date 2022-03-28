import React from "react";

//Articles

import DescripcionSistema from "./articles/DescripcionSistema";
import MapaSistema from "./articles/MapaSistema";

class ArticlesScroll extends React.Component {
    render() {
        return (
            <div>
                <DescripcionSistema/>
                <MapaSistema/>
            </div>
        );
    }
}

export default ArticlesScroll;