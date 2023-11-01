import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import CompanyBriefImage from '../../assets/images/company_brief.png'
// Consumables Icons
import KnivesIcon from '../../assets/images/consumables/01.png'
import IOLsIcon from '../../assets/images/consumables/02.png'
import UltraIcon from '../../assets/images/consumables/03.png'
import GlaucomaIcon from '../../assets/images/consumables/04.png'
import SuturesIcon from '../../assets/images/consumables/05.png'
import OVDIcon from '../../assets/images/consumables/06.png'
import InstrumentsIcon from '../../assets/images/consumables/07.png'
// Devices Icons
import PhacoIcon from '../../assets/images/devices/01.png'
import LaserIcon from '../../assets/images/devices/02.png'
import YAGLaserIcon from '../../assets/images/devices/03.png'
import UltrasoundIcon from '../../assets/images/devices/04.png'
import MachinesIcon from '../../assets/images/devices/05.png'
import UnitsIcon from '../../assets/images/devices/06.png'
import text from './text.json'
import './Home.scss'

function Home() {

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

  const scrollToWorkScope = (offset) => {
    const workScopeElement = document.getElementById('work_scope');
    const offsetTop = workScopeElement.offsetTop + offset;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth' // For smooth scrolling, you can remove this if not needed.
    });
  }

  const renderBody = () => (
    <div className='home_container'>
      {/* Header */}
      <div className='header'>
        <div className='overlay'></div>
        <p className={`slide-in ${show ? 'active' : ''}`}>{Text.description}</p>
        <div className="arrow_down" onClick={()=>scrollToWorkScope(-140)}>
          <i className="fas fa-angle-double-down fa-2x"></i>
        </div>
      </div>
      {/* Work Scope */}
      <div className='work_scope' id="work_scope">
        <Container>
          <Row>
            <Col lg={6}>
              <h6>{Text.services}</h6>
              <h2>{Text.work_scope}</h2>
            </Col>
            <Col lg={6}>
              <p>{Text.work_scope_description}</p>
            </Col>
            <Col lg={12}>
              <Row>
                <h3>{Text.consumables}</h3>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={KnivesIcon} alt='KnivesIcon' />
                    <p>{Text.surgical_knives}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={IOLsIcon} alt='IOLsIcon' />
                    <p>{Text.iols}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={UltraIcon} alt='UltraIcon' />
                    <p>{Text.ultra_plug}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={GlaucomaIcon} alt='GlaucomaIcon' />
                    <p>{Text.glaucoma}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={SuturesIcon} alt='SuturesIcon' />
                    <p>{Text.sutures}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={OVDIcon} alt='OVDIcon' />
                    <p>{Text.ovd}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={InstrumentsIcon} alt='InstrumentsIcon' />
                    <p>{Text.instruments}</p>
                  </div>
                </Col>
              </Row>
            </Col>
            <hr/>
            <Col lg={12}>
              <Row>
                <h3>{Text.devices}</h3>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={PhacoIcon} alt='PhacoIcon' />
                    <p>{Text.phaco}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={LaserIcon} alt='LaserIcon' />
                    <p>{Text.laser}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={YAGLaserIcon} alt='YAGLaserIcon' />
                    <p>{Text.yag}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={UltrasoundIcon} alt='UltrasoundIcon' />
                    <p>{Text.ultrasound}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={MachinesIcon} alt='MachinesIcon' />
                    <p>{Text.machines}</p>
                  </div>
                </Col>
                <Col lg={4} md={6} sm={12}>
                  <div className='scope'>
                    <img src={UnitsIcon} alt='UnitsIcon' />
                    <p>{Text.units}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Company Brief */}
      <div className='company_brief'>
        <Row>
            <Col lg={6}>
              <img src={CompanyBriefImage} alt="Medical Background" />
            </Col>
            <Col lg={6}>
              <div className='brief'>
                <span>{Text.company_brief}</span>
                <h3>{Text.company_brief_title}</h3>
                <h5>{Text.company_brief_description_1}</h5>
                <h5>{Text.company_brief_description_2}</h5>
                <h5>{Text.company_brief_description_3}</h5>
              </div>
            </Col>
        </Row>
      </div>
      {/* Contact US */}
      <div className='contact_us'>
        <Container>
          <div className='contact_us_conatiner'>
            <Row>
              <Col lg={8}>
                <p>{Text.inquiry}</p>
                <h4>{Text.contact_us_message}</h4>
              </Col>
              <Col lg={4}>
                <a href='/contact_us'>{Text.contact_us}</a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default Home