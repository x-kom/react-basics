import React from 'react';
import { Icon as AntdIcon } from 'antd';

const Icon = ({type, ...props}) => (
    <AntdIcon type={type} {...props} />
);

export default Icon;
