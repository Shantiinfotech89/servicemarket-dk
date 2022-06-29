// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';
import { Heading1B, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// Scss Imports
import './../SignUp.scss';
// Images Imports
import authLogo from '../../../../assets/images/logo/auth-logo.svg'
// Material Ui Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function FourthStep(props) {

return (

    <div className="auth-holder">
      <Grid container justifyContent="center" direction="column" alignItems="center">
        <Grid item xs={4} pt={'24px'}>
          <div className="auth-box ab-660">
            <img src={authLogo} className="auth-top-logo" alt="" />
            <Heading1B text={strings.checkYourEmailForACode} color={Colors.black1d} padding={'0 0 8px 0'} textAlign={'center'} />
            <LabelWrapper justifyContent={'center'} padding={'0 0 16px 0'} textAlign={'center'}>
              <Body text={strings.weHaveSentA6CharacterCodeTo} color={Colors.black45} padding={'0 2px'} />
              <Body text={'vijay22.shantiinfotech@gmail.com.'} color={Colors.black45} fontWeight={'600'} padding={'0 2px'} />
              <Body text={strings.theCodeExpires} color={Colors.black45} padding={'0 2px'} />
              <Body text={strings.shortlySoPleaseEnterItSoon} color={Colors.black45} padding={'0 2px'} />
            </LabelWrapper>
            <div className="user-service-holder">
              <Box className="form-group">
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'} mb={'20px'}>
                  <Box className='otp-ipt-grp1'>
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                  </Box>
                  <Box className='otp-ipt-grp2'>
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                  </Box>
                </Box>
              </Box>
              <LabelWrapper justifyContent={'center'} padding={'0 0 16px 0'} textAlign={'center'}>
                <Body text={strings.weHaveSentA6CharacterCodeTo} color={Colors.black45} padding={'0 2px'} />
                <Body text={'+91 9827803535.'} color={Colors.black45} fontWeight={'600'} padding={'0 2px'} />
                <Body text={strings.theCodeExpires} color={Colors.black45} padding={'0 2px'} />
                <Body text={strings.shortlySoPleaseEnterItSoon} color={Colors.black45} padding={'0 2px'} />
              </LabelWrapper>
              <Box className="form-group">
                <Box display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'} mb={'20px'}>
                  <Box className='otp-ipt-grp1'>
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                  </Box>
                  <Box className='otp-ipt-grp2'>
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                    <input type={'text'} className="otp-input" placeholder='0' />
                  </Box>
                </Box>
              </Box>
              <Box pt={'4px'}>
               <PrimaryLarge text={strings.verify} color={Colors.white} className="width410" />
              </Box>
              <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" pt={'20px'}>
                <LabelWrapper justifyContent={'center'} padding={'0 0 0px 0'} textAlign={'center'}>
                  <Body text={strings.cantFindYourCode} color={Colors.gray61} padding={'0 2px'} />
                  <Body text={strings.checkYourSpamFolder} color={Colors.gray61} padding={'0 2px'} />
                </LabelWrapper>
                <Body text={strings.resendCode} color={Colors.primary} cursor={'pointer'} />
              </Box>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="auth-box-bottom">
            <LabelWrapper padding={'20px 0 0 0'}>
              <Body text={strings.privacyTerms} color={Colors.gray61} padding={'0 4px'} cursor={'pointer'} />
              <Body text={'|'} color={Colors.gray61} padding={'0 2px'} />
              <Body text={strings.contactUs} color={Colors.gray61} fontWeight={'600'} padding={'0 4px'} cursor={'pointer'} />
            </LabelWrapper>
          </div>
        </Grid>
      </Grid>
    </div>

  )
}

export default FourthStep
