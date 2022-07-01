// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg'
// Imports Material Ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
// local strings Imports
const strings = require('../../../localisation_en.json')

function UpdateChangeCard(props) {
  return (
    <div className="ph-container-box">
      <div className="ph-paper-box width470">
        <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
        <Heading2B text={strings.Update_ChangeCard} color={Colors.black1d}  margin={'0px 0px 8px 0px'} />
        <Body text={strings.Youcanupdate_changeyourcardhere} color={Colors.black45} margin={'0  0px 20px 0'} />
        <form>
          <Grid container spacing={0}>
              <Grid item xs={12}>
                <Box className="form-group" margin={'0px 0px 0px 0px'}>
                  <TextField
                    className="textfield"
                    label={strings.CardNumber}
                    variant="filled"
                    placeholder="Enter Here"
                    required
                  />
                </Box>
              </Grid>
              <Grid item xs={6} pr={1}>
                <Box className="form-group" margin={'0px 0px 0px 0px'}>
                  <TextField
                    className="textfield"
                    label={strings.ExpiryDate}
                    variant="filled"
                    placeholder="Enter Here"
                    required
                  />
                </Box>
              </Grid>
              <Grid item xs={6} pl={1}>
                <Box className="form-group" margin={'0px 0px 0px 0px'}>
                  <TextField
                    className="textfield"
                    label={strings.CVV}
                    variant="filled"
                    placeholder="Enter Here"
                    required
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className="form-group" margin={'0px 0px 14px 0px'}>
                  <TextField
                    className="textfield"
                    label={strings.CardHolderName}
                    variant="filled"
                    placeholder="Enter Here"
                    required
                  />
                </Box>
              </Grid>
          </Grid>

          <PrimaryLarge text={strings.submit} color={Colors.white} />
        </form>
    </div>
  </div>
  )
}

export default UpdateChangeCard
