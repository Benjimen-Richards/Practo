import { Component } from "react";
import './Authpage.css'
import Loginpage from "./Loginpage";
import Register from "./Register";
import {Link, Route } from 'react-router-dom'
import Doctorslogin from "./Doctorslogin";
class Main_authpage extends Component
{
  render()
  {
    return(
      <div className='authpage_container'>
            <div className='Maincontent'>
                <div className='Maincontent_top_nav'>
                  <Link to='/authpage/login'>
                  <button>Login</button>
                  </Link>
                  <Link to='/authpage/register'>
                  <button>Register</button>
                  </Link>
                </div>
                <hr style={{marginTop:'-8px'}}/>
               <div className='Bottom_content'>
               <div className='Content_left'>
                    <img src='https://accounts.practo.com/static/images/illustration.png' alt='/'/>
                </div>
                <div className='Content_right'>
                    <Route path='/authpage/register' component={Register}/>
                    <Route path='/authpage/login' component={Loginpage}/>
                    <Route path='/authpage/doctor' component={Doctorslogin}/>
                </div>
               </div>
            </div>
      </div>

    )
  }
}
export default Main_authpage