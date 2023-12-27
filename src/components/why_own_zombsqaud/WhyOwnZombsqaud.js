import React, { useEffect, useState } from 'react';
import './WhyOwnZombsqaud.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AOS from 'aos';
import 'aos/dist/aos.css';
import oz11 from '../../images/own-zomb-1-1.webp';
import oz12 from '../../images/own-zomb-1-2.webp';
import oz13 from '../../images/own-zomb-1-3.webp';
import f1 from '../../images/f1.webp';
import f2 from '../../images/f2.webp';
import f3 from '../../images/f3.webp';
import f4 from '../../images/f4.webp';
import g1 from '../../images/g1.webp';
import g2 from '../../images/g2.webp';
import g3 from '../../images/g3.webp';
import g4 from '../../images/g4.webp';
import h1 from '../../images/h1.webp';
import h2 from '../../images/h2.webp';
import h3 from '../../images/h3.webp';
import h4 from '../../images/h4.webp';



const wozImages = [oz11, oz12, oz13];
// const firstAnimation = [
//     {
//         img: f1,
//         white: 'monocle',
//         green: 'intelligence +3'
//     },
//     {
//         img: f2,
//         white: 'kitsune mask',
//         green: 'stealth +4'
//     },
//     {
//         img: f3,
//         white: 'astronaut suit',
//         green: 'defence +3'
//     },
//     {
//         img: f4,
//         white: 'bixing glove',
//         green: 'attack +4'
//     }
// ];

// const secondAnimation = [
//     {
//         img: g1,
//         white: 'monocle',
//         green: 'intelligence +3'
//     },
//     {
//         img: g2,
//         white: 'kitsune mask',
//         green: 'stealth +4'
//     },
//     {
//         img: g3,
//         white: 'astronaut suit',
//         green: 'defence +3'
//     },
//     {
//         img: g4,
//         white: 'bixing glove',
//         green: 'attack +4'
//     }
// ];

// const thirdAnimation = [
//     {
//         img: h1,
//         white: 'monocle',
//         green: 'intelligence +3'
//     },
//     {
//         img: h2,
//         white: 'kitsune mask',
//         green: 'stealth +4'
//     },
//     {
//         img: h3,
//         white: 'astronaut suit',
//         green: 'defence +3'
//     },
//     {
//         img: h4,
//         white: 'bixing glove',
//         green: 'attack +4'
//     }
// ];

const animation = [[
    {
        img: f1,
        white: 'monocle',
        green: 'intelligence +3'
    },
    {
        img: f2,
        white: 'kitsune mask',
        green: 'stealth +4'
    },
    {
        img: f3,
        white: 'astronaut suit',
        green: 'defence +3'
    },
    {
        img: f4,
        white: 'bixing glove',
        green: 'attack +4'
    }
],
[
    {
        img: g1,
        white: 'sword',
        green: 'attack +4'
    },
    {
        img: g2,
        white: 'ninja mask',
        green: 'stealth +3'
    },
    {
        img: g3,
        white: 'military suit',
        green: 'defence +3'
    },
    {
        img: g4,
        white: 'robotic eye',
        green: 'accuracy +5'
    }
],
[
    {
        img: h1,
        white: 'monocle',
        green: 'intelligence +3'
    },
    {
        img: h2,
        white: 'astronaut helmet',
        green: 'defense +3'
    },
    {
        img: h3,
        white: 'chainsaw',
        green: 'attack +5'
    },
    {
        img: h4,
        white: 'nfl shoulder pad',
        green: 'defence +5'
    }
]]

function WhyOwnZombsqaud() {
    const [currentImage, setCurrentImage] = useState(wozImages[0]);
    const [currentImage2, setCurrentImage2] = useState(animation[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(wozImages[Math.floor(Math.random() * wozImages.length)]);
        }, 1400)

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage2(animation[Math.floor(Math.random() * wozImages.length)]);
        }, 1500)

        return () => clearInterval(intervalId);
    }, [])

    useEffect(() => {
        AOS.init({ duration: 600 });
    }, [])
    return (
        <Container className='padder'>
            <Row className='py-5'>
                <Col lg={7}>
                    <div className="about-zomb-left">
                        <div className="left-content">
                            <div data-aos="fade-right" className="top-txt">
                                <div>WHY OWN A</div>
                                <div className='abt-zomb'>ZOMBSQUAD</div>
                            </div>
                            <div className="after-top-txt">
                                <div data-aos="fade-right">
                                    <p>
                                        By purchasing a Zomb, you are gaining access to numerous benefits
                                        and offerings that stretch far beyond just a simple avatar or a piece of provably-rare art.
                                    </p>
                                </div>
                                <br />
                                <div data-aos="fade-right">
                                    <p>ZombSquad NFT zombies will be equipped with unique traits and items that are broken down into
                                        different categories of rarity and <span className='own-zomb-green'>Zomb Genotypes</span>, providing different stats and abilities for
                                        your own in-game zombie!</p>
                                </div>
                                <br />
                                <div data-aos="fade-right">
                                    <p>Not only will you receive several item NFTs for your Zomb, but by holding a Zomb, you will be eligible
                                        for our <span className='own-zomb-white'>ZOMB token airdrop</span> - where each Zomb held during our snapshot will qualify for 5,000 tokens!</p>
                                </div>
                                <br />
                                <div data-aos="fade-right">
                                    <p>ZOMB will be the exclusive currency of our <span className='own-zomb-green'>ZombSquad Marketplace</span> and is designed in such
                                        a way that it is deflationary and will provide many incentives for token stakers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="about-zomb-right">
                        <div className="right-content">
                            <div className="woz-img-row-1">
                                <div className='wir1'>
                                    <img src={currentImage} alt="" />
                                </div>
                            </div>
                            <div className="woz-img-row-2">
                                <div className='wir2'>
                                    <img src={currentImage2[0].img} alt="" />
                                    <div className='wir-w'>{currentImage2[0].white}</div>
                                    <div className='wir-g'>{currentImage2[0].green}</div>
                                </div>
                                <div className='wir2'>
                                    <img src={currentImage2[1].img} alt="" />
                                    <div className='wir-w'>{currentImage2[1].white}</div>
                                    <div className='wir-g'>{currentImage2[2].green}</div>
                                </div>
                            </div>
                            <div className="woz-img-row-3">
                                <div className='wir2'>
                                    <img src={currentImage2[2].img} alt="" />
                                    <div className='wir-w'>{currentImage2[2].white}</div>
                                    <div className='wir-g'>{currentImage2[2].green}</div>
                                </div>
                                <div className='wir2'>
                                    <img src={currentImage2[3].img} alt="" />
                                    <div className='wir-w'>{currentImage2[3].white}</div>
                                    <div className='wir-g'>{currentImage2[3].green}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default WhyOwnZombsqaud;
