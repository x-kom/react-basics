import React, { Component } from 'react';
import Title from '../../components/title/Title';
import ProductList from '../../components/productList/ProductList';
import './ListingPage.css';
import { mapContexts } from '../../context/withContext';
import { ProductsContext } from '../../context/ProductsContext';

class ListingPage extends Component {
    render() {
        const { products } = this.props;
        const { list } = products;

        return (
            <div className="ListingPage">
                <Title title="Lista produktów" infoText={`(${list.length})`} />
                <ProductList list={list} onAddToBasket={() => alert('Dodano!')} />
            </div>
        );
    }
}

export default mapContexts({
    products: ProductsContext,
})(ListingPage);
