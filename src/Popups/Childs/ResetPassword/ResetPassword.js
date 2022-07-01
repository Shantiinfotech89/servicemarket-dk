// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import Visibility from '../../../assets/images/structure/Visibility.svg'
import VisibilityOff from '../../../assets/images/structure/VisibilityOff.svg'
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'
// Imports Material UI
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
  const [valuesConfirm, setValuesConfirm] = React.useState({
    showPasswordConfirm: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setValuesConfirm({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowPasswordConfirm = () => {
    setValuesConfirm({
      ...valuesConfirm,
      showPasswordConfirm: !valuesConfirm.showPasswordConfirm,
    });
  };
return (
  <div className="ph-container-box">
    <div className="ph-paper-box width470">
      <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
      <Heading2B text={strings.resetPassword} color={Colors.black1d}  margin={'0  0px 8px 0'} />
      <Body text={strings.setYourNewPasswordHere} color={Colors.black45} margin={'0  0px 30px 0'} />
      <form>
        <Box className="form-group">
          <TextField
            className="textfield"
            label={strings.newPassword}
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

        <Box className="form-group">
          <TextField
            className="textfield"
            label={strings.confirmPassword}
            variant="filled"
            placeholder="Enter Here"
            type={valuesConfirm.showPasswordConfirm ? 'text' : 'password'}
            value={valuesConfirm.passwordConfirm}
            onChange={handleChange('passwordConfirm')}
            required
          />
          <IconButton
            className="eye-icon"
            aria-label="toggle password visibility"
            onClick={handleClickShowPasswordConfirm}
          >
            {valuesConfirm.showPasswordConfirm ? <img src={VisibilityOff} alt=".." /> : <img src={Visibility} alt=".." />}
          </IconButton>
        </Box>

        <PrimaryLarge text={strings.submit} color={Colors.white} margin={'10px 0px 0px 0px '} />
      </form>
    </div>
  </div>
  )
}

export default Login
