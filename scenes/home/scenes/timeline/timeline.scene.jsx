import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool } from 'react-icons/md';

import onic from '../../../../assets/onic.png';
import stealth from '../../../../assets/stealth.png';
import cibc from '../../../../assets/cibc.png';
import eccc from '../../../../assets/eccc.png';
import uw from '../../../../assets/uw.png';


const constants = {
  HEADING: 'Timeline',
  EVENTS: [
    {
      type: 'job',
      date: 'September 2019 - Present',
      jobTitle: 'Software Engineer Lead',
      company: 'Onic Systems',
      description: 'Backend Development, Frontend Development, Database Design',
      logo: {
        alt: 'Onic Systems',
        img: onic
      }
    },
    {
      type: 'job',
      date: 'May 2020 - Present',
      jobTitle: 'Quantitative Developer',
      company: 'Stealth Startup',
      description: 'Algorithmic Trading, Backtesting, Data Analysis, Technical Analysis',
      logo: {
        alt: 'Stealth Startup',
        img: stealth
      }
    },
    {
      type: 'job',
      date: 'September 2019 - April 2020',
      jobTitle: 'Innovation Engineer Co-op',
      company: 'CIBC',
      description: 'Machine Learning, System Design, Innovation',
      logo: {
        alt: 'CIBC',
        img: cibc
      }
    },
    {
      type: 'job',
      date: 'January 2019 - April 2019',
      jobTitle: 'Web Developer Co-op',
      company: 'Environment and Climate Change Canada',
      description: 'Web Design, Automation, Web Analytics',
      logo: {
        alt: 'ECCC',
        img: eccc
      }
    },
    {
      type: 'school',
      date: 'September 2017 - Present',
      jobTitle: 'Mathematical Physics Co-op',
      company: 'University of Waterloo',
      description: 'Theoretical Physics, Advanced Mathematics, Computer Programming',
      logo: {
        alt: 'UW',
        img: uw
      }
    }
  ]
};

const Timeline = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: '#ebedef' }}
      className='pb-5'
    >
      <Row>
        <Col md={8} className='mx-auto text-center'>
          <h1 className="display-3">
            {constants.HEADING}
          </h1>
          <VerticalTimeline>
            {
              constants.EVENTS.map(({type, date, jobTitle, company, description, logo}, id) => (
                <VerticalTimelineElement
                  key={`timeline-${id}`}
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    borderRadius: '21px',
                    textAlign: 'left',
                  }}
                  contentArrowStyle={{ borderRight: '7px solid  #FFFFFF' }}
                  date={date}
                  iconStyle={{ background: '#2E77BD', color: '#FFFFFF' }}
                  icon={type === 'job' ? <MdWork fill='#FFFFFF'/> : <MdSchool fill='#FFFFFF'/>}
                >
                  <Row>
                    <Col md={8}>
                      <h4>{jobTitle}</h4>
                      <h5>{company}</h5>
                      <p>{description}</p>
                    </Col>
                    <Col md={4} className='d-none d-md-block'>
                      <img
                        alt={logo.alt}
                        src={logo.img}
                        style={{
                          margin: 'auto',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          width: '100px',
                          borderRadius: '20px'
                        }}
                      />
                    </Col>
                  </Row>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </Col>
      </Row>
    </Container>
  );
};

export default Timeline;
