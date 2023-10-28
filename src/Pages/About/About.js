import React, { useEffect, useState } from 'react';
import {
  Container,
  Row, 
  Col,
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import Logo from './../../assets/images/vision_care.png'
import text from './text.json'
import './About.scss'

function About() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const [show, setShow] = useState(false);
  useEffect(() => {
    // Use a setTimeout to delay the animation
    const timeout = setTimeout(() => {
      setShow(true);
    }, 300); // Adjust the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const renderBody = () => (
    <div className="about_container">
      <Container>
      <Row>
        <Col lg={6}>
          <Accordion open={open} toggle={toggle} className={`slide-in ${show ? 'active' : ''}`}>
            <AccordionItem>
              <AccordionHeader targetId="1">{Text.company_profile}</AccordionHeader>
              <AccordionBody accordionId="1">
                <p>{Text.description}</p>
                <p>{Text.goal}</p>
                <p>{Text.philosophy}</p>
                <p>{Text.products}</p>
                <p>{Text.strategy}</p>
                <p>{Text.commitment_description}</p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">{Text.missoin}</AccordionHeader>
              <AccordionBody accordionId="2">
                <p>{Text.mission_description}</p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">{Text.vision}</AccordionHeader>
              <AccordionBody accordionId="3">
                <p>{Text.vision_description}</p>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">{Text.values}</AccordionHeader>
              <AccordionBody accordionId="4">
              <ul>
              {Text.values_description.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </Col>
        <Col>
          <img src={Logo} alt="TALENT VISION CARE" className={`slide-in ${show ? 'active' : ''}`}/>
        </Col>
      </Row>
        
      </Container>
    </div>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default About
