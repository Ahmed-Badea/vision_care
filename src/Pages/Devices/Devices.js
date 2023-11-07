import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import PhacoIcon from '../../assets/images/devices/phaco.jpg'
import LaserIcon from '../../assets/images/devices/photocoagulation.jpg'
import YAGLaserIcon from '../../assets/images/devices/photodisruption.jpg'
import UltrasoundIcon from '../../assets/images/devices/diagnostic_ultrasound.jpg'
import MachinesIcon from '../../assets/images/devices/diagnostic machines.jpg'
import UnitsIcon from '../../assets/images/devices/refraction_units.jpg'
import text from './text.json'

function Devices() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const renderBody = () => (
    <section className='work_scope'>
      <Container>
        <Row>
          <Col lg={6}>
            <h2>{Text.devices}</h2>
          </Col>
          <Col lg={6}>
            <p>{Text.work_scope_description}</p>
          </Col>
          <Col lg={12}>
            <Row>
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
    </section>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default Devices
