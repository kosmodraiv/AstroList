import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
    <nav>
        <Link to="/login">Войти</Link>
        <a>К задачам</a>
    </nav>
    )
}

export default Header