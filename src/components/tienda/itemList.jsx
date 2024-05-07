import { firstMayu } from "../../kooks/firstMayu";
import "./itemlist.css";

function ItemTienda({titulo}) {
    return (
        <div className="listh1">
            <h1>{firstMayu(titulo)}</h1>
        </div>
    );
}

export default ItemTienda;