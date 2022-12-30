import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendio, setVendido] = useState(false);

    //Incrementar contador
    const incrementarContador = () => {
        //no dejamos que se ingresen mas del stock limite
        if(counter < itemStock){
            setCounter(counter + 1);
        }     
    }


    //Decrementar contador
    const decrementarContador = () => {
        //no dejamos que se ingresen nªs negativos
        if(counter > 1){
        setCounter(counter - 1);
        }
    }

    //Agregar productos al carro y no sobrepasar el stock disponible
    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        //resteamos el contador
        setCounter(0);
        setVendido(true);
        onAdd(quantity);
        /*
        if((stock > 0) && (counter <= stock)){
        console.log("Agregaste " + counter + " productos al carro")
        setStock(stock - counter);
        setCounter(0);
        }
        */  
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-dark" onClick={decrementarContador}>-</button>
                        <button type="button" className="btn btn-dark espacio">{counter}</button>
                        <button type="button" className="btn btn-dark" onClick={incrementarContador}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendio ? <Link to={"/cart"} className="btn btn-dark">Finalizar compra</Link> : 
                    <button className="btn btn-dark" onClick={() => {addToCart(counter)}}>Agregar al carro
                    </button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;