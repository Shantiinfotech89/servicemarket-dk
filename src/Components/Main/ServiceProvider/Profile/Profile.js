import { useState } from "react";
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';
import { Heading6S, LabelWrapper, Body, Small, Smallest } from '../../../../assets/styles/Labels';
import { POPUP_TYPE } from '../../../../Helpers/Enums'
// Scss Imports
// Import scss
import './Profile.scss';
// Pages Imports
import AllPopups from '../../../../Popups/AllPopups';
// Images Imports
import profileDefault from '../../../../assets/images/structure/profile-default.svg'
import prflDetailIcon from '../../../../assets/images/structure/prfl-detail-icon.svg'
import bussDetailIcon from '../../../../assets/images/structure/buss-detail.svg'
import portfolioDetailIcon from '../../../../assets/images/structure/portfolio-detail.svg'
import circleAddBlueIcon from '../../../../assets/images/structure/circle-add-blue.svg'


// Material Ui Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PhoneInput from 'react-phone-input-2'

// local strings Imports
const strings = require('../../../../localisation_en.json')

function Profile(props) {
    return(
        <div className='mmh-container'>
            <div className='profile-main-holder'>
                <Grid container columnSpacing={2}>
                    <Grid item xs={3}>
                        <div className="upload-img-block">
                            <label className="upload-img-box">
                                <img src={profileDefault} className="upload-img" />
                                <input type="file" />
                            </label>
                            <Heading6S text={'Jane Cooper'} color={Colors.black1d} textAlign={'center'} padding={'12px 0 0 0'} />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={prflDetailIcon} />
                                <Heading6S text={strings.personalDetail} color={Colors.black1d} textAlign={'center'} padding={'0px 0 0 8px'} fontWeight={'700'} />
                            </LabelWrapper>
                            <Grid container columnSpacing={2} mt={'25px'}>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.ownerFirstName}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.ownerLastName}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.email}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                        <Small text={strings.change} color={Colors.primary} className="change-text" />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <PhoneInput
                                        placeholder="Phone No.*"
                                        country={'in'}
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                        />
                                        <Small text={strings.change} color={Colors.primary} className="change-text" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={bussDetailIcon} />
                                <Heading6S text={strings.businessDetail} color={Colors.black1d} textAlign={'center'} padding={'0px 0 0 8px'} fontWeight={'700'} />
                            </LabelWrapper>
                            <Grid container columnSpacing={2} mt={'25px'}>
                                <Grid item xs={12}>
                                    <label className="upload-cover-img">
                                        <img src={circleAddBlueIcon} />
                                        <Small text={strings.addCoverImage} color={Colors.primary} fontWeight={'600'}  />
                                        
                                        <Smallest text={strings.addCoverImageHereJPGPNGFormat} color={Colors.gray61}  />
                                        <Smallest text={strings.imageRatio} color={Colors.gray61}  />
                                        <input type="file" />
                                    </label>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.businessName}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box className="form-group">
                                        <TextField
                                            className="textfield textareafield"
                                            label={strings.businessDescription}
                                            multiline
                                            rows={2}
                                            variant="filled"
                                            placeholder="Enter Here"
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.websiteLink}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.VATNo}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.primaryCategory}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.secondaryCategory}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>

                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.address}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.zipcode}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.city}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.country}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={portfolioDetailIcon} />
                                <Heading6S text={strings.portfolio} color={Colors.black1d} textAlign={'center'} padding={'0px 0 0 8px'} fontWeight={'700'} />
                            </LabelWrapper>
                            <Grid container columnSpacing={2} mt={'25px'}>
                                <Grid item xs={6}>
                                    <Box className="form-group">
                                        <TextField
                                        className="textfield"
                                        label={strings.ownerFirstName}
                                        variant="filled"
                                        placeholder="Enter Here"
                                        required
                                        />
                                    </Box>
                                </Grid>
                                
                                
                                
                            </Grid>
                        </div>
                        <Box display={'flex'} justifyContent={'flex-end'} mb={'20px'}>
                            <PrimaryLarge text={strings.save} color={Colors.white} width={'140px'} />
                        </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Profile