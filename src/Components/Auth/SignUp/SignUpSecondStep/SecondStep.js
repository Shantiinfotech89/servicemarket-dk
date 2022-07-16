// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, BackLarge } from '../../../../assets/styles/Buttons';
import { Heading1B, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// import header
import FHeader from '../../../Layout/FHeader/FHeader';
// Scss Imports
import './../SignUp.scss';
// Images Imports
import authLogo from '../../../../assets/images/logo/auth-logo.svg';
import Visibility from '../../../../assets/images/structure/Visibility.svg';
import VisibilityOff from '../../../../assets/images/structure/VisibilityOff.svg';
import checkIcon from '../../../../assets/images/structure/check-green-icon.svg';
// Material Ui Imports
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useHistory } from 'react-router-dom';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function SecondStep(props) {
  const history = useHistory();
  const BackhandleClick = () => {
    history.push("/signup1");
  }
  const handleClick = () => {
    history.push("/signup3");
  }

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
<>
<FHeader />
    <div className="auth-holder">
      <Grid container justifyContent="center" direction="column" alignItems="center">
        <Grid item xs={6} pt={'0px'}>
          <div className="auth-box ab-660">

            <Heading1B text={strings.enterBasicDetail} color={Colors.black1d} padding={'0 0 8px 0'} textAlign={'center'} />
            <LabelWrapper justifyContent={'center'} padding={'0 0 30px 0'} textAlign={'center'}>
              <Body text={strings.pleaseFillInAllTheRequiredDetails} color={Colors.black45} padding={'0 2px'} />
            </LabelWrapper>
            <div className="user-service-holder">
            <Grid container columnSpacing={2}>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <TextField
                      className="textfield"
                      label="Owner First Name"
                      variant="filled"
                      placeholder="Enter Here"
                      required
                    />
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <TextField
                      className="textfield"
                      label="Owner Last Name"
                      variant="filled"
                      placeholder="Enter Here"
                      required
                    />
                  </Box>
              </Grid>
              <Grid item xs={12}>
                  <Box className="form-group">
                    <TextField
                      className="textfield"
                      label="Business Name"
                      variant="filled"
                      placeholder="Enter Here"
                      required
                    />
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <TextField
                      className="textfield"
                      label="VAT No."
                      variant="filled"
                      placeholder="Enter Here"
                      required
                    />
                    <IconButton className={'check-icon'}><img src={checkIcon} alt=".." /></IconButton>
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <PhoneInput
                      placeholder="Phone No.*"
                      country={'in'}
                      inputProps={{
                        name: 'phone',
                        required: true,
                        autoFocus: true
                      }}
                    />
                  </Box>
              </Grid>

              <Grid item xs={6}>
                <Box className="form-group">
                  <TextField
                    className="textfield"
                    label={strings.password}
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
              </Grid>
              <Grid item xs={6}>
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
              </Grid>
            </Grid>

              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pt={'16px'}>
                <BackLarge width={'140px'} text={strings.back} color={Colors.white} onClick={BackhandleClick} />
                <PrimaryLarge width={'140px'} text={strings.continue} color={Colors.white} onClick={handleClick} />
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
</>
  )
}

export default SecondStep
