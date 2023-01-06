import React, { useState, useContext } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const CheckOut = () => {
    const {cart, clear, sumTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        const order = {
            buyer: {name:nombre, email:email, phone:telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, price_total:item.quantity * item.precio})),
            total: sumTotal()
        };

        //Grabar objeto en Firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((snapShot) => {
            setOrderId(snapShot.id);
            clear();
        });
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col mb-5">
                    <form>
                        <div className="mb-3">
                            <label for="nombre" className="form-label">Nombre completo</label>
                            <input type="text" className="form-control" placeholder="Ingrese su nombre completo" id="nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="text" className="form-control" placeholder="Ingrese su email" id="email" onInput={(e) => {setEmail(e.target.value)}}/>
                        </div>
                        <div className="mb-3">
                            <label for="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" placeholder="Ingrese su telefono" id="telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                        </div>
                        <button type="button" className="btn btn-primary btn-dark" onClick={generarOrden}>Confirmar compra</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-center"><img src={item.imagen} alt={item.nombre} 
                                    width={50}/></td>
                                    <td className="text-center align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">{item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end">Total a pagar:</td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {orderId ?
                    <div className="alert alert-dark" role="alert">
                        <h1 className="text-center">Gracias por su compra!</h1>
                        <p className="text-center">Su orden de pedido es: {orderId}</p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default CheckOut;