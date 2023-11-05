import React from 'react'
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'

function Recruitment() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <div style={{"height": "500px", "textAlign": "center", "lineHeight": "500px", "fontSize": "30px"}}>
      {Text.recruitment}
    </div>
  )
}

export default Recruitment
