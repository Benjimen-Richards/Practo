import "./App.css";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Appointments from "./Components/Appointments/Appointments";
import Main_authpage from "./Components/Registerpage/Main_authpage";
import Confirmappointment from "./Components/Appointments/Confirmappointment";
import Doctormainpage from "./Components/Doctorlist/Doctormainpage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Homepage} />
        <Route path="/doctorlist" component={Doctormainpage} />
        <Route path="/appointments" component={Appointments} />
        <Route path="/authpage" component={Main_authpage} />
        <Route path="/confirmappointment/:id" component={Confirmappointment} />
      </BrowserRouter>
    </div>
  );
};

export default App;
