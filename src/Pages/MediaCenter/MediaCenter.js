import React from 'react'
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'

function MediaCenter() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <div style={{"height": "500px", "textAlign": "center", "lineHeight": "500px", "fontSize": "30px"}}>
      {Text.home}
    </div>
  )
}

export default MediaCenter
