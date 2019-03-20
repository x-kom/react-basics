import React, { Component } from 'react';
import ProductCard from '../productCard/ProductCard';
import './ProductList.css';

class ProductList extends Component {
    render() {
        const {
            list,
            onAddToBasket,
        } = this.props;

        const isListNotEmpty = list && list.length > 0;

        return (
            <div className="ProductList">
                {isListNotEmpty && list.map((product) => (
                    <ProductCard
                        className="ProductList__Element"
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        photoUrl={product.photoUrl}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                        addAction={onAddToBasket}
                    />
                ))}
            </div>
        );
    }
}

export default ProductList;
