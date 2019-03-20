import React, { Component } from 'react';
import './ProductPage.css';
import Title from '../../components/title/Title';
import ProductDetails from '../../components/productDetails/ProductDetails';
import NavigationLink from '../../components/navigationLink/NavigationLink';
import products from './../../data/products.json';

class ProductPage extends Component {
    render() {
        const {
            match: {
                params: { id },
            }
        } = this.props;
        const product = products.productList.find((product) => product.id === +id);

        return (
            <div className="ProductPage">
                {product && (
                    <>
                        <Title title={product.title} />
                        <ProductDetails
                            photoUrl={product.photoUrl}
                            price={product.price}
                            description={product.description}
                            rating={product.rating}
                            onAddToBasket={() => alert('Dodano!')}
                        />
                    </>
                )}
                <NavigationLink to="/" iconType="left">Wszystkie produkty</NavigationLink>
            </div>
        );
    }
}

export default ProductPage;
