import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="container contenedorNav">
            <div className="row">
                <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={"images/Logo_NIKE.svg.png"} alt="Nike Logo"
                        width={85} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/zapatillas">Zapatillas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/camisetas">Camisetas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/pantalones">Pantalones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/conjuntos">Conjuntos</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;