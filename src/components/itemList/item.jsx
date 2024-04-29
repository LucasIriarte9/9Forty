import useCount from "../../kooks/useCount";
import ItemCount from "../itemCount/itemCount";
import "./item.css";

export default function Item({ item }) {
    const { count, increment, decrement } = useCount(0);
    const onAdd = (nombreDeItem, cantidadDeLlevar) => {
        console.log("nombreDeItem: ", nombreDeItem);
        console.log("cantidadDeLLevar: ", cantidadDeLlevar);
    };
    console.log({ count, item });
    return (
            <div className="conteiner-items">
                <img className="img" src={item.img}/>
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <h3>${item.price}</h3>
                <div>
                    <ItemCount
                        stock={item.stock}
                        count={count}
                        increment={increment}
                        decrement={decrement} />
                </div>
                <div>
                    <button className="addCart" onClick={() => onAdd(item, count)}>Add to Cart</button>
                </div>
            </div>
    )
}
