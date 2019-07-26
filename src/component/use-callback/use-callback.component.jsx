import React, { useState, useCallback, memo } from 'react'
import Button from '../button';

const MemoButton = memo(({ click, children }) => {
  console.log('Render')
  return (
    <Button click={click}>{children}</Button>
)
})

const UseCallback = () => {
  const [ donation, updateDonation ] = useState(1)
  const [ people, changePeopleNumber ] = useState(1)
  const [ anotherDonation, updateAnotherDonation ] = useState(1)

  const memoClick = useCallback(() => {
    updateDonation(donation + 1)
  }, [donation])

  const memoClickPeople = useCallback(() => {
    changePeopleNumber(people + 1)
  }, [people])

  return (
    <div>
      <h1>useMemo</h1>
      <h2>Donation</h2>
      <p>Current donation progress: £{donation}</p>
      <MemoButton click={memoClick}>Donate £1 Now!</MemoButton>
      <MemoButton click={memoClickPeople} label>Us</MemoButton>
      <p>Current other donation progress: £{anotherDonation}</p>
      <MemoButton click={() => updateAnotherDonation(anotherDonation + 1)}>Donate another £1 Now!</MemoButton>
    </div>
  )
}

export default UseCallback
