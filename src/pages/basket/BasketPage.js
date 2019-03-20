import React, { Component } from 'react';
import './BasketPage.css';
import Title from '../../components/title/Title';

class BasketPage extends Component {
    render() {
        return (
            <div className="BasketPage">
                <Title title="Twój koszyk" />
            </div>
        );
    }
}

export default BasketPage;
