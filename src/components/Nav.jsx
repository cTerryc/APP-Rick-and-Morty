import SearchBar from "./SearchBar.jsx";
import React from "react";
import estilos from '../estilos/Nav.module.css'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={estilos.nav}>
                <a href="https://fontmeme.com/es/efecto-sombra/"><img src="https://fontmeme.com/permalink/221117/f34e16558003dcf2db2973308e1cbc55.png" alt="efecto-sombra" border="0"/></a>
                <SearchBar onSearch={this.props.onSearch} />
            </div>
        )
    }
}