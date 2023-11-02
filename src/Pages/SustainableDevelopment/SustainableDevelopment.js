import React from 'react'
import { Container } from 'reactstrap';
import {dependencies} from '../../Tools/dependencies'
import EyeIcon from './../../assets/images/eye.jpg'
import text from './text.json'
import 'animate.css';
import './SustainableDevelopment.scss'

function SustainableDevelopment() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const renderBody = () => (
    <div className='development_container'>
      <Container>
        <img src={EyeIcon} alt="Eye" className='animate__animated animate__backInDown' />
        <div className='description'>
          <p>{Text.description_1}</p>
          <p>{Text.description_2}</p>
          <p>{Text.description_3}</p>
          <p>{Text.description_4}</p>
          <p>{Text.description_5}</p>
          <p>{Text.description_6}</p>
        </div>
      </Container>
    </div>
  )

  return (
    <div>
      {renderBody()}
    </div>
  )
}

export default SustainableDevelopment
