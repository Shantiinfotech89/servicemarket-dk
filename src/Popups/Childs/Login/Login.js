// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, InputLabel, Body } from '../../../assets/styles/Labels';
// Scss Imports
import './Login.scss';
import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// local strings Imports
const strings = require('../../../localisation_en.json')

function Login(props) {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const [open, setOpen] = React.useState(false);

    const loginPopupOpen = () => {
      setOpen(true);
    };

    const popupClose = () => {
      setOpen(false);
    };
    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
return (
<>
  <Button variant="outlined" onClick={loginPopupOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth470'}>


        <DialogContent>
          <Heading2B text={strings.loginToSM} color={Colors.black1d}  margin={'0  0px 8px 0'} />
          <Body text={strings.welcomeBackEnterYourEmailAddressAndPassword} color={Colors.black45} margin={'0  0px 30px 0'} />
          <form>
            <Box className="form-group">
              <TextField
                className="textfield"
                label="Email id"
                variant="filled"
                placeholder="Enter Here"
                required
              />
              <InputLabel className="ipnputlabel" color={Colors.error} text={strings.enterAValidEmailAddress}></InputLabel>
            </Box>
            <Box className="form-group">
              <FormControl variant="filled">
                 <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                 <Input
                   id="standard-adornment-password"
                   type={values.showPassword ? 'text' : 'password'}
                   value={values.password}
                   onChange={handleChange('password')}
                   endAdornment={
                     <InputAdornment position="end">
                       <IconButton
                         aria-label="toggle password visibility"
                         onClick={handleClickShowPassword}
                         onMouseDown={handleMouseDownPassword}
                       >
                         {values.showPassword ? <VisibilityOff /> : <Visibility />}
                       </IconButton>
                     </InputAdornment>
                   }
                 />
               </FormControl>
            </Box>

          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={popupClose}>Cancel</Button>
          <Button onClick={popupClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
</>
  )
}

export default Login
