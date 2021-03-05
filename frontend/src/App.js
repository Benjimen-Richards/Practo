
import './App.css';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
<Route path='/' exact component={Homepage}/>
      </BrowserRouter>
    </div>
  )
}

export default App
