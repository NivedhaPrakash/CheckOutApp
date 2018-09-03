import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, quantity, total, currency, removeFromCart }) => {
    return (
        <div>
            <h3><b>Cart</b></h3>
            <div>
                <div>
                    <div>
                        {items.length > 0 && (
                            <div className="cart__body"><h3><b>
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} 
                                    onClick={() => removeFromCart(item.id)} />
                                ))}
                            </b></h3></div>
                        )}
                        {items.length === 0 && (
                            <div><h3><b>No Item In Your Cart</b></h3></div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                        <div className="cart__total">Quantity: {quantity}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    quantity: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
