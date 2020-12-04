import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const constants = {
  HEADING: 'Timeline',
  EVENTS: [
    {
      date: 'September 2019 - Present',
      jobTitle: 'Co-Founder & Software Engineer Lead',
      company: 'Onic Systems',
      description: 'Backend Development, Frontend Development, Database Design'
    },
    {
      date: 'May 2020 - Present',
      jobTitle: 'Co-Founder & Quantitative Developer',
      company: 'ANC Capital',
      description: 'Algorithmic Trading, Backtesting, Data Analysis, Technical Analysis'
    },
    {
      date: 'September 2019 - April 2020',
      jobTitle: 'Innovation Engineer Co-op',
      company: 'CIBC',
      description: 'Machine Learning, System Design, Innovation'
    },
    {
      date: 'January 2019 - April 2019',
      jobTitle: 'Web Developer Co-op',
      company: 'Environment and Climate Change Canada',
      description: 'Web Design, Automation, Web Analytics'
    }
  ]
};

const Timeline = () => {
  return (
    <Container fluid style={{ backgroundColor: '#ebedef' }}>
      <Row>
        <Col md={8} className='mx-auto text-center'>
          <h1 className="display-3">
            {constants.HEADING}
          </h1>
          <VerticalTimeline>
            {
              constants.EVENTS.map(({date, jobTitle, company, description}, id) => (
                <VerticalTimelineElement
                  id={`timeline-${id}`}
                  className="vertical-timeline-element--work"
                  //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date={date}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#aaa' }}
                  //icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">{jobTitle}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{company}</h4>
                  <p>{description}</p>
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
