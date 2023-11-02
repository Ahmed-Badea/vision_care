import React from 'react'
import { Container } from 'reactstrap';
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';
import {dependencies} from '../../Tools/dependencies'
import EyeIcon from './../../assets/images/eye.jpg'
import text from './text.json'
import './SustainableDevelopment.scss'

const bounceInDownAnimation = keyframes`${bounceInDown}`;
const BouncyInDownDiv = styled.div`
  animation: 1s ${bounceInDownAnimation};
`;

function SustainableDevelopment() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  const renderBody = () => (
    <div className='development_container'>
      <Container>
        <BouncyInDownDiv>
          <img src={EyeIcon} alt="Eye" />
        </BouncyInDownDiv>
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
