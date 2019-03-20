import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import './main.css';
import 'antd/dist/antd.css';
import AppRouter from '../router/AppRouter';
import Wrapper from '../wrapper/Wrapper';
import PageHeader from '../pageHeader/PageHeader';
import Container from '../../components/container/Container';
import { ProductsProvider } from '../../context/ProductsContext';
import { SearchProvider } from '../../context/SearchContext';
import { CartProvider } from '../../context/CartContext';

const Main = () => (
    <Wrapper>
        <ProductsProvider>
            <SearchProvider>
                <CartProvider>
                    <Container>
                        <AppRouter>
                            <PageHeader />
                        </AppRouter>
                    </Container>
                </CartProvider>
            </SearchProvider>
        </ProductsProvider>
    </Wrapper>
);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
