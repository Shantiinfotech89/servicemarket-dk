

// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
import { Heading1B, Heading6S,  Body, } from '../../../assets/styles/Labels';
// Pages Imports

// Import scss
import './FFooter.scss';
// Import Images
import footerLogo from '../../../assets/images/logo/footer-logo.svg';
import indeedIcon from '../../../assets/images/social/indeed-icon.svg';
import facebookIcon from '../../../assets/images/social/facebook-icon.svg';
import whastappIcon from '../../../assets/images/social/whastapp-icon.svg';
import twitterIcon from '../../../assets/images/social/twitter-icon.svg';
import instagramIcon from '../../../assets/images/social/instagram-icon.svg';

// Import Material UI
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


// local strings Imports
const strings = require('../../../localisation_en.json')

function FFooter(props) {


    return (
        <div className="footer-holder">
            <Container >
                <Box className="top-footer">
                    <div className="relative">
                        <Heading1B text={strings.subscribeToOurNewsletter} color={Colors.white} className="footer-heading1" />
                        <Heading6S text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam odio eget at libero nibh pellentesque nibh aenean orci.'} fontWeight={400} color={Colors.white} />
                    </div>
                    <div className="right-side-input-box">
                        <input type="email" placeholder="Your Email ID" />
                        <PrimaryLarge text={strings.submit} />
                    </div>
                </Box>
                <Box className="bottom-footer">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Link display={'block'}>
                                <img src={footerLogo} alt="..." className={''} />
                            </Link>
                            <Body color={Colors.black45}  className="for-line-ellips" text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet quam urna vel ultrices pellentesque suspendisse morbi nunc. '} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Heading6S text={strings.GetonBoard} fontWeight={600} color={Colors.black1d} className="footer-heading" />
                            <Link className="footer-link">{'Get your business on ServiceMarket.dk'}</Link>
                            <Link className="footer-link">{'Job'}</Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Heading6S text={'ServiceMarket.dk'} fontWeight={600} color={Colors.black1d} className="footer-heading" />
                            <Grid container>
                              <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Link className="footer-link">{strings.Contact}</Link>
                                <Link className="footer-link">{strings.Support}</Link>
                                <Link className="footer-link">{strings.Press}</Link>
                                <Link className="footer-link">{strings.serviceMarketBlog}</Link>
                              </Grid>
                              <Grid item xs={6} sm={6} md={6} lg={6}>
                                <Link className="footer-link">{strings.Accountability}</Link>
                                <Link className="footer-link">{strings.Security}</Link>
                                <Link className="footer-link">{strings.aboutUs}</Link>
                              </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box className="bottom-footer-social">
                    <Body color={Colors.black45} text={"© 2022, ServiceMarket.dk  |  All rights reserved."} />
                    <Box display={'flex'} alignItems={'center'}>
                        <Link className="footer-link">Privacy Policy</Link>&nbsp;&nbsp;|&nbsp;&nbsp;<Link className="footer-link">Terms of Use</Link>
                        <img src={indeedIcon} alt="..." className="social-icon" />
                        <img src={facebookIcon} alt="..." className="social-icon" />
                        <img src={whastappIcon} alt="..." className="social-icon" />
                        <img src={twitterIcon} alt="..." className="social-icon" />
                        <img src={instagramIcon} alt="..." className="social-icon" />
                    </Box>
                </Box>
            </Container>
        </div>
    )

}

export default FFooter
