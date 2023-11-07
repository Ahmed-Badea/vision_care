import React from 'react'
import { Container } from 'reactstrap';
// import {dependencies} from '../../Tools/dependencies'
import developIcon from './../../assets/images/develop.jpg'
// import text from './text.json'
import 'animate.css';
import './SustainableDevelopment.scss'

function SustainableDevelopment() {

  // const currentLang = dependencies.getCurrentLang();
  // const Text = text[currentLang];

  const renderBody = () => (
    <div className='development_container'>
      <Container>
        <img src={developIcon} alt="Eye" className='animate__animated animate__backInDown' />
        {/*<div className='description'>
          <p>{Text.description}</p>
          <p>{Text.description}</p>
          <p>{Text.description}</p>
          <p>{Text.description}</p>
        </div>*/}
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
