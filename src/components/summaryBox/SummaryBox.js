import React from 'react';
import './SummaryBox.css';
import priceFormatter from '../../helpers/priceFormatter';

const SummaryBox = ({
    price,
    className = '',
}) => (
    <div className={`SummaryBox ${className}`}>
        RAZEM: <span className="SummaryBox__Price">{priceFormatter(price)}</span>
    </div>
);

export default SummaryBox;
