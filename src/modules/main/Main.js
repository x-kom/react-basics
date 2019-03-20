import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import React from 'react';
import './main.css';
import 'antd/dist/antd.css';
import AppRouter from '../router/AppRouter';
import Wrapper from '../wrapper/Wrapper';
import Container from '../../components/container/Container';

const Main = () => (
    <Wrapper>
        <Container>
            <AppRouter>
            </AppRouter>
        </Container>
    </Wrapper>
);

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
