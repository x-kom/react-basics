import React from 'react';
import AddToCart from '../addToCart/AddToCart';
import Rating from '../rating/Rating';
import './ProductDetails.css';

const ProductDetails = ({
    photoUrl,
    rating,
    description,
    price,
    onAddToBasket,
}) => (
    <div className="ProductDetails">
        <div className="ProductDetails__PhotoCol">
            <div className="ProductDetails__Photo">
                <img alt="Zdjęcie produktu" src={photoUrl} className="ProductDetails__Img" />
            </div>
        </div>
        <div className="ProductDetails__DetailsCol">
            <Rating value={rating} />
            <div className="ProductDetails__Description">
                {description}
            </div>
            <AddToCart price={price} addAction={onAddToBasket} />
        </div>
    </div>
);

export default ProductDetails;
