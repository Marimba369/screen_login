import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState("")

  function pegaValor(event){
    setCount(event.target.value)
    console.log(count)
  }

  return (
    <div>
      <input placeholder='Digite algo!!' type='text' value={count} onChange={pegaValor}/>
      <p>{count}</p>
    </div>
  )
}

export default App
