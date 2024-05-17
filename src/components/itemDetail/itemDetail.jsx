import useCount from "../../kooks/useCount";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.css";
import CartContext from "../../context/cart-context/cartContext";
import { useContext } from "react";

export const ItemDetail = ({ item }) => {
  const { count, increment, decrement, reset } = useCount(0);
  const { carrito, addToCart } = useContext(CartContext);
  console.log(carrito);
  return (
    <div className='cont'>
      <div className='conteiner-img'>
        <img src={item.img} alt={item.name} />
      </div>
      <div className="conteiner-text">
        <h1 >{item.name}</h1>
        <h2>Precio: ${item.price}</h2>
        <h2>Descripcion: {item.description}</h2>
        <h2>Categoria: {item.category}</h2>
        <div className="itemCount">
          <ItemCount
            stock={item.stock}
            count={count}
            increment={increment}
            decrement={decrement} />
        </div>
        <div className="add">
          <button className="addCart"
            onClick={() => { addToCart(item, count) }}
            disabled={count === 0}>
            Add to Cart
          </button>

        </div>
      </div>

    </div>
  )
}
