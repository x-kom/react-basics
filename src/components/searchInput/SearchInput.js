import React from 'react';
import { Input, Icon } from 'antd';

const SearchInput = ({ onChange, onEnterPress, value }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onEnterPress();
        }
    };

    return (
        <Input
            placeholder='Wpisz czego szukasz...'
            suffix={
                <Icon type="search" />
            }
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
        />
    );
};

export default SearchInput;
