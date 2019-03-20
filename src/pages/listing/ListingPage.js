import React, { Component } from 'react';
import Title from '../../components/title/Title';
import ProductList from '../../components/productList/ProductList';
import './ListingPage.css';
import products from './../../data/products.json';

class ListingPage extends Component {
    render() {
        const list = products.productList;

        return (
            <div className="ListingPage">
                <Title title="Lista produktów" infoText={`(${list.length})`} />
                <ProductList list={list} onAddToBasket={() => alert('Dodano!')} />
            </div>
        );
    }
}

export default ListingPage;
