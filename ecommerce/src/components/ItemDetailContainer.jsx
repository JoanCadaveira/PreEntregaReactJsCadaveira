import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import arrayProductos from "./json/arrayProductos.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ItemDetailContainer = () =>{
    const [item, setItem] = useState({});
    const {id} = useParams();
    /*
    Promesa que accede a un JSON con array de objt
    useEffect(() => {
        //llamamos solo 1 item de el array de productos
        const promesa = new Promise ((resolve) =>{
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            },2000);
        });

        promesa.then((data) => {
            setItem(data);
        })

    }, [id]);
    */

    //Consultar a Firestore
    
    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if(snapShot.exists()){
                setItem({id:snapShot.id, ...snapShot.data()});
            } else {
                console.log("erorr nose encontro producto");
            };
        });
    }, []);
    
    
    return(
        <div className="container">
            <ItemDetail item={item} />           
        </div>
    )
}

export default ItemDetailContainer;