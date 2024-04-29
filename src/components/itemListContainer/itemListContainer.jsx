import ItemList from "../itemList/itemList";
import useProduct from "../../kooks/useProduct";

function ItemListContainer() {
    const { loading, products } = useProduct();

    if (loading) return <h1>Cargando...</h1>

    return (
        <>
            <ItemList products={products} />
        </>
    )
}
export default ItemListContainer;