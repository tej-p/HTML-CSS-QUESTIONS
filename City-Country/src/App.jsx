import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Router, Route } from "react-router-dom"
import { CityList } from './components/CityList'
import { City } from './components/City'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Population</h1>
      <CityList>
      </CityList>
      {/* <Router>
        <Route path="/cities" element = {<CityList/>}></Route>
        <Route path="/cities/:cityId" element = {<City/>}></Route>
      </Router> */}
    </div>
  )
}

export default App
