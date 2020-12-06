import React from 'react';
import Wave from "react-wavify";
import { Container, Row, Col } from 'react-bootstrap';

const constants = {
  HEADING: 'Resume'
};

const Resume = () => {

  return (
    <>
      <div style={{
        backgroundColor: '#EBEDEF'
      }}>
        <Wave fill='url(#gradient)'
          paused={false}
          options={{
            height:40,
            amplitude: 20,
            speed: 0.15,
            points: 3
          }}
        >
          <defs>
            <linearGradient id="gradient">
              <stop offset="0%"  stopColor="#524AB9" />
              <stop offset="100%" stopColor="#1CA2C0" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
      <Container
        fluid
        style={{
          background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
        }}
        className="text-light pb-5"
      >
        <Row className=''>
          <Col md={8} className='mx-auto text-center'>
            <h1 className="display-3 mb-3">{constants.HEADING}</h1>
            <iframe
              style={{
                width: '100%',
                height: '800px'
              }}
              name='Arashdeep Panesar Resume'
              src='https://www.smartcaptech.com/wp-content/uploads/sample.pdf'>
            </iframe>
          </Col>
        </Row>
      </Container>
      <div style={{
        background: 'linear-gradient(90deg, #524AB9 0%, #1CA2C0 100%)'
      }}>
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
    </>
  )
};

export default Resume;
