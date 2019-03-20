import React from 'react';
import './ProductRow.css';
import priceFormatter from '../../helpers/priceFormatter';
import Icon from '../icon/Icon';
import Link from '../link/Link';

const ProductRow = ({
    id,
    photoUrl,
    title,
    count,
    price,
    onDelete,
    className = '',
}) => {
    const handleOnDelete = () => {
        if (onDelete) {
            onDelete(id);
        }
    };

    return (
        <div className={`ProductRow ${className}`}>
            <div className="ProductRow__Photo">
                <img src={photoUrl} alt="Zdjęcie produktu" className="ProductRow__Img" />
            </div>
            <Link to={`/product/${id}`} className="ProductRow__Title" title={title}>{title}</Link>
            <div className="ProductRow__Counter">{count}{' '}szt</div>
            <div className="ProductRow__Price">{priceFormatter(price)}</div>
            <div className="ProductRow__DeleteIcon" onClick={handleOnDelete}>
                <Icon type="delete" />
            </div>
        </div>
    );
};

export default ProductRow;
