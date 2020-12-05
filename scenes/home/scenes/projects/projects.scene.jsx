import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const constants = {
  HEADING: 'Projects'
}

const Projects = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: '#ebedef' }}
    >
      <Row>
        <Col md={8} className='mx-auto text-center'>
          <h1 className="display-3 mb-5">{constants.HEADING}</h1>
        </Col>
      </Row>
    </Container>
  )
};

export default Projects;
