// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, LabelInput, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';

// Images Imports
import Visibility from '../../../assets/images/structure/Visibility.png'
import VisibilityOff from '../../../assets/images/structure/VisibilityOff.png'
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'



import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// local strings Imports
const strings = require('../../../localisation_en.json')

function Login(props) {
  const [values, setValues] = React.useState({
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
return (
  <>
      <Button variant="outlined" onClick={loginPopupOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth470'}>
        <DialogContent>
          <img src={ModalClose} alt="..." className="modal-close" onClick={popupClose} />
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
              <LabelInput className="ipnputlabel" color={Colors.error} text={strings.enterAValidEmailAddress}></LabelInput>
            </Box>
            <Box className="form-group">
              <TextField
                className="textfield"
                label="password"
                variant="filled"
                placeholder="Enter Here"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                required
              />
              <IconButton
                className="eye-icon"
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {values.showPassword ? <img src={VisibilityOff} alt=".." /> : <img src={Visibility} alt=".." />}
              </IconButton>
            </Box>
            <Body text={strings.forgotPassword} color={Colors.gray61} textAlign={'right'} cursor={'pointer'} margin={'0px 0px 24px 0px'} />
            <PrimaryLarge text={strings.Login} color={Colors.white} />
            <Box display="flex" justifyContent="center" alignItems="center" pt={'30px'}>
              <Body text={strings.dontHaveAnAccount} color={Colors.secondary} />
              <Body text={strings.createNewAccount} color={Colors.blue12} margin={'0px 0px 0px 4px'} cursor={'pointer'} />
            </Box>
          </form>
        </DialogContent>
      </Dialog>
</>
  )
}

export default Login
