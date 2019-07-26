import React, { useState, useContext, createContext, useEffect } from 'react'
import Button from '../button';

const NewReactContext = createContext()

const ListLevelOne = () => {
  return (
    <div>
      <h2>List level 1</h2>
      <ListLevelTwo />
    </div>
  )
}

const ListLevelTwo = () => {
  return (
    <div>
      <h3>List level 2</h3>
      <ListLevelThree />
    </div>
  )
}

const ListLevelThree = () => {
  return (
    <div>
      <h4>List level 3</h4>
      <ListLevelFour />
    </div>
  )
}

const ListLevelFour = () => {
  return (
    <div>
      <h5>List level 4</h5>
      <ListLevelFive />
    </div>
  )
}

const ListLevelFive = () => {
  const randomNumber = useContext(NewReactContext)
  return (
    <div>
      <h6>List level 5</h6>
      <p>The random number is: {randomNumber}</p>
    </div>
  )
}

const UseContext = () => {
  const [ number, updateNumber ] = useState(1)

  useEffect(() => {
    getRandom()
  }, [])

  const getRandom = () => {
    updateNumber(~~(Math.random() * 1000))
  }

  return (
    <NewReactContext.Provider value={number}>
      <h1>useContext</h1>
      <p>Local value: {number}</p>
      <Button click={getRandom}>Get random number</Button>
      <ListLevelOne />
    </NewReactContext.Provider>
  )
}

export default UseContext
