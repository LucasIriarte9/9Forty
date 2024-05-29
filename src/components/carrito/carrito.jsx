import React, { useContext } from 'react'
import CartContext from '../../context/cart-context/cartContext'
import "./carrito.css";
import { Link } from 'react-router-dom';
import useCount from '../../kooks/useCount';

export const Carrito = () => {
    const { carrito, precioTotal, cantidadEnCarrito, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className='carrito-conteiner'>
            <div>
                {
                    carrito.map((prod) => (
                        <div className='conteiner-all'>

                            <div key={prod.id} className='product-conteiner-cart'>
                                <img src={prod.img} alt={prod.name} className='product-conteiner-cart-img' />
                                <div>
                                    <h2>{prod.name}</h2>
                                    <h3>Precio unitario: ${prod.price}</h3>
                                    <h3>Precio por cantidad: ${prod.price * prod.count}</h3>
                                    <h4>Cantidad a llevar:{prod.count}</h4>
                                </div>
                            </div>

                        </div>
                    ))

                }
            </div>

            <div className='price-conteiner'>
                {
                    carrito.length > 0 ?
                        <div className='price-conteiner-pos'>
                            <h3>Resumen de compra</h3>
                            <h3>Cantidad de productos a llevar: {cantidadEnCarrito()}</h3>
                            <h2>Precio total:${precioTotal()}</h2>
                            <Link to="/checkout" className='addCart'>Continuar Compra</Link><br /><br />
                            <button className='addCart' onClick={handleVaciar}>Vaciar carrito</button>
                        </div> :
                        <h1>El carrito esta vacio</h1>

                }

            </div>


        </div >
    )
}
