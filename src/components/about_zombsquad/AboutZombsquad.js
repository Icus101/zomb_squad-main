import React, { useEffect } from 'react';
import './AboutZombsquad.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import aboutZomb1 from '../../images/about-zomb-1.webp';
import aboutZomb2 from '../../images/about-zomb-2.webp';
import aboutZomb3 from '../../images/about-zomb-3.webp';
import aboutZomb4 from '../../images/about-zomb-4.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutZombsquad() {
    useEffect(() => {
        AOS.init({ duration: 400 });
    }, [])

    return (
        <Container className='padder'>
            <Row className='py-5'>
                <Col lg={7}>
                    <div className="about-zomb-left">
                        <div className="left-content">
                            <div data-aos="fade-left" className="top-txt">
                                <div>About</div>
                                <div className='abt-zomb'>ZOMBSQUAD</div>
                            </div>
                            <div className="after-top-txt">
                                <div>
                                    <p>
                                        ZombSquad is a high-quality digitized collection of 10,000 loveable
                                        and algorithmically generated zombie NFTs roaming around on the Solana
                                        blockchain. Your Zomb NFT will possess unique traits and attributes
                                        ranging from common to legendary rarity
                                    </p>
                                </div>
                                <br />
                                <div>
                                    After the initial mint, the only way to obtain a Zomb is through the
                                    various Solana NFT marketplaces as we will never release more Zombs!
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="about-zomb-right">
                        <div className="right-content">
                            <div className="img-row-1">
                                <div className="img-1">
                                    <img src={aboutZomb1} alt="" />
                                </div>
                                <div className="img-2">
                                    <img src={aboutZomb2} alt="" />
                                </div>
                            </div>
                            <div className="img-row-2">
                                <div className="img-3">
                                    <img src={aboutZomb3} alt="" />
                                </div>
                                <div className="img-4">
                                    <img src={aboutZomb4} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <div className="divider">

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutZombsquad;
