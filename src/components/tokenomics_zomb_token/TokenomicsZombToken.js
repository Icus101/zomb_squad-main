import './TokenomicsZombToken.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import tokenomincs1 from '../../images/zombtoken1.png';
import tokenomincs2 from '../../images/zombtoken2.png';
function TokenomicsZombToken() {
    return (
        <Container className='mt-5 padder'>
            <Row>
                <Col lg={7}>
                    <div className="about-zomb-left">
                        <div className="left-content">
                            <div data-aos="fade-left" className="top-txt">
                                <div>TOKENOMICS</div>
                                <div className='abt-zomb'>ZOMB TOKEN</div>
                            </div>
                            <div data-aos="fade-right" className="after-top-txt">
                                <div>
                                    <p>
                                        The $ZOMB token has been purposely designed in a way that it is hyper-deflationary.
                                    </p>
                                </div>
                                <br />
                                <div>
                                    <p>
                                        $ZOMB will be the exclusive and only currency that can used on the ZombSquad Marketplace - of
                                        which 80% of all proceeds will be permanently burnt and removed from the $ZOMB circulation,
                                        with the remaining 20% to be redistributed back to the community.
                                    </p>
                                </div>
                                <br />
                                <div>
                                    <p>TOTAL SUPPLY : <span className='own-zomb-green'>33.33M ZOMB TOKEN</span></p>
                                </div>
                                <br />
                                <div>
                                    <p>There will be a 5% royalty on all ZombSquad item and Zomb NFTs that are sold on secondary markets,
                                        of which 100% of proceeds will be used to buy back $ZOMB tokens on the open market. These tokens will
                                        be permanently burnt and removed from the $ZOMB circulation.</p>
                                </div>
                                <br />
                                <div>
                                    <p>100% of all $ZOMB used in the ZombSquad Hunting Grounds mini-game will be permanently burnt and removed from circulation.</p>
                                </div>
                                <br />
                                <div>
                                    <p>Once the official ZombSquad Main Game has launched, 100% of the Solana generated via the in-game
                                        activity will be used to buy back $ZOMB on the open market and be redistributed to the community.</p>
                                </div>
                                <br />
                                <div>
                                    <p>Through these mechanisms, we envision a hyper-deflationary pressure on the $ZOMB supply,
                                        thus making $ZOMB tokens increasingly scarce and valuable</p>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="token-r">
                        <div className="token-r-1">
                            <img src={tokenomincs1} alt="" />
                        </div>
                        <div className="token-r-2">
                            <img src={tokenomincs2} alt="" />

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default TokenomicsZombToken;
