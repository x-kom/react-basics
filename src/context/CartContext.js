import React from 'react';

export const CartContext = React.createContext({});

export class CartProvider extends React.Component {
    state = {
        productIds: {},

        count: () => (
            Object.keys(this.state.productIds).reduce((sum, key) => sum + this.state.productIds[key], 0)
        ),

        has: (searchId) => (
            this.state.productIds[searchId] && this.state.productIds[searchId] > 0
        ),

        add: (productId) => {
            this.setState((prevState) => {
                const count = (prevState.has(productId)) ? prevState.productIds[productId] + 1 : 1;

                return {
                    productIds: {
                        ...prevState.productIds,
                        [productId]: count,
                    }
                };
            });
        },

        remove: (removeId) => {
            this.setState((prevState) => ({
                productIds: {
                    ...prevState.productIds,
                    [removeId]: 0,
                }
            }));
        },
    };

    render() {
        const { children } = this.props;
        return (
            <CartContext.Provider value={this.state}>
                {children}
            </CartContext.Provider>
        );
    }
}
