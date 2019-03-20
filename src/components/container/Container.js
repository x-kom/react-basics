import React from 'react';
import { Layout } from 'antd';
import './Container.css';

const Container = ({ children }) => (
    <Layout.Content className="Container">
        {children}
    </Layout.Content>
);

export default Container;
