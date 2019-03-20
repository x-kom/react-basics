import React from 'react';
import { Rate as AntdRate } from 'antd';
import './Rating.css';
import ratingFormatter from '../../helpers/ratingFormatter';

const Rating = ({
    value,
    onChange,
}) => (
    <div className="Rating">
        <AntdRate
            defaultValue={value}
            disabled={true}
            onChange={onChange}
        />
        {ratingFormatter(value)}
    </div>
);

export default Rating;
