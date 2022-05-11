import React from 'react'

export const CartItem = ({data,delFromCart,clearCart}) => {
  
  let {id, name, price,num,quantity} = data;
  
  return (
    <div style={{borderBottom:"thin solid gray"}}>
       <h4>Producto: {name}</h4> 
       <h5>Precio: {price}.00 x {quantity} = ${price * quantity}.00</h5>
       <button onClick={id}>Eliminar</button>
       <button onClick={clearCart}>Eliminar Todos</button>

    </div>
  )
}
