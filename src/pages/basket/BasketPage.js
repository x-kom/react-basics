import React, { Component } from 'react';
import './BasketPage.css';
import Title from '../../components/title/Title';
import SummaryBox from '../../components/summaryBox/SummaryBox';
import BasketProductList from '../../components/basketProductList/BasketProductList';
import products from './../../data/products.json';

class BasketPage extends Component {
    render() {
        const list = products.productList.map((product) => {
            product.count = 1;
            return product;
        });

        return (
            <div className="BasketPage">
                <Title title="Twój koszyk" />
                <BasketProductList list={list} onRemoveFromBasket={() => alert('Usunięto!')} />
                <SummaryBox className="BasketPage__SummaryBox" price={0} />
            </div>
        );
    }
}

export default BasketPage;
