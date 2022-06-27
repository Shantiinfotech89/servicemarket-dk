// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';
import { Heading1B, InputLabel, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// Scss Imports
import './../SignUp.scss';
// Images Imports
import authLogo from '../../../../assets/images/logo/auth-logo.svg'
// Material Ui Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function FirstStep(props) {

return (

    <div className="auth-holder">
      <Grid container justifyContent="center" direction="column" alignItems="center">
        <Grid item xs={4} pt={'60px'}>
          <div className="auth-box">
            <img src={authLogo} className="auth-top-logo" alt="" />
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
                <InputLabel className="ipnputlabel" color={Colors.error} text={strings.enterAValidEmailAddress}></InputLabel>
              </Box>
              <Box pt={'6px'}>
               <PrimaryLarge text={strings.continue} color={Colors.white} />
              </Box>
              <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" pt={'50px'}>
                <Body text={strings.areadyHaveAnAccount} color={Colors.secondary} />
                <Body text={strings.loginToYourExistingAccount} color={Colors.blue12} cursor={'pointer'} />
              </Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="auth-box-bottom">
            <LabelWrapper padding={'90px 0 0 0'}>
              <Body text={strings.privacyTerms} color={Colors.gray69} padding={'0 4px'} cursor={'pointer'} />
              <Body text={'|'} color={Colors.gray69} padding={'0 2px'} />
              <Body text={strings.contactUs} color={Colors.gray69} fontWeight={'600'} padding={'0 4px'} cursor={'pointer'} />
            </LabelWrapper>
          </div>
        </Grid>
      </Grid>
    </div>

  )
}

export default FirstStep
