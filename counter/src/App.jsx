import { useState } from 'react'


function App() {
  const [count, setCount] = useState(8)

  const addcount=()=>{
    setCount(count+1)
  }

  const decreasecount=()=>{
    setCount(count-1)
  }

  return (
    <>
    <button onClick={addcount}>Add</button>
    <h1>count: {count}</h1>
    <button onClick={decreasecount}>Decrease</button>
    </>
  )
}

export default App
