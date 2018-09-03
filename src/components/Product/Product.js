import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleAdd = () => {
        const { id, addToCart } = this.props;
            addToCart(id);
    }
    handleRemove = () => {
        const { id, removeFromCart } = this.props;
            removeFromCart(id);
    }

    render() {
        const { quantity,name, price, currency, image} = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product" />
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} {currency}</div>
                    <br/>
                    <div className="product__price">Quantity {quantity}</div>
                    <div className="product__button-wrap">
                        <button className="btn btn-primary" onClick={this.handleAdd}>Add to Cart</button>
                        <button className="btn btn-primary" onClick={this.handleRemove}>Remove from Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    quantity:PropTypes.number,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
