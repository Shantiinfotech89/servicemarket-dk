// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Body } from '../../../assets/styles/Labels';
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
  const [valuesOld, setValuesOld] = React.useState({
    showPasswordOld: false,
  });
  const [values, setValues] = React.useState({
    showPassword: false,
  });
  const [valuesConfirm, setValuesConfirm] = React.useState({
    showPasswordConfirm: false,
  });
  const [open, setOpen] = React.useState(false);

  const resetPasswordPopupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };
  const handleChange = (prop) => (event) => {
    setValuesOld({ ...values, [prop]: event.target.value });
    setValues({ ...values, [prop]: event.target.value });
    setValuesConfirm({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPasswordOld = () => {
    setValuesOld({
      ...valuesOld,
      showPasswordOld: !valuesOld.showPasswordOld,
    });
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
  <>
      <Button variant="outlined" onClick={resetPasswordPopupOpen}>
      {strings.changePassword}
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth470'}>
        <DialogContent>
          <img src={ModalClose} alt="..." className="modal-close" onClick={popupClose} />
          <Heading2B text={strings.changePassword} color={Colors.black1d}  margin={'0  0px 8px 0'} />
          <Body text={strings.youCanSetYourNewPasswordWithEnterOldPassword} color={Colors.black45} margin={'0  0px 30px 0'} />
          <form>
            <Box className="form-group">
              <TextField
                className="textfield"
                label={strings.oldPassword}
                variant="filled"
                placeholder="Enter Here"
                type={valuesOld.showPasswordOld ? 'text' : 'password'}
                value={valuesOld.passwordOld}
                onChange={handleChange('passwordOld')}
                required
              />
              <IconButton
                className="eye-icon"
                aria-label="toggle password visibility"
                onClick={handleClickShowPasswordOld}
              >
                {valuesOld.showPasswordOld ? <img src={VisibilityOff} alt=".." /> : <img src={Visibility} alt=".." />}
              </IconButton>
            </Box>
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
        </DialogContent>
      </Dialog>
</>
  )
}

export default Login
