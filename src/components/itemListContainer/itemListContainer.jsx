import ItemList from "../itemList/itemList";
import useProduct from "../../kooks/useProduct";
import ItemTienda from "../tienda/itemList";
import "./items.css";

function ItemListContainer() {
    const { loading, products } = useProduct();
    if (loading) return <h1 className="carga">Cargando...</h1>

    return (
        <>
            <ItemTienda titulo={"Productos"}/>
            <ItemList products={products} />
        </>
    )
}
export default ItemListContainer;