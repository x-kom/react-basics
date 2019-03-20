import React from 'react';
import { Button as AntButton } from 'antd';

const Button = ({
    children,
    ...props,
}) => (
    <AntButton htmlType="button" type="primary" {...props}>
        {children}
    </AntButton>
);

export default Button;
