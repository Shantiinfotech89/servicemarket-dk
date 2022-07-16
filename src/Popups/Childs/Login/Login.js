
// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, LabelInput, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
import { POPUP_TYPE } from '../../../Helpers/Enums'
// Images Imports
import Visibility from '../../../assets/images/structure/Visibility.svg';
import VisibilityOff from '../../../assets/images/structure/VisibilityOff.svg';
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg';
// Pages Imports
import AllPopups from '../../AllPopups';
// import ForgotPassword from '../ForgotPassword/ForgotPassword';
// Material Ui Imports
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// local strings Imports
const strings = require('../../../localisation_en.json')

function Login(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");
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
  function ForgotPasswordPopupOpen() {
    setPopupType(POPUP_TYPE.FORGOT_PASSWORD);
    setPopupOpen(true);
  }


  let history = useHistory();
  const handleClickSignUp = () => {
    history.push("/signup");
    setPopupOpen(false);
  }

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
                <Body text={strings.forgotPassword} color={Colors.gray61} textAlign={'right'} cursor={'pointer'} margin={'0px 0px 24px 0px'} onClick={(() => props.closePopup(), ForgotPasswordPopupOpen) } />


                <PrimaryLarge text={strings.Login} color={Colors.white} />
                <Box display="flex" justifyContent="center" alignItems="center" pt={'30px'}>
                  <Body text={strings.dontHaveAnAccount} color={Colors.gray61} />
                  <Body text={strings.createNewAccount} color={Colors.primary} margin={'0px 0px 0px 4px'} cursor={'pointer'} onClick={handleClickSignUp} />
                </Box>
              </form>
            </div>
            <AllPopups
                popupIsOpen={popupOpen}
                style={popupType}
                closePopup={() => setPopupOpen(false)}
            />

        </div>
  )
}

export default Login
