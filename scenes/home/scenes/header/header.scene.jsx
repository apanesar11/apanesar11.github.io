import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Wave from 'react-wavify'

const constants = {
  HEADING: "Hey, I'm Arashdeep!",
  SUBHEADING: "I'm a co-founder at Onic Systems, student at the University of Waterloo, and a passionate Software Engineer."
}

const Header = () => {
  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
      }}
    >
      <Container
        fluid
        className="text-light pt-5 pb-5"
      >
        <Row className='pt-5 mt-lg-5 pb-5 mb-lg-5'>
          <Col md={8} className='pt-5 pb-5 mt-lg-5 mb-lg-5 mx-auto'>
            <h1 className="display-3">{constants.HEADING}</h1>
            <h4 className="display-5">{constants.SUBHEADING}</h4>
          </Col>
        </Row>
      </Container>
      <Wave fill='#EBEDEF'
          paused={false}
          options={{
            height:40,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
       />
    </div>
  );
};

export default Header
