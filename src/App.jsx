import React, { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from '../store/atoms/count'

function App() {
  
  return (
    <div>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>
    {count}
  </div>
}

function Count() {
  console.log("Count will only render once as recoil makes state management efficient")
  return (
    <div>
      <CountRenderer></CountRenderer>
      <ButtonRenderer></ButtonRenderer>
    </div>
  )
}

function ButtonRenderer() {
  const [count, setCount] = useRecoilState(countAtom)
  return <div>
    <button onClick={() => {setCount(count + 1)}}>Increment</button>
    <button onClick={() => {setCount(count - 1)}}>Decrement</button>
  </div>
}

export default App