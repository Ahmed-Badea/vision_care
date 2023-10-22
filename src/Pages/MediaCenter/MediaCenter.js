import React from 'react'
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'

function MediaCenter() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <div>
      {Text.home}
    </div>
  )
}

export default MediaCenter
