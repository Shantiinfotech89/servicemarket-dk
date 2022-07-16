// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Heading4B, Heading5B, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg';
import visaMasterCard from '../../../assets/images/structure/visa-master-card.png';
import americanCard from '../../../assets/images/structure/american-card.png';

// import mui material
import { Box, Divider, Typography, TextField, Grid } from '@mui/material';
// local strings Imports
const strings = require('../../../localisation_en.json')

function PaymentSubscription(props) {
  return (
    <div className="ph-container-box">
      <div className="ph-paper-box width470" style={{padding: '24px 24px 24px 24px'}}>
        <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
        <Heading2B text={strings.subscriptionPayment} color={Colors.black1d}  margin={'0px 5px 10px 0px'} />
        <Body text={strings.Youhavetopaysubscriptionamountviaenterbelowdetails} color={Colors.black45} margin={'0  0px 30px 0'} />
        <Box className='gray-box'>
            <Box display={'flex'} justifyContent={'space-between'} >
                <Heading5B color={Colors.black1d} text={strings.PayableAmount} />
                <Heading4B color={Colors.primary} text={'200.00 Kr'} />
            </Box>
            <Body color={Colors.black45} text={strings.AdvertiseBusinessPlan} />
            <Divider />
            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                <Typography fontSize={'12px'} color={Colors.gray61}>{strings.SecureCreditCardPaymentThisisasecure128bitSSLencryptedpayment}</Typography>
                <img src={visaMasterCard} alt=".." />
                <img src={americanCard} alt=".." />
            </Box>
        </Box>
        <form>
            <Grid container columnSpacing={'20px'}>
                <Grid item sm={12}>
                    <Box className="form-group">
                        <TextField
                        className="textfield"
                        label="Card Number"
                        variant="filled"
                        placeholder="Enter Here"
                        required
                        />
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box className="form-group">
                        <TextField
                        className="textfield"
                        label="Expiry Date"
                        variant="filled"
                        placeholder="Enter Here"
                        required
                        />
                    </Box>
                </Grid>
                <Grid item sm={6}>
                    <Box className="form-group">
                        <TextField
                        className="textfield"
                        label="CVV"
                        variant="filled"
                        placeholder="Enter Here"
                        required
                        />
                    </Box>
                </Grid>
                <Grid item sm={12}>
                    <Box className="form-group">
                        <TextField
                        className="textfield"
                        label="Card Holder Name"
                        variant="filled"
                        placeholder="Enter Here"
                        required
                        />
                    </Box>
                </Grid>
            </Grid>            
            <PrimaryLarge text={strings.payNow} color={Colors.white} margin={'4px 0px 0px 0px'} />
        </form>
    </div>
  </div>
  )
}

export default PaymentSubscription
