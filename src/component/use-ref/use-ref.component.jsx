import React, { useRef, useState } from 'react'
import Button from '../button';

const UseRef = () => {
  const myFocus = useRef()
  const [ message, updateMessage ] = useState('change me')

  const alertMe = () => {
    window.alert(message)
    myFocus.current.focus()
  }

  return (
    <div>
      <h1>useRef</h1>
      <input
        type="text"
        value={message}
        onChange={e => updateMessage(e.target.value)}
        ref={myFocus}
      />
      <Button click={alertMe}>Show message in alert</Button>
    </div>
  )
}

export default UseRef
