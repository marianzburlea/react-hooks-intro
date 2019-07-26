import React, { useState, useMemo } from 'react'
import { getListOfDuplicatesUsingObject } from './clasify-duplicates';
import Button from '../button';

const UseMemo = () => {
  // const n = 5000000;
  const [ number, setNumber ] = useState(5000000)
  const [ donation, updateDonation ] = useState(1)
  // const howMany = getListOfDuplicatesUsingObject(n)
  const howMany = useMemo(() => getListOfDuplicatesUsingObject(number), [number])
  return (
    <div>
      <h1>useMemo</h1>
      <h2>Donation</h2>
      <p>Current donation progress: £{donation}</p>
      <Button click={() => updateDonation(donation + 1)}>Donate £1 Now!</Button>
      <p>Calculate list of duplicates</p>
      <h2>How many?</h2>
      <p>{howMany.length}</p>
      <button onClick={() => setNumber(6000000)}>Recalculate</button>
    </div>
  )
}

export default UseMemo
