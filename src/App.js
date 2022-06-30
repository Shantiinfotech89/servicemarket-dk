import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
// Import scss
import './App.scss';
import './assets/styles/material.scss';
// Import Pages
import SignUp from './Components/Auth/SignUp/SignUp';
import FirstStep from './Components/Auth/SignUp/SignUpFirstStep/FirstStep';
import SecondStep from './Components/Auth/SignUp/SignUpSecondStep/SecondStep';
import ThirdStep from './Components/Auth/SignUp/SignUpThirdStep/ThirdStep';
import FourthStep from './Components/Auth/SignUp/SignUpFourthStep/FourthStep';
import AllPopups from './Popups/AllPopups';
import Profile from './Components/Main/ServiceProvider/Profile/Profile';
import MidContentBox from './Components/Layout/MidContentBox/MidContentBox';
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
          <Route exact path="/signup1" render={(props) => <FirstStep {...props} />} />
          <Route exact path="/signup2" render={(props) => <SecondStep {...props} />} />
          <Route exact path="/signup3" render={(props) => <ThirdStep {...props} />} />
          <Route exact path="/signup4" render={(props) => <FourthStep {...props} />} />
          <Route exact path="/AllPopups" render={(props) => <AllPopups {...props} />} />
          <Route exact path="/profile" render={(props) => <Profile {...props} />} />
          <Route exact path="/main-app" render={(props) => <MidContentBox {...props} />} />
        </Switch>
      </Router>
      </ThemeProvider>
    )
}

export default App;
