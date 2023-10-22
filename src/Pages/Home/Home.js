import React from 'react'
import {dependencies} from '../../Tools/dependencies'
import text from './text.json'

function Home() {

  const currentLang = dependencies.getCurrentLang();
  const Text = text[currentLang];

  return (
    <div>
      {Text.home}
    </div>
  )
}

export default Home
