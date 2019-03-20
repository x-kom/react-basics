import React, { Component } from 'react';
import Title from '../../components/title/Title';
import ProductList from '../../components/productList/ProductList';
import './ListingPage.css';
import { mapContexts } from '../../context/withContext';
import { ProductsContext } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';
import { SearchContext } from '../../context/SearchContext';

class ListingPage extends Component {
    render() {
        const { products, cart, search } = this.props;
        const list = products.find(search.searchText);

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
    search: SearchContext,
})(ListingPage);
