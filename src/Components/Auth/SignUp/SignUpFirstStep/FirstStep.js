import { useState } from "react";
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge,PrimaryOutlineSmall  } from '../../../../assets/styles/Buttons';
import { Heading1B,Heading4B, LabelInput, LabelWrapper, Body } from '../../../../assets/styles/Labels';
import { POPUP_TYPE } from '../../../../Helpers/Enums';
// import header
import FHeader from '../../../Layout/FHeader/FHeader';
// Scss Imports
import './../SignUp.scss';
// Pages Imports
import AllPopups from '../../../../Popups/AllPopups';
// Images Imports
import authLogo from '../../../../assets/images/logo/auth-logo.svg'
// Material Ui Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function FirstStep(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");

  const history = useHistory();
  const handleClick = () => {
    history.push("/signup2");
  }
  function loginPopupOpen() {
    setPopupType(POPUP_TYPE.LOGIN);
    setPopupOpen(true);
  }


return (

  <>
  <FHeader />
  <div className="auth-holder">
    <Grid container justifyContent="center" direction="column" alignItems="center">
      <Grid item xs={12} pt={'0px'}>
        <div className="auth-box">
          {/*<img src={authLogo} className="auth-top-logo" alt='pics' />*/}
            <Heading1B text={strings.firstEnterYourEmail} color={Colors.black1d} padding={'0 0 8px 0'} textAlign={'center'} />
            <LabelWrapper justifyContent={'center'} padding={'0 0 30px 0'} textAlign={'center'}>
              <Body text={strings.weSuggestUsingThe} color={Colors.black45} padding={'0 2px'} />
              <Body text={strings.emailAddressYouUseAtWork} color={Colors.black45} fontWeight={'600'} padding={'0 2px'} />
            </LabelWrapper>
            <div className="user-service-holder">
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
              <Box pt={'6px'}>
                <PrimaryLarge text={strings.continue} color={Colors.white} onClick={handleClick} />
              </Box>
              <Box className="alreay-login-bg">
                <Box>
                  <Heading4B text={strings.areadyHaveAnAccount} color={Colors.white} />
                  <Heading4B text={strings.loginToYourExistingAccount} color={Colors.white}/>
                </Box>
                <PrimaryOutlineSmall text={strings.logIn} color={Colors.white}  onClick={() => loginPopupOpen()}  />
              </Box>

            </div>
          </div>
          <div className="auth-box-bottom">
            <LabelWrapper>
              <Body text={strings.privacyTerms} color={Colors.gray61} padding={'0 4px'} cursor={'pointer'} fontSize={'12px'} />
              <Body text={'|'} color={Colors.gray61} padding={'0 2px'} />
              <Body text={strings.contactUs} color={Colors.gray61} padding={'0 4px'} cursor={'pointer'} fontSize={'12px'} />
            </LabelWrapper>
          </div>
        </Grid>
      </Grid>
      <AllPopups
          popupIsOpen={popupOpen}
          style={popupType}
          closePopup={() => setPopupOpen(false)}

      />
    </div>

    </>
  )
}

export default FirstStep
