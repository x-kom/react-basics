import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const AppRouter = ({ children }) => (
    <BrowserRouter>
        <div>
            {children}
        </div>
    </BrowserRouter>
);

export default AppRouter;
