import React, { useContext, useState } from 'react'
import CartContext from '../../context/cart-context/cartContext';
import { useForm } from 'react-hook-form';
import "./checkout.css";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const enviar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    }
    console.log(pedido);
    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    })
  }

  if(pedidoId){
    return (
      <div className='cont-form'>
        <h1>Gracias por tu compra</h1>
        <p>Tu numero de pedido es {pedidoId}</p>
      </div>
    )
  }

  return (
    <div className='cont-form'>
      <h1>Datos de envio</h1>
      <form className='conteiner-form' onSubmit={handleSubmit(enviar)}>
        <input type="text" placeholder='Ingresa tu nombre *' {...register("nombre")} required />
        <input type="email" placeholder='Ingresa tu e-mail *' {...register("email")}  required/>
        <input type="phone" placeholder='Ingresa tu telefono *' {...register("telefono")} required/>
        <button className='addCart' type='submit'>Finalizar compra</button>
        <p>Campos con * son obligatorios</p>
      </form>

    </div>
  )
}

export default Checkout;