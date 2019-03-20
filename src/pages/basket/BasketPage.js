import React, { Component } from 'react';
import './BasketPage.css';
import Title from '../../components/title/Title';
import SummaryBox from '../../components/summaryBox/SummaryBox';
import BasketProductList from '../../components/basketProductList/BasketProductList';
import { mapContexts } from '../../context/withContext';
import { ProductsContext } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';

class BasketPage extends Component {
    render() {
        const {
            products,
            cart,
        } = this.props;

        const list = products.getByIds(cart.productIds).map((product) => {
            product.count = cart.productIds[product.id];
            return product;
        });

        return (
            <div className="BasketPage">
                <Title title="Twój koszyk" />
                <BasketProductList list={list} onRemoveFromBasket={cart.remove} />
                <SummaryBox className="BasketPage__SummaryBox" price={products.sumPrice(cart.productIds)} />
            </div>
        );
    }
}

export default mapContexts({
    products: ProductsContext,
    cart: CartContext,
})(BasketPage);
