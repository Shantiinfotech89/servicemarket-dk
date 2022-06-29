// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B,  } from '../../../assets/styles/Labels';
import { PrimaryLarge ,BackLarge} from '../../../assets/styles/Buttons';

// Images Imports
import UserDeleteIcon from '../../../assets/images/structure/user-dummy-icon.svg'



import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';

// local strings Imports
const strings = require('../../../localisation_en.json')

function DeleteModal(props) {

  const [open, setOpen] = React.useState(false);

  const deleteModalPopupOpen = () => {
    setOpen(true);
  };

  const popupClose = () => {
    setOpen(false);
  };
return (
  <>
      <Button variant="outlined" onClick={deleteModalPopupOpen}>
        delete Modal
      </Button>
      <Dialog open={open} onClose={popupClose} className={'maxwidth430'}>
        <DialogContent>
          <img src={UserDeleteIcon} alt="..." width={'48px'}/>
          <Heading2B text={strings.areYouSureYouWantToDeleteThisService} margin={'12px 0px 20px 0px '} />
          <Box display={'flex'}>
            <PrimaryLarge text={strings.yes} color={Colors.white} margin={'0px 20px 0px 0px '} width={'140px'} />
            <BackLarge text={strings.no} color={Colors.gray61} margin={'0px 0px 0px 0px '} width={'140px'} onClick={popupClose} />
          </Box>
        </DialogContent>
      </Dialog>
      </>
  )
}

export default DeleteModal
