import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './OurVision.css';
import ourVisionImg from '../../images/our-vision.gif';

function OurVision() {
    return (
        <Container className='mt-5 padder'>
            <Row>
                <Col lg={7}>
                    <div className="about-zomb-left">
                        <div className="left-content">
                            <div data-aos="fade-left" className="top-txt">
                                <div>OUR</div>
                                <div className='abt-zomb'>VISION</div>
                            </div>
                            <div className="after-top-txt">
                                <div>
                                    <p>
                                        Welcome to ZombSquad! We are a team of passionate gaming and blockchain enthusiasts who
                                        want to reinvigorate the love for gaming via the Solana blockchain.
                                    </p>
                                </div>
                                <br />
                                <div>
                                    <p>Our goal is to establish a real-time multiplayer strategy game comparable to titles such as
                                        Clash of Clans and Plants vs Zombies, and bring this
                                        experience to the Solana ecosystem in a way that rewards players for their efforts.</p>
                                </div>
                                <br />
                                <div>
                                    <p>We envision an interactive and captivating core loop that will make our game fun and engaging,
                                        whilst releasing new and exciting content such as game modes, community activities and much more!</p>
                                </div>
                                <br />
                                <div>
                                    <p>Preceding the game launch we wish to give back to our community predominantly through the
                                        <span className='own-zomb-green'> ZOMB token</span> in-game items and exclusive NFT drops.</p>
                                </div>
                                <br />
                                <div>
                                    <p>We look forward to building an engaged, retentive and long-lasting relationship
                                        with our players and hope to see you in the ZombSquad discord!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="ov-r">
                        <div className="ov-r-1">
                            <img src={ourVisionImg} alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default OurVision
