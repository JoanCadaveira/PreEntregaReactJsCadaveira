import React, { useContext }  from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "./context/CartContext";

const ItemDetail = ({item}) =>{
    const {addItem} = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }

    return(
        <div className="row my-3">
            <div className="col-md-6 offset-md-3 text-center">
                <img className="img-fluid" src={item.imagen} alt={item.nombre}/>
                <h1>{item.nombre}</h1>
                <p><b>${item.precio}</b></p>
                <p>{item.descripcion}</p>
                <ItemCount stock={item.stock} onAdd={onAdd} />
            </div>
        </div>            
    )
}

export default ItemDetail;