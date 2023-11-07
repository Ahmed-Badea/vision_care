import React, { useRef } from 'react';
import { useIsVisible } from "react-is-visible"
import { Container, Row, Col } from 'reactstrap';
import { dependencies } from '../../Tools/dependencies';
import Logo from './../../assets/images/vision_care.png'
import text from './text.json';
import 'animate.css';
import './Footer.scss';

const Footer = () => {
  
  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const nodeRef = useRef();
  const isVisible = useIsVisible(nodeRef);

  const renderBody = () => (
    <Container>
      <Row>
        <Col md={4}>
          <h4>{Text.title}</h4>
          <p>{Text.description}</p>
          <p>{Text.goal}</p>
        </Col>
        <Col md={4} className='social_links'>
          <h4>{Text.social}</h4>
          <a href='/'><i className="fa-brands fa-facebook-f"></i></a>
          <a href='/'><i className="fa-brands fa-instagram"></i></a>
          <a href='/'><i className="fa-brands fa-x-twitter"></i></a>
          <a href='https://www.linkedin.com/in/talent-vision-care-34888829a/'><i className="fa-brands fa-linkedin"></i></a>
          <a href='/'><i className="fa-brands fa-youtube"></i></a>
          <div className='contact_info'>
            <p>
              <i className="fa fa-map-marker-alt"></i> 
              {Text.location}
            </p>
            <p>
              <i className="fa fa-paper-plane"></i> 
              {Text.zip_code} 1 3 7 8 7
            </p>
            <p>
              <i className="fa fa-inbox"></i> 
              {Text.po_box} 5 0 6 7
            </p>
            <a href="tel:+966 11 207 9919">
              <i className="fa fa-phone"></i>
              +966 11 207 9919
            </a>
            <a href="mailto:info@visioncareksa.com">
              <i className="fa fa-envelope"></i>
              info@visioncareksa.com
            </a>
          </div>
          <div>
            <img ref={nodeRef} className={`logo ${isVisible ? "animate__animated animate__bounce" : ""}`} src={Logo} alt="TALENT VISION CARE" />
          </div>
        </Col>
        <Col md={4} className='routes'>
          <h4>{Text.quick_links}</h4>
          {Text.quick_links_routes.map((route) => (
            <a key={route.path} href={route.path}>{route.name}</a>
          ))}
        </Col>
        <Col md={12}>
          <p className='copy_right'>{Text.copy_right}</p>
        </Col>
      </Row>
    </Container>
  )

  return (
    <footer>
      {renderBody()}
    </footer>
  );
};

export default Footer;