import useCount from "../../kooks/useCount";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.css";

export const ItemDetail = ({ item }) => {
  const { count, increment, decrement } = useCount(0);
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
        <div>
          <button className="addCart" onClick={() => onAdd(item, count)}>Add to Cart</button>

        </div>
      </div>

    </div>
  )
}
