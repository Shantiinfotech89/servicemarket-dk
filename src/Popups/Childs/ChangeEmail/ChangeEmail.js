// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, LabelInput, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'
// Imports Material Ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// local strings Imports
const strings = require('../../../localisation_en.json')

function ChangeEmail(props) {

  return (
    <div className="ph-container-box">
      <div className="ph-paper-box width470">
        <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
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
            <LabelInput className="ipnputlabel" color={Colors.error} text={strings.enterAValidEmailAddress}></LabelInput>
          </Box>
          <PrimaryLarge text={strings.submit} color={Colors.white} />
        </form>
      </div>
    </div>
  )
}

export default ChangeEmail
