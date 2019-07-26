import React, { useState } from 'react'
import Button from '../button';

const UseStateComponent = () => {
  const [ lights, updateLights ] = useState(true)
  const [ value, updateValue ] = useState('hi')

  const toggleLights = () => {
    updateLights(!lights)
  }

  const updateText = e => {
    const { value } = e.target
    updateValue(value)
  }

  return (
    <div>
      <h1>Use State</h1>
      <h2>Lights</h2>
      <div>Lights are <b>{lights ? 'on' : 'off'}</b></div>
      <Button click={toggleLights}>Toggle lights</Button>
      <h2>Data binding</h2>
      <input
        type="text"
        value={value}
        onChange={updateText}
      />
      <div>The value of the input is: {value}</div>
      <div>Tips:</div>
      <ul>
        <li>Hooks can not be inside conditionals or for loops</li>
      </ul>
    </div>
  )
}

export default UseStateComponent
