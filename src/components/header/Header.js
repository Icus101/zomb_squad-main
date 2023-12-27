import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../../images/logo.webp'

function Header() {
    return (
        <Container className='padder'>
            <Row>
                <Col lg={12}>
                    <div className="header-wrapper">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="font-logo">
                            <h2>
                                <a href="https://www.zombsquad.io" target='_self' rel='referer'>
                                    <span className='font-left'>
                                        ZOMB
                                    </span>
                                    <span className='font-right'>
                                        SQUAD
                                    </span>
                                </a>
                            </h2>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
