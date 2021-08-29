import React, { useState } from 'react'
const Title = ({name}) => <h1>{name}</h1>



const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.name}
  </button>
  
  )

const Display = (props) => {
  if (props.name === "positive") {
    return (
      <tr><td>{props.name}</td><td>{props.value} %</td></tr>
    )
  }
  
  return (
    <tr>
      <td>{props.name}</td> <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (clicks) => {
  let good = clicks.good
  let neutral = clicks.neutral
  let bad = clicks.bad
  if (clicks.good + clicks.neutral + clicks.bad === 0) {
    return (
      <div>
            No Feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <Display name = "good" value = {good} />
          <Display name = "neutral" value = {neutral} />
          <Display name = "bad" value = {bad} />
          <Display name = "all" value = {good + bad + neutral} />
          <Display name = "positive" value = {good * 100/(good + bad + neutral)}/>
          <Display name = "average" value = {(good - bad)/ (good + bad + neutral)} />
        </tbody>
      </table>
    </div>
  )
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
   } 
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
   }
  const handleBadClick = () => {
    setBad(bad + 1)
   }

    

  return (
    <>
      <Title name = "Give Feedback" />
      <Button handleClick = {handleGoodClick} name = "good"/>
      <Button handleClick = {handleNeutralClick} name = "neutral"/>
      <Button handleClick = {handleBadClick} name = "bad"/>
      <Title name = "Statistics"/>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </>
  )
}

export default App