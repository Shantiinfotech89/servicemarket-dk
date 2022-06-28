import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.scss';
import './assets/styles/material.scss';

import SignUp from './Components/Auth/SignUp/SignUp';
import FirstStep from './Components/Auth/SignUp/SignUpFirstStep/FirstStep';
import SecondStep from './Components/Auth/SignUp/SignUpSecondStep/SecondStep';
import ThirdStep from './Components/Auth/SignUp/SignUpThirdStep/ThirdStep';
import Login from './Popups/Childs/Login/Login';

function App() {

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: 'Muli',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/signup" render={(props) => <SignUp {...props} />} />
          <Route exact path="/signup2" render={(props) => <FirstStep {...props} />} />
          <Route exact path="/signup3" render={(props) => <SecondStep {...props} />} />
          <Route exact path="/signup4" render={(props) => <ThirdStep {...props} />} />
          <Route exact path="/Login" render={(props) => <Login {...props} />} />
        </Switch>
      </Router>
      </ThemeProvider>
    )
}

export default App;
