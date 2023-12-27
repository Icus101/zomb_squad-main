import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './ZombsquadMarketplace.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import zm1 from '../../images/zm1-1.webp';
import zm2 from '../../images/zm1-2.webp';
import zm3 from '../../images/zm1-3.webp';
import zm4 from '../../images/zm1-4.webp';
import zm21 from '../../images/zm2-1.webp';
import zm22 from '../../images/zm2-2.webp';
import zm23 from '../../images/zm2-3.webp';
import zm24 from '../../images/zm2-4.webp';
import zm31 from '../../images/zm3-1.webp';
import zm32 from '../../images/zm3-2.webp';
import zm33 from '../../images/zm3-3.webp';
import zm34 from '../../images/zm3-4.webp';
import zm41 from '../../images/zm4-1.webp';
import zm42 from '../../images/zm4-2.webp';
import zm43 from '../../images/zm4-3.webp';
import zm44 from '../../images/zm4-4.webp';


const animation = [[
    {
        title: 'Outfits',
    },
    {
        img: zm1,
        white: 'monocle',
        green: 'intelligence +3'
    },
    {
        img: zm2,
        white: 'kitsune mask',
        green: 'stealth +4'
    },
    {
        img: zm3,
        white: 'astronaut suit',
        green: 'defence +3'
    },
    {
        img: zm4,
        white: 'bixing glove',
        green: 'attack +4'
    }
],
[
    {
        title: 'Head Items',
    },
    {
        img: zm21,
        white: 'sword',
        green: 'attack +4'
    },
    {
        img: zm22,
        white: 'ninja mask',
        green: 'stealth +3'
    },
    {
        img: zm23,
        white: 'military suit',
        green: 'defence +3'
    },
    {
        img: zm24,
        white: 'robotic eye',
        green: 'accuracy +5'
    }
],
[
    {
        title: 'Hand Items',
    },
    {
        img: zm31,
        white: 'monocle',
        green: 'intelligence +3'
    },
    {
        img: zm32,
        white: 'astronaut helmet',
        green: 'defense +3'
    },
    {
        img: zm33,
        white: 'chainsaw',
        green: 'attack +5'
    },
    {
        img: zm34,
        white: 'nfl shoulder pad',
        green: 'defence +5'
    }
],
[
    {
        title: 'Eye Items',
    },
    {
        img: zm41,
        white: 'monocle',
        green: 'intelligence +3'
    },
    {
        img: zm42,
        white: 'astronaut helmet',
        green: 'defense +3'
    },
    {
        img: zm43,
        white: 'chainsaw',
        green: 'attack +5'
    },
    {
        img: zm44,
        white: 'nfl shoulder pad',
        green: 'defence +5'
    }
]]

function ZombsquadMarketplace() {
    const [currentImage, setCurrentImage] = useState(animation[0]);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(animation[Math.floor(Math.random() * 4)]);
        }, 1500)

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, [])
    return (
        <section className='zm-bg'>
            <Container className='padder'>
                <Row>
                    <Col lg={12}>
                        <div className="zombsquad-market">
                            <div data-aos="fade-right" className="top-txt">
                                <div>ZOMBSQUAD</div>
                                <div className='abt-zomb'>MARKETPLACE</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className=''>
                    <Col lg={7}>
                        <div className="zm-about-zomb-left">
                            <div className="zm-left-content">
                                <div className="zm-after-top-txt">
                                    <div data-aos="fade-right">
                                        <p>
                                            Purchase in-game items exclusively with the ZOMB token via the ZombSquad Marketplace.
                                        </p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>These items can be used to complete Genotypes and vary from Zomb weapons, armor,
                                            structures, defenses and so much more!

                                            Once purchased, Marketplace NFTs can then be traded on secondary markets and can be used in the ZombSquad game.</p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>100% of all proceeds from the ZombSquad Marketplace will flow back to our community
                                            via the burn mechanism as well as staking redistribution rewards..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="about-zomb-right">
                            <div className="right-content">
                                <div className="d-flex flex-row align-items-center justify-content-center w-100">
                                    <div className='zmh1'>
                                        <h5>{currentImage[0].title}</h5>
                                    </div>
                                </div>
                                <div className="woz-img-row-2">
                                    <div className='wir2'>
                                        <img className='mb-3' src={currentImage[1].img} alt="" />
                                        <div className='wir-w'>{currentImage[1].white}</div>
                                        <div className='wir-g'>{currentImage[1].green}</div>
                                    </div>
                                    <div className='wir2'>
                                        <img className='mb-3' src={currentImage[2].img} alt="" />
                                        <div className='wir-w'>{currentImage[2].white}</div>
                                        <div className='wir-g'>{currentImage[2].green}</div>
                                    </div>
                                </div>
                                <div className="woz-img-row-3">
                                    <div className='wir2'>
                                        <img class='mb-3' src={currentImage[3].img} alt="" />
                                        <div className='wir-w'>{currentImage[3].white}</div>
                                        <div className='wir-g'>{currentImage[3].green}</div>
                                    </div>
                                    <div className='wir2'>
                                        <img class='mb-3' src={currentImage[4].img} alt="" />
                                        <div className='wir-w'>{currentImage[4].white}</div>
                                        <div className='wir-g'>{currentImage[4].green}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ZombsquadMarketplace
