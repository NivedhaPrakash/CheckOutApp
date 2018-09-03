import React,{Component} from 'react';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

import cartReducer from '../ducks/cart';
import productsReducer from '../ducks/products';
import productsData from '../data/products';
import Checkout from './Checkout';

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: productsData // initial store values
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

class Shopping extends Component{
render(){
    return(
    <Provider store={store}>
        <Checkout />
    </Provider>
    );
  }
}

export default Shopping;