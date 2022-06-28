// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B,  Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';

// Images Imports
import SuccessIcon from '../../../assets/images/structure/success-icon.png'



import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

// local strings Imports
const strings = require('../../../localisation_en.json')

function SuccessModal(props) {

  const [open, setOpen] = React.useState(false);

  const successPopupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };
return (
  <>
      <Button variant="outlined" onClick={successPopupOpen}>
        {strings.successfulPasswordReset}
      </Button>

      <Dialog open={open} onClose={popupClose} className={'maxwidth420'}>
        <DialogContent>
          <img src={SuccessIcon} alt="..." className="success-icon"  />
          <Heading2B text={strings.successfulPasswordReset} color={Colors.black1d} textAlign={'center'} margin={'0  0px 8px 0'} />
          {/* Password changed successfully
           Phone No. changed successfully
           Email changed successfully*/}
          <Body text={strings.yourPasswordHasBeenSuccessfullyReset} color={Colors.black45} textAlign={'center'} margin={'0  0px 40px 0'} />

          <PrimaryLarge text={strings.close} color={Colors.white} width={'150px'} onClick={popupClose} />
        </DialogContent>
      </Dialog>
      </>
  )
}

export default SuccessModal
