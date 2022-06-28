// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, LabelInput, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';

// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'



import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// local strings Imports
const strings = require('../../../localisation_en.json')

function VerifyOTP(props) {

  const [open, setOpen] = React.useState(false);

  const otpPopupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };
return (
  <>
      <Button variant="outlined" onClick={otpPopupOpen}>
        {strings.verifyOTP}
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth470'}>
        <DialogContent>
          <img src={ModalClose} alt="..." className="modal-close" onClick={popupClose} />
          <Heading2B text={strings.verifyOTP} color={Colors.black1d}  margin={'0  0px 8px 0'} />
          <Body text={strings.enterTheCodeSentToYourEmailAddress} color={Colors.black45} margin={'0  0px 40px 0'} />
          <form>
            <Box className="form-group" margin={'0px 0px 10px 0px'}>
              <TextField
                className="textfield"
                label="OTP input"
                variant="filled"
                placeholder="Enter Here"
                required
              />
              <LabelInput className="ipnputlabel" color={Colors.error} text={strings.enterAValidEmailAddress}></LabelInput>
            </Box>
            <PrimaryLarge text={strings.verify} color={Colors.white} />
            <Box display="flex" justifyContent="space-between" alignItems="center" pt={'30px'}>
              <Body text={strings.resendOTP} color={Colors.blue12} cursor={'pointer'}  />
              <Body text={'00:15'} color={Colors.secondary} margin={'0px 0px 0px 0px'} />
            </Box>
          </form>
        </DialogContent>
      </Dialog>
      </>
  )
}

export default VerifyOTP
