import React, { useState, useEffect } from 'react'

const UseEffect = () => {
  const [ people, updatePeople ] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3456/people')
      .then(result => result.json())
      .then(result => {
        updatePeople(result)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const renderPeople = () => {
    return people.length
      ? people
          .map(({ name, age }) => (
            <div key={name + age}>{name} is of age {age}.</div>
          ))
      : 'No data'
  }

  return (
    <div>
      <h1>useEffect</h1>
      <h2>
        List of people
      </h2>
      <div>
        {renderPeople()}
      </div>
    </div>
  )
}

export default UseEffect
