import React, { Component } from 'react';
import ProductList from '../containers/ProductList';
import Cart from '../containers/Cart';
import './Image.css';

class Checkout extends Component {
    render() {
        return (
            <div className="jumbotron container header">
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;