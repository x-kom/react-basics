import React, { Component } from 'react';
import Title from '../../components/title/Title';
import ProductList from '../../components/productList/ProductList';
import './ListingPage.css';
import { mapContexts } from '../../context/withContext';
import { ProductsContext } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';

class ListingPage extends Component {
    render() {
        const { products, cart } = this.props;
        const { list } = products;

        return (
            <div className="ListingPage">
                <Title title="Lista produktów" infoText={`(${list.length})`} />
                <ProductList list={list} onAddToBasket={cart.add} />
            </div>
        );
    }
}

export default mapContexts({
    products: ProductsContext,
    cart: CartContext,
})(ListingPage);
