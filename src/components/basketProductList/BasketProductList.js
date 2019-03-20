import React, { Component } from 'react';
import ProductRow from '../productRow/ProductRow';
import './BasketProductList.css';

class BasketProductList extends Component {
    render() {
        const {
            list,
            onRemoveFromBasket,
        } = this.props;

        const isListNotEmpty = list && list.length > 0;

        return (
            <>
                {isListNotEmpty && list.map((product) => (
                    <ProductRow
                        className="BasketProductList__Item"
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        photoUrl={product.photoUrl}
                        price={product.price}
                        count={product.count}
                        onDelete={onRemoveFromBasket}
                    />
                ))}
                {!isListNotEmpty && (
                    <div className="BasketProductList__EmptyMessage">
                        Twój koszyk jest pusty ;(
                    </div>
                )}
            </>
        );
    }
}

export default BasketProductList;
