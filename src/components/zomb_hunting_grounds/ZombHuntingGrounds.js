import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './ZombHuntingGrounds.css';

function ZombHuntingGrounds() {
    return (
        <section className='zhg-bg'>
            <Container className='padder'>
                <Row>
                    <Col lg={12}>
                        <div className="zombsquad-market">
                            <div data-aos="fade-right" className="top-txt">
                                <div>ZOMBSQUAD</div>
                                <div className='abt-zomb'>HUNTING GROUNDS</div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className=''>
                    <Col lg={7}>
                        <div className="zm-about-zomb-left">
                            <div className="zm-left-content">
                                <div className="after-top-txt">
                                    <div data-aos="fade-right">
                                        <p>
                                            What good would Zombs be, if they didn’t infect those
                                            pesty humans? Take your ZombSquad out to hunt for new pray in the ZombSquad Hunting Grounds!
                                        </p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>In this mini-game, burn $zomb to bring your ZombSquad to the Hunting Grounds and infect new
                                            zombies to join your ranks! Remember, the stronger your Squad, the stronger the Zombs will be that you will be able to recruit.</p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>In the Hunting Grounds, you will have the chance to burn $zomb in order to infect new Zombs of different tiers and strength levels.</p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>If you have a successful hunt, you will have the option to mint a new Zomb with it’s own unique items to join your ZombSquad! Zomb
                                            types will be in a tier system, with the original minted Genesis being the strongest.</p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>Total squad strength will be used to determine the success rate of your hunts, the more strength your ZombSquad has,
                                            the more successful you will be during your hunt, and the higher the chance of infecting will be.</p>
                                    </div>
                                    <br />
                                    <div data-aos="fade-right">
                                        <p>But remember, for every Zomb brought, depending on their tier, a corresponding amount of $zomb token burn is required to initiate the hunt.</p>
                                    </div>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ZombHuntingGrounds;
