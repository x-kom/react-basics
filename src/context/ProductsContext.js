import React from 'react';
import products from './../data/products';

export const ProductsContext = React.createContext({});

export class ProductsProvider extends React.Component {
    state = {
        list: [...products.productList],

        find: (searchText) => (
            this.state.list.filter((product) => {
                return (
                    String(product.id) === searchText
                    || product.title.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) !== -1
                    || product.description.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) !== -1
                );
            })
        ),

        set: (list) => {
            this.setState({ list });
        },

        sumPrice: (productIds) => {
            return this.state.getByIds(productIds)
                .reduce((sum, product) => sum + (product.price * productIds[product.id]), 0);
        },

        getByIds: (productIds) => {
            return this.state.list
                .filter((product) => productIds[product.id] > 0);
        },

        getById: (id) => {
            return this.state.list.find((product) => product.id === id);
        },
    };

    render() {
        const { children } = this.props;

        return (
            <ProductsContext.Provider value={this.state}>
                {children}
            </ProductsContext.Provider>
        );
    }
}
