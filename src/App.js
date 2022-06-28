import React from "react";
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import './assets/styles/material.scss';

import SignUp from './Components/Auth/SignUp/SignUp';
import FirstStep from './Components/Auth/SignUp/SignUpFirstStep/FirstStep';
import SecondStep from './Components/Auth/SignUp/SignUpSecondStep/SecondStep';

import Login from './Popups/Childs/Login/Login';
// const theme = createMuiTheme({
//   typography: {
//     fontFamily: [
//       'Muli',
//     ].join(','),
//   },});

function App() {


  return (

      <Router>
        <Switch>
          <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
          <Route exact path="/signup2" render={(props) => <FirstStep {...props} />} />
          <Route exact path="/signup3" render={(props) => <SecondStep {...props} />} />

          <Route exact path="/Login" render={(props) => <Login {...props} />} />
        </Switch>
      </Router>

    )
}

export default App;
