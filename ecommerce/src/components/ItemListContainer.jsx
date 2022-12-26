import React, { useState, useEffect } from "react";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
// import arrayProductos from "./json/arrayProductos.json";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    //llamar el array de productos
    /*
    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos); 
                //en caso de no encontrar el producto trae todo el array
            }, 2000)
        })

        promesa.then((data) => {
            setItems(data);
        })
    },[id]);
    */
    /*
    Consultar a Firestore por un ID
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        
        arrayProductos.forEach((item) => {
            addDoc(itemsCollection, item);
        });
    }, []);
    */

    //CONSULTAR coleccion de mis productos

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        });
    }, [id]); 

    return(
        <div className="container py-5">
            <ItemList items={items} />         
        </div>
    )
}

export default ItemListContainer;