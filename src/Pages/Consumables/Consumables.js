import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import KnivesIcon from '../../assets/images/consumables/01.png'
import IOLsIcon from '../../assets/images/consumables/02.png'
import UltraIcon from '../../assets/images/consumables/03.png'
import GlaucomaIcon from '../../assets/images/consumables/04.png'
import SuturesIcon from '../../assets/images/consumables/05.png'
import OVDIcon from '../../assets/images/consumables/06.png'
import InstrumentsIcon from '../../assets/images/consumables/07.png'
import text from './text.json'

function Consumables() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const renderBody = () => (
    <section className='work_scope'>
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
        </Row>
      </Container>
    </section>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default Consumables
