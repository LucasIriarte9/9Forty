import CartIcon from "./cartIcon";
import "./cart.css"
import { useContext } from "react";
import CartContext from "../../../context/cart-context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const {cantidadEnCarrito} = useContext(CartContext);
    return (
        <>
        <Link to={"./carrito"}>
        <div className="cart">
            <CartIcon width={40} heigth={30} />
            <span>{cantidadEnCarrito()}</span>
        </div>
        </Link>
        </>
        
    )
}
export default CartWidget;