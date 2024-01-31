import React, { useContext } from 'react'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from '../store/atoms/count'

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
    <EvenRenderer></EvenRenderer>
  </div>
}

function EvenRenderer() {
  // const count = useRecoilValue(countAtom)
  // return <div>
  //   {count % 2 === 0 ? "Even" : "Odd"}
  // </div>

  // but this is not the best as we are running the isEven logic everytime this component will re-render (due to another state in this component or another state variable change in the parent component), this would not be a problem if the logic is simple but if it is complex then it will be a problem (like useMemo to prevent expensive logic to run, we use selectors in recoil)
  const isEven = useRecoilValue(evenSelector)
  return <div>
    {isEven ? "It is Even" : null}
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
  console.log("Button does not re-render as the state is managed by recoil")
  // const setCount = useRecoilState(countAtom)[1]  OR
  const setCount = useSetRecoilState(countAtom)
  

  // we just need setCount to update the state, we don't need the count value, so we can use useSetRecoilState instead of useRecoilState
  // this is because this syntax of setCount [setCount(count => count + 1)] already gets count as a parameter instead of using setCount(count + 1) which would need our component to have context of count as well
  return <div>
    <button onClick={() => {setCount(count => count + 1)}}>Increment</button>
    <button onClick={() => {setCount(count => count - 1)}}>Decrement</button>
  </div>
}
const setCount = useSetRecoilState(evenSelector)
export default App