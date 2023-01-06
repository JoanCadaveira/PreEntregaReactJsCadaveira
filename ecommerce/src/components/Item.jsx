import React from "react";
import { Link } from "react-router-dom";

const Item = ({item}) => {
    return(
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card mb-3 border border-secondary">
                <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text"><b>${item.precio}</b></p>
                    <p className="card-text"><b>{item.nombre}</b></p>
                </div>
            </div>
        </Link>
    )
}

export default Item;