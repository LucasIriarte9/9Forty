import { createContext, useEffect } from "react";
import { useState } from 'react';

const CartContext = createContext();

export default CartContext;

const carritoInicial= JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const addToCart = (item, count) => {
        const itemAgregado = { ...item, count };

        const nuevoCarrito = [...carrito];
        let estaEnelCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnelCarrito) {
            estaEnelCarrito.count = estaEnelCarrito.count + count;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.count, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.count, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito]);

    return (
    <CartContext.Provider value={{ carrito, addToCart, cantidadEnCarrito ,precioTotal,vaciarCarrito}}>
        {children}
    </CartContext.Provider>)
}