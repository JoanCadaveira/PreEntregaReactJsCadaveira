//en caso de entrar a una ruta erronea

import React from "react";

const Error404 = () => {
    return(
        <div className="container">
            <div className="row my-3">
                <div className="col text-center">
                    <h1>Error!</h1>
                    <p>La web solicitada no existe!</p>
                </div>
            </div>
        </div>
    )
}

export default Error404;