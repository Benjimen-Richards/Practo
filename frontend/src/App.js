
import './App.css';
import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Homepage from './Components/Homepage/Homepage'
import Loginpage from './Components/Login components/Loginpage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
<Route path='/' exact component={Homepage}/>
<Route path='/login' component={Loginpage}/>
      </BrowserRouter>
    </div>
  )
}

export default App
