import { useEffect, useState } from "react";
import ItemList from "../itemList/itemList";
import { useParams } from "react-router-dom";
import { GetProductsFast } from "../../mock/asyncMock";
import ItemTienda from "../tienda/itemList";


function ItemsByCategoria() {

    const category = useParams().category;
    console.log(category);

    const [products, setProducts] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    useEffect(() => {
        GetProductsFast()
            .then((res) => {
                if (category) {
                    setProducts(res.filter((products) => products.category === category));
                    setTitulo(category)
                } else {
                    setProducts(res);
                }
            })
    }, [category]);
    
    return (
        <>
            <ItemTienda titulo={titulo} />
            <ItemList products={products} />
        </>
    )
}
export default ItemsByCategoria;