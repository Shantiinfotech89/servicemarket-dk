// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, LabelInput, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import Visibility from '../../../assets/images/structure/Visibility.svg'
import VisibilityOff from '../../../assets/images/structure/VisibilityOff.svg'
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'
// Material Ui Imports
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// local strings Imports
const strings = require('../../../localisation_en.json')

function Login(props) {

  const [values, setValues] = React.useState({
    showPassword: false,
  });
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
        <div className="ph-container-box">
            <div className="ph-paper-box width470">
              <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
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
                  <Body text={strings.dontHaveAnAccount} color={Colors.gray61} />
                  <Body text={strings.createNewAccount} color={Colors.primary} margin={'0px 0px 0px 4px'} cursor={'pointer'} />
                </Box>
              </form>
            </div>
        </div>
  )
}

export default Login
