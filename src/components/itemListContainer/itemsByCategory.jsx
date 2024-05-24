import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
//import { GetProductsFast } from "../../mock/asyncMock";
import ItemTienda from "../tienda/itemList";
import { query, where, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


function ItemsByCategoria() {

    const category = useParams().category;
    

    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState("Productos");

    useEffect(()=>
    {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("category", "==", category));

        getDocs(q).then((resp)=>{
            setProducts(
                resp.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id};
                })
            )
            setTitulo(category);
        })
        
    },[category]);

   // useEffect(() => {
        //GetProductsFast()
            //.then((res) => {
                //if (category) {
                    //setProducts(res.filter((products) => products.category === category));
                    //setTitulo(category)
                //} else {
                  //  setProducts(res);
                //}
            //})
    //}, [category]);
    
    return (
        <>
            <ItemTienda titulo={titulo} />
            <ItemList products={products} />
        </>
    )
}
export default ItemsByCategoria;