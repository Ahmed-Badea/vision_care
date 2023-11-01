import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { dependencies } from '../../Tools/dependencies';
import Logo from './../../assets/images/vision_care.png'
import text from './text.json';
import './Footer.scss';

const Footer = () => {
  
  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h4>{Text.title}</h4>
            <p>{Text.description}</p>
            <p>{Text.goal}</p>
          </Col>
          <Col md={4} className='social_links'>
            <h4>{Text.social}</h4>
            <a href='/'><i class="fa-brands fa-facebook-f"></i></a>
            <a href='/'><i class="fa-brands fa-instagram"></i></a>
            <a href='/'><i class="fa-brands fa-x-twitter"></i></a>
            <a href='/'><i class="fa-brands fa-youtube"></i></a>
            <div className='contact_info'>
              <p>
                <i class="fa fa-map-marker-alt"></i> 
                {Text.location}
              </p>
              <a href="tel:+966 (11)4646699">
                <i class="fa fa-phone"></i>
                +966 (11)4646699 
              </a>
              <a href="mailto:smeh@smeh.com.sa">
                <i class="fa fa-envelope"></i>
                smeh@smeh.com.sa
              </a>
            </div>
            <div>
              <img className='logo' src={Logo} alt="TALENT VISION CARE" />
            </div>
          </Col>
          <Col md={4}>
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
    </footer>
  );
};

export default Footer;