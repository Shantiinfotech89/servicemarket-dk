// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { Heading1B,Heading3B,Heading2B, Heading6S,  Body,LabelWrapper } from '../../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';

// import header-footer
import FHeader from '../../../Layout/FHeader/FHeader';
import FFooter from '../../../Layout/FFooter/FFooter';

// import popups
import { POPUP_TYPE } from '../../../../Helpers/Enums';
import AllPopups from '../../../../Popups/AllPopups';
// Import scss
import './Subscription.scss';
// Import Pages

// Import Material UI
import { useState } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


// Import Images
import subsUser from '../../../../assets/images/structure/subs_user.svg';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function Subscription(props) {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");
  function paymentSubscriptionPopupOpen() {
    setPopupType(POPUP_TYPE.PAYMENT_SUBSCRIPTION);
    setPopupOpen(true);
  }
    return(
      <>
      <FHeader />
      <div className='frount-container'>
        <Container>
          <Grid container spacing={'30px'}>
              <Grid item sm={12}>
                  <LabelWrapper justifyContent={'center'} className={'mb-8'}>
                      <Heading1B color={Colors.black45} text={strings.ReadytogetstartedwithOur} />&nbsp;&nbsp;
                      <Heading1B color={Colors.primary}  text={strings.SubscriptionPlans} />
                  </LabelWrapper>
                  <Heading6S color={Colors.black45} fontWeight={400} textAlign={'center'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit quam viverra diam.'} />
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Box className={'subs-box active'}>
                      <Heading3B color={Colors.primary} text={strings.AdvertiseBusiness} />
                      <Heading2B color={Colors.black1d} text={'200 Kr'} margin={'14px 0px 0px 0px'} />
                      <Body color={Colors.gray61} text={strings.permonth}  />
                      <img src={subsUser} alt=".." className={'subs-user'} />
                      <Box padding={'0px 0px 18px 17px'}>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>0 {strings.Employees}</Typography>
                        <Typography variant="body2" mb={'12px'} component="div" fontSize={'12px'} color={Colors.gray61}>this subscription business can only advertise the business and cannot accept booking or add employees in the platform.</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy text'}</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy '}</Typography>
                      </Box>
                      <PrimaryLarge text={strings.choosePlan} onClick={() => paymentSubscriptionPopupOpen()} />
                  </Box>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Box className={'subs-box'}>
                      <span className='most-popular'>Most Popular</span>
                      <Heading3B color={Colors.primary} text={strings.smallBusiness} />
                      <Heading2B color={Colors.black1d} text={'247 Kr'} margin={'14px 0px 0px 0px'} />
                      <Body color={Colors.gray61} text={strings.permonth}  />
                      <img src={subsUser} alt=".." className={'subs-user'} />
                      <Box padding={'0px 0px 18px 17px'}>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>1 {strings.Employees}</Typography>
                        <Typography variant="body2" mb={'12px'} component="div" fontSize={'12px'} color={Colors.gray61}>(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor quam lectus sed sem cursus justo sed.)</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy text'}</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy '}</Typography>
                      </Box>
                      <PrimaryLarge text={strings.choosePlan} onClick={() => paymentSubscriptionPopupOpen()} />
                  </Box>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Box className={'subs-box'}>
                      <Heading3B color={Colors.primary} text={strings.mediumBusiness} />
                      <Heading2B color={Colors.black1d} text={'497 Kr'} margin={'14px 0px 0px 0px'} />
                      <Body color={Colors.gray61} text={strings.permonth}  />
                      <img src={subsUser} alt=".." className={'subs-user'} />
                      <Box padding={'0px 0px 18px 17px'}>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>4 {strings.Employees}</Typography>
                        <Typography variant="body2" mb={'12px'} component="div" fontSize={'12px'} color={Colors.gray61}>(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor quam lectus sed sem cursus justo sed.)</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy text'}</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy '}</Typography>
                      </Box>
                      <PrimaryLarge text={strings.choosePlan} onClick={() => paymentSubscriptionPopupOpen()} />
                  </Box>
              </Grid>
              <Grid item  xs={12} sm={12} md={6} lg={3} xl={3}>
                  <Box className={'subs-box'}>
                      <Heading3B color={Colors.primary} text={strings.bigBusiness} />
                      <Heading2B color={Colors.black1d} text={'647 Kr'} margin={'14px 0px 0px 0px'} />
                      <Body color={Colors.gray61} text={strings.permonth}  />
                      <img src={subsUser} alt=".." className={'subs-user'} />
                      <Box padding={'0px 0px 18px 17px'}>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>5+ {strings.Employees}</Typography>
                        <Typography variant="body2" mb={'12px'} component="div" fontSize={'12px'} color={Colors.gray61}>(Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor quam lectus sed sem cursus justo sed.)</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy text'}</Typography>
                        <Typography variant="h6" gutterBottom component="h6" fontSize={'14px'} fontWeight={600} color={Colors.black1d}>{'Lorem ipsum dummy '}</Typography>
                      </Box>
                      <PrimaryLarge text={strings.choosePlan} onClick={() => paymentSubscriptionPopupOpen()} />
                  </Box>
              </Grid>
          </Grid>

        </Container>
      </div>
      <FFooter />
      <AllPopups
            popupIsOpen={popupOpen}
            style={popupType}
            closePopup={() => setPopupOpen(false)}
        />
      </>
    )
}

export default Subscription
