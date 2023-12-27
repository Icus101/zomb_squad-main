import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import './ZombsquadGenotypes.css';

function ZombsquadGenotypes() {
    return (
        <section className="zg-bg">
            <Container className='padder'>
                <Row>
                    <Col lg={7}>
                        <div className="zg">
                            <div data-aos="zoom-in" className="zg-top-txt">
                                <div>ZOMBSQUAD</div>
                                <div className='abt-zomb'>GENOTYPES</div>
                            </div>
                            <div className="zg-content">
                                <div>
                                    Unlock the full potential of your Zomb with ZombSquad Genotypes! Introducing
                                    10 Genotypes that utilize the different attached NFT items of ZombSquad NFTs
                                    that when successfully combined, unlock a special ability!
                                    <br />
                                    See full details <a href="http://zombsquad.co">here</a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ZombsquadGenotypes
