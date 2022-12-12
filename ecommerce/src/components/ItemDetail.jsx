import React from "react";
import ItemCount from "./ItemCount"

const ItemDetail = ({item}) =>{
    return(
        <div className="row my-3">
            <div className="col-md-6 offset-md-3 text-center">
                <img className="img-fluid" src={item.imagen} alt={item.nombre}/>
                <h1>{item.nombre}</h1>
                <p><b>${item.precio}</b></p>
                <p>{item.descripcion}</p>
                <ItemCount stockItems={item.stock}/>
            </div>
        </div>            
    )
}

export default ItemDetail;