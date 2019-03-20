import React from 'react';
import { Row, Col } from 'antd';
import { withRouter } from 'react-router-dom';
import XKomLogo from '../../components/xKomLogo/XKomLogo';
import Header from '../../components/header/Header';
import SearchInput from '../../components/searchInput/SearchInput';
import CartStatus from '../../components/cartStatus/CartStatus';
import Container from '../../components/container/Container';
import Link from '../../components/link/Link';

const PageHeader = ({ history }) => (
    <Header>
        <Container>
            <Row type='flex' justify='space-between' align='middle'>
                <Col
                    xs={{ order: 1, span: 10 }}
                    sm={{ order: 1, span: 5 }}
                    md={{ order: 1, span: 4 }}
                >
                    <Link to="/">
                        <XKomLogo />
                    </Link>
                </Col>
                <Col
                    xs={{ order: 3, span: 24 }}
                    sm={{ order: 2, span: 10 }}
                    md={{ order: 2, span: 13 }}
                >
                    <SearchInput onChange={undefined} value={undefined} onEnterPress={() => history.push('/')} />
                </Col>
                <Col
                    xs={{ order: 2, span: 12 }}
                    sm={{ order: 3, span: 6 }}
                    md={{ order: 3, span: 5 }}
                >
                    <Link to="/basket">
                        <CartStatus count={0} value={0} />
                    </Link>
                </Col>
            </Row>
        </Container>
    </Header>
);

export default withRouter(PageHeader);
