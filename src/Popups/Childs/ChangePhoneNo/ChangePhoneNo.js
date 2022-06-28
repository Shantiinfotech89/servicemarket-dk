// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Body } from '../../../assets/styles/Labels';
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

function ChangePhoneNo(props) {

  const [open, setOpen] = React.useState(false);

  const changePhonePopupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };
return (
  <>
      <Button variant="outlined" onClick={changePhonePopupOpen}>
        {strings.changePhoneNo}
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth470'}>
        <DialogContent>
          <img src={ModalClose} alt="..." className="modal-close" onClick={popupClose} />
          <Heading2B text={strings.changePhoneNo} color={Colors.black1d}  margin={'0  0px 8px 0'} />
          <Body text={strings.youCanChangeYourNewPhoneNoHere} color={Colors.black45} margin={'0  0px 30px 0'} />
          <form>
            <Box className="form-group" margin={'0px 0px 10px 0px'}>
              <TextField
                className="textfield"
                label="Phone id"
                variant="filled"
                placeholder="Enter Here"
                required
              />
            </Box>

            <PrimaryLarge text={strings.submit} color={Colors.white} />

          </form>
        </DialogContent>
      </Dialog>
      </>
  )
}

export default ChangePhoneNo
