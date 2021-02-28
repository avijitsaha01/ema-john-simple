import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    return (
        <div>
            <h5>Order summary</h5>
            <p>Ordered Items: {cart.length}</p>
            <p>Total Price: {total}</p>
        </div>
    );
};

export default Cart;