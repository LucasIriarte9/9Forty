import Item from "./item";
import "./itemList.css";
export default function ItemList({products}){
    return(
        <div className="conteiner">
            {products.map((product)=>(
                <Item key={product.id} item={product}/>
            ))}
        </div>
    )
}