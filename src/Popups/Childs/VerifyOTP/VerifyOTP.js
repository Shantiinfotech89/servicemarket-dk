// Styles Imports
import * as Colors from '../../../assets/styles/Colors';

import {  Heading2B, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'
// Imports Material Ui
import Box from '@mui/material/Box';
// local strings Imports
const strings = require('../../../localisation_en.json')

function VerifyOTP(props) {

  return (
    <>
      <div className="ph-container-box">
        <div className="ph-paper-box width470">
          <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
          <Heading2B text={strings.verifyOTP} color={Colors.black1d}  margin={'0  0px 8px 0'} />
          <Body text={strings.enterTheCodeSentToYourEmailAddress} color={Colors.black45} margin={'0  0px 40px 0'} />
          <form>
            <Box className="form-group">
              <Box display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'} mb={'40px'}>
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
            <PrimaryLarge text={strings.verify} color={Colors.white} />
            <Box display="flex" justifyContent="space-between" alignItems="center" pt={'30px'}>
              <Body text={strings.resendOTP} color={Colors.primary} cursor={'pointer'}  />
              <Body text={'00:15'} color={Colors.black45} margin={'0px 0px 0px 0px'} />
            </Box>
          </form>
        </div>
      </div>
      </>
  )
}

export default VerifyOTP
