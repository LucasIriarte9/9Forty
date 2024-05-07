import { Link } from "react-router-dom";
import useCount from "../../kooks/useCount";
import ItemCount from "../itemCount/itemCount";
import "./item.css";

export default function Item({ item }) {
    const { count, increment, decrement } = useCount(0);
    const onAdd = (nombreDeItem, cantidadDeLlevar) => {
        console.log("nombreDeItem: ", nombreDeItem);
        console.log("cantidadDeLLevar: ", cantidadDeLlevar);
    };
    return (
            <div className="conteiner-items">
                <img className="img" src={item.img}/>
                <h2>{item.name}</h2>
                <h3>{item.description}</h3>
                <h3>${item.price}</h3>
                <div className="conteiner-ver">
                <Link className="ver" to={`/item/${item.id}`} >Ver mas</Link>
                </div>
            </div>
    )
}
