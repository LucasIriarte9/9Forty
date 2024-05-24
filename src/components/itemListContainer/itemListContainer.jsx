import ItemList from "../itemList/itemList";
//import useProduct from "../../kooks/useProduct";
import ItemTienda from "../tienda/itemList";
import "./items.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer() {
    //const { loading, products } = useProduct();
    const [productos, setProductos] = useState([]);
    //if (loading) return <h1 className="carga">Cargando...</h1>

    //const category = useParams().category;

    useEffect(() => {
        const productosRef = collection(db, "productos");
        getDocs(productosRef).then((resp) => {
            setProductos(
                resp.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                })
            );
        })
    }, []);



    return (
        <>
            <ItemTienda titulo={"Productos"} />
            <ItemList products={productos} />
        </>
    )
}
export default ItemListContainer;