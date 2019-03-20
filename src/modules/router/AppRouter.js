import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListingPage from '../../pages/listing/ListingPage';
import ProductPage from '../../pages/product/ProductPage';
import BasketPage from '../../pages/basket/BasketPage';
import NoMatch from '../../components/noMatch/NoMatch';

const AppRouter = ({ children }) => (
    <BrowserRouter>
        <div>
            {children}
            <Switch>
                <Route path="/" exact component={ListingPage} />
                <Route path="/product/:id(\d+)" component={ProductPage} />
                <Route path="/basket" component={BasketPage} />
                <Route component={NoMatch}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
