// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';
import { Heading1B, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// import header
import FHeader from '../../../Layout/FHeader/FHeader';
// Scss Imports
import './../SignUp.scss';
// Images Imports
import authLogo from '../../../../assets/images/logo/auth-logo.svg'
// Material Ui Imports
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function FourthStep(props) {
  const history = useHistory();
  const handleClickSubscription = () => {
    history.push("/subscription");
  }
return (
  <>
  <FHeader />
      <div className="auth-holder">
      <Alert
       action={
         <IconButton
           aria-label="close"
           color="inherit"
           size="small">
           <CloseIcon fontSize="inherit" />
         </IconButton>
       }>
       {strings.resendCodeRequestSucessfullySend}
     </Alert>
        <Grid container justifyContent="center" direction="column" alignItems="center">
            <Grid item xs={6} pt={'0px'}>
              <div className="auth-box ab-660">
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
              <Box pt={'4px'} mb={3}>
                <PrimaryLarge text={strings.verify} color={Colors.white} className="width410" />
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
               <PrimaryLarge text={strings.verify} color={Colors.white} className="width410" onClick={handleClickSubscription} />
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
          <div className="auth-box-bottom">
            <LabelWrapper>
              <Body text={strings.privacyTerms} color={Colors.gray61} padding={'0 4px'} cursor={'pointer'} fontSize={'12px'} />
              <Body text={'|'} color={Colors.gray61} padding={'0 2px'} />
              <Body text={strings.contactUs} color={Colors.gray61} padding={'0 4px'} cursor={'pointer'} fontSize={'12px'} />
            </LabelWrapper>
          </div>
        </Grid>

      </Grid>
    </div>
    </>
    )
  }

export default FourthStep
