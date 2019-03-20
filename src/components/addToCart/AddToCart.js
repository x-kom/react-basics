import React from 'react';
import priceFormatter from '../../helpers/priceFormatter';
import Button from '../button/Button';
import Icon from '../icon/Icon';
import './AddToCart.css';

const AddToCart = ({
    price,
    addAction,
}) => (
    <div className="AddToCart">
        <div className="AddToCart__Price">
            {priceFormatter(price)}
        </div>
        <Button onClick={addAction}>
            Do koszyka{' '}<Icon type="shopping-cart" />
        </Button>
    </div>
);

export default AddToCart;
