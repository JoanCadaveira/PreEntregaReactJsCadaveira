import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () =>{
    const {cart, removeItem, clear, sumTotal, cartTotal} = useContext(CartContext);

    if(cartTotal() === 0) {
        return(
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <img src={"/images/5824874.jpg"} alt="img carro vacio" />
                    </div>
                    <div className="text-center py-5">
                        <Link to={"/"} className="btn btn-dark">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }


    return(
        <div className="container py-3">
            <div className="row">
                <div className="col-md-12">   
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} 
                                className="btn fondoCart" title="Vaciar carrito">Vaciar carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id} >
                                    <td className="text-center"><img src={item.imagen} alt={item.nombre} 
                                    width={50}/></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="align-middle text-center">{item.quantity * item.precio}</td>
                                    <td className="text-end align-middle"><Link onClick={() => {removeItem(item.id)}} title="Eliminar producto"
                                    ><img src={"images/trash2.svg"} alt={"Eliminar"} width={30}/></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma total = </td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;