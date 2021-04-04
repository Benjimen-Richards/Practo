import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Appointments from "./Components/Appointments/Appointments";
import Main_authpage from "./Components/Registerpage/Main_authpage";
import Confirmappointment from "./Components/Appointments/Confirmappointment";
import Doctormainpage from "./Components/Doctorlist/Doctormainpage";
import Forgetpassword from './Components/Forgetpassword/Forgetpassword'
import Setpassword from "./Components/Forgetpassword/Setpassword";
import Nullpage from "./Components/Null/Nullpage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/doctorlist" component={Doctormainpage} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/authpage" component={Main_authpage} />
        <Route path="/confirmappointment/:id" component={Confirmappointment} />
        <Route path="/forgetpassword" component={Forgetpassword} />
        <Route path="/setpassword" component={Setpassword} />
        <Route path="/null" component={Nullpage} />
      </BrowserRouter>
    </div>
  );
};

export default App;
