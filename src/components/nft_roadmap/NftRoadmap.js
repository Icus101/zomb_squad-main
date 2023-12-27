import React from 'react';
import './NftRoadmap.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import nft1 from '../../images/nft-1.webp'
import nft2 from '../../images/nft-2.webp'
import nft3 from '../../images/nft-3.webp'
import nft4 from '../../images/nft-4.webp'
import nft5 from '../../images/nft-5.webp'
import nft6 from '../../images/nft-6.webp'
import nft7 from '../../images/nft-7.webp'
import nft8 from '../../images/nft-8.webp'

function NftRoadmap() {
    return (
        <Container className='my-5 pt-5 padder'>
            <Row>
                <Col lg={12}>
                    <div className="about-zomb-left mt-5">
                        <div data-aos="fade-right" className="top-txt">
                            <div>NFT</div>
                            <div className='abt-zomb'>ROADMAP</div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="nft-r-container">
                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft1} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>1.</span> <span className='nr-g'>Launch NFT sale via Solana ecosystem</span></div>
                                    <div>Introducing 10,000 loveable, unique ZombSquad zombies! Zombies are collectible and can be used in the
                                        ZombSquad gaming universe.</div>
                                </div>
                            </div>
                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft2} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>2.</span> <span className='nr-g'>Integrate with marketplaces for secondary sales</span></div>
                                    <div>Our objective is to be listed on DigitalEyes and other marketplaces momentarily after the initial minting of
                                        ZombSquad. This will allow all NFT holders to trade their characters whilst we build out the official ZombSquad Marketplace.</div>
                                </div>
                            </div>

                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft3} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>3.</span> <span className='nr-g'>Token airdrop to all ZombSquad holders of the native ecosystem token “ZOMB”</span></div>
                                    <div>This token will be the only currency of the ZombSquad Marketplace that will feature staking mechanisms and burn functions</div>
                                </div>
                            </div>

                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft4} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>4.</span> <span className='nr-g'>NFT item airdrop to all ZombSquad NFT Holders</span></div>
                                    <div>In-game NFT airdrop to every Zomb owner corresponding to their Zomb’s unique items!</div>
                                </div>
                            </div>

                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft5} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>5.</span> <span className='nr-g'>Community giveaways and events via the ZombSquad Treasury</span></div>
                                    <div>These include, but are not limited to, token giveaways, limited edition item drops and much more! These giveaways are to
                                        incentivize growth of the ZombSquad ecosystem and to benefit all NFT holders.</div>
                                </div>
                            </div>

                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft6} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>6.</span> <span className='nr-g'>Layout foundation for Game</span></div>
                                    <div>Introduce the game mechanics roadmap! The ZombSquad game will be a social empire building, player vs player game.
                                        Players will build out their ZombSquad base with unique defenses and structures and take on other players with their ZombSquad NFT army.</div>
                                </div>
                            </div>

                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft7} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>7.</span> <span className='nr-g'>Introduce ZombSquad Marketplace! </span></div>
                                    <div>ZOMB tokens will be used to purchase in-game items - where tokens are permanently burnt and redistributed to the community.</div>
                                </div>
                            </div>

                            <div className="nr-row">
                                <div className="nr-col-1">
                                    <img src={nft8} alt="" />
                                </div>
                                <div className="nr-col-2">
                                    <div><span className='nr-w'>8.</span> <span className='nr-g'>To be announced </span></div>
                                    <div>To be announced</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default NftRoadmap
