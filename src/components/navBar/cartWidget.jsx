import { useState } from "react";
import CartIcon from "./cartIcon";
import "./cart.css"

function CartWidget()
{
    const [cartItems, setCartItems] = useState(4);
    return(
        <div className="cart">
            <CartIcon width={40} heigth={30} />
            <span>{cartItems}</span>
        </div>
    )
}
export default CartWidget;