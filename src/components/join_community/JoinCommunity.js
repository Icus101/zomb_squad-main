import React from 'react';
import './JoinCommunity.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import discord from '../../images/discord.webp';
import twitter from '../../images/twitter.webp';

function JoinCommunity() {
    return (
        <Container className='padder'>
            <Row>
                <Col>
                    <div className="jc-container">
                        <div data-aos="fade-right" className="jc-heder">
                            <div>Join our</div>
                            <div>community</div>
                        </div>
                        <div data-aos="zoom-in" className="jc-content">
                            <div className="jc-ci">
                                <div className='jc-i'>
                                    <div><img src={discord} alt="" /></div>
                                    <div><a href="https://discord.com/invite/zombsquad" target="_blank" rel="noreferrer"><div>JOIN DISCORD</div></a></div>
                                </div>
                                <div className='jc-i middle-line'>
                                    <div><img src={twitter} alt="" /></div>
                                    <div><a href="https://twitter.com/ZombSquadNFT" target="_blank" rel="noreferrer"><div>FOLLOW TWITTER</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default JoinCommunity
