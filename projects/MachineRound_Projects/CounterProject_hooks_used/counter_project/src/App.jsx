import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
   const onIncrementmethod=()=>{
        setCount(count+1);
    }
    const onDecrementmethod=()=>{
      if(count>0)
      setCount(count-1);
  }
  return (
    <>
           <h1>Lets Master in Counting {count}</h1>
           <button onClick={onIncrementmethod} >Increment </button>
           <button onClick={onDecrementmethod}>Decrement </button>
    </>
  )
}

export default App
