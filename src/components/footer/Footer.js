import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './Footer.css';
import footerLogo from '../../images/footer-img.webp';

function Footer() {
    return (
        <Container className='mt-4 mb-5 padder'>
            <Row>
                <Col>
                    <div className="footer-divider"></div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <footer>
                        <div className="ft-container">
                            <div className="ft-first">
                                <div>GET ON THE LIST</div>
                                <div className='email-input'>
                                    <input type="email" placeholder='Email*' />
                                    <div>
                                        <button><span className='email-btn-content'>&gt;</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className='ft-center'>
                                <img src={footerLogo} alt="Footer Logo" />
                            </div>
                            <div className='ft-last'>
                                <p>by ZombSquad 2021©</p>
                            </div>
                        </div>
                    </footer>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
