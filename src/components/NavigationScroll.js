import React from "react";

class NavigationScroll extends React.Component {
    render() {
        return (
            <nav id="navbar-example3" className="navbar navbar-dark bg-dark flex-column align-items-stretch p-3 NavScroll">
                <nav className="nav nav-pills flex-column">
                    <a className="nav-link" href="#item-1">Item 1</a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1" href="#item-1-1">Item 1-1</a>
                        <a className="nav-link ms-3 my-1" href="#item-1-2">Item 1-2</a>
                    </nav>
                    <a className="nav-link" href="#item-2">Item 2</a>
                    <a className="nav-link" href="#item-3">Item 3</a>
                    <nav className="nav nav-pills flex-column">
                        <a className="nav-link ms-3 my-1" href="#item-3-1">Item 3-1</a>
                        <a className="nav-link ms-3 my-1" href="#item-3-2">Item 3-2</a>
                    </nav>
                </nav>
            </nav>
        );
    }
}

export default NavigationScroll;