import React from 'react';
import './CartStatus.css';
import priceFormatter from '../../helpers/priceFormatter';
import Icon from '../icon/Icon';

const CartStatus = ({ value, count = 0 }) => (
    <span className="CartStatus">
        <Icon className="CartStatus__Icon" type="shopping-cart" />
        {
            count ? (
                <>
                    <span className="CartStatus__Value">{' '}{priceFormatter(value)}</span>
                    <span className="CartStatus__Count">{' '}({count})</span>
                </>
            ) : (
                <span className="CartStatus__Message">Koszyk jest pusty</span>
            )
        }
    </span>
);

export default CartStatus;
