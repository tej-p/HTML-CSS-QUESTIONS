import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { FetchAPI } from './components/FetchAPI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FetchAPI></FetchAPI>
    </div>
  )
}

export default App
