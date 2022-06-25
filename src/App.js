import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.scss';

import LogIn from './Components/Auth/LogIn/LogIn';


function App() {

  return (
  <Router>
      <Routes>
         <Route exact path="/" element={<LogIn/>} />
         {/*<Route exact path="/" render={(props) => <LogIn {...props} />} />*/}

      </Routes>
  </Router>)
}

export default App;
