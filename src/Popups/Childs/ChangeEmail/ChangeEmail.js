// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, InputLabel, Body } from '../../../assets/styles/Labels';
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

function ChangeEmail(props) {

  const [open, setOpen] = React.useState(false);

  const changeEmailPopupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };
return (
  <>
      <Button variant="outlined" onClick={changeEmailPopupOpen}>
        {strings.changeEmail}
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth470'}>
        <DialogContent>
          <img src={ModalClose} alt="..." className="modal-close" onClick={popupClose} />
          <Heading2B text={strings.changeEmail} color={Colors.black1d}  margin={'0  0px 8px 0'} />
          <Body text={strings.youCanChangeYourNewEmailIdHere} color={Colors.black45} margin={'0  0px 30px 0'} />
          <form>
            <Box className="form-group" margin={'0px 0px 10px 0px'}>
              <TextField
                className="textfield"
                label="Email id"
                variant="filled"
                placeholder="Enter Here"
                required
              />
              <InputLabel className="ipnputlabel" color={Colors.error} text={strings.enterAValidEmailAddress}></InputLabel>
            </Box>

            <PrimaryLarge text={strings.submit} color={Colors.white} />

          </form>
        </DialogContent>
      </Dialog>
      </>
  )
}

export default ChangeEmail
