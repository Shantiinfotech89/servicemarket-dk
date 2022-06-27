// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import { Heading1B, Heading4B, LabelWrapper, Body } from '../../../assets/styles/Labels';
// Scss Imports
import './SignUp.scss';
// Images Imports
import authLogo from '../../../assets/images/logo/auth-logo.svg'
import nextArrowBlack from '../../../assets/images/structure/next-arrow-black.svg'
// Material Ui Imports
import Grid from '@mui/material/Grid';

// local strings Imports
const strings = require('../../../localisation_en.json')

function SignUp(props) {

return (

    <div className="auth-holder">
      <Grid container justifyContent="center" direction="column" alignItems="center">
        <Grid item xs={4} pt={'60px'}>
          <div className="auth-box">
            <img src={authLogo} className="auth-top-logo" alt='pics' />
            <Heading1B text={strings.signUp} color={Colors.black1d} padding={'0 0 8px 0'} textAlign={'center'} />
            <LabelWrapper justifyContent={'center'} padding={'0 0 30px 0'} textAlign={'center'}>
              <Body text={strings.weSuggestUsingThe} color={Colors.black45} padding={'0 2px'} />
              <Body text={strings.emailAddressYouUseAtWork} color={Colors.black45} fontWeight={'600'} padding={'0 2px'} />
            </LabelWrapper>
            <div className="user-service-holder">
              <div  className="user-box">
                <input type={'radio'} className="ub-radio-input" id="for-u" name="for-us" />
                <label className="user-box-label" htmlFor={'for-u'}>
                  <div className="">
                    <Heading4B text={strings.ForUser_Customer} color={Colors.secondary} padding={'0 0 4px 0'} className="ubl-h4" />
                    <Body text={strings.BookAnyServicesNearYou} color={Colors.secondary} className="ubl-body" />
                  </div>
                  <img src={nextArrowBlack} className="ush-nab-icon" alt='pics' />
                </label>
              </div>
              <div className="user-box">
                <input type={'radio'} className="ub-radio-input" id="for-s" name="for-us" />
                <label className="user-box-label" htmlFor={'for-s'}>
                  <div className="">
                    <Heading4B text={strings.forServiceProvider} color={Colors.secondary} padding={'0 0 4px 0'} className="ubl-h4" />
                    <Body text={strings.manageAndGrowYourBusiness} color={Colors.secondary} className="ubl-body" />
                  </div>
                  <img src={nextArrowBlack} className="ush-nab-icon" alt='pics' />
                </label>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="auth-box-bottom">
            <LabelWrapper padding={'125px 0 0 0'}>
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

export default SignUp
