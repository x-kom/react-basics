import React from 'react';
import './ProductCard.css';
import Rating from '../rating/Rating';
import AddToCart from '../addToCart/AddToCart';
import Link from '../link/Link';

const ProductCard = ({
    id,
    photoUrl,
    title,
    rating,
    description,
    price,
    addAction,
    className = '',
}) => {
    const handleAddAction = () => {
        if (addAction) {
            addAction(id);
        }
    };

    return (
        <div className={className}>
            <div className="ProductCard">
                <div className="ProductCard__Photo">
                    <Link to={`/product/${id}`}>
                        <img className="ProductCard__Img" alt="Zdjęcie produktu" src={photoUrl} />
                    </Link>
                </div>
                <div className="ProductCard__Content">
                    <Link to={`/product/${id}`} className="ProductCard__Title">
                        {title}
                    </Link>
                    <Rating value={rating} />

                    <div className="ProductCard__BottomWrapper">
                        <div className="ProductCard__DescriptionCol">
                            {description ? `${description.substr(0, 100)}...` : ''}
                        </div>
                        <div className="ProductCard__ActionsCol">
                            <AddToCart price={price} addAction={handleAddAction} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
