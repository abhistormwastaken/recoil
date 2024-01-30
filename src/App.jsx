import React, { useContext, useState } from 'react'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count></Count>
      </CountContext.Provider>
    </div>
  )
}

function CountRenderer() {
  const count = useContext(CountContext).count
  return <div>
    {count}
  </div>
}

function Count() {
  console.log("Count rendered wtf context api is bad");
  // context api only fixes prop drilling and does not for making rendering efficient
  // so now we'll check out state management libraries like redux and recoil
  return (
    <div>
      <CountRenderer></CountRenderer>
      <ButtonRenderer></ButtonRenderer>
    </div>
  )
}

function ButtonRenderer() {
  const { count, setCount } = useContext(CountContext)
  return <div>
    <button onClick={() => {setCount(count + 1)}}>Increment</button>
    <button onClick={() => {setCount(count - 1)}}>Decrement</button>
  </div>
}

export default App