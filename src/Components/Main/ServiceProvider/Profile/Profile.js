import * as React from 'react';
import { useState } from "react";
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';
import { Heading6S, LabelWrapper,  Small, Smallest } from '../../../../assets/styles/Labels';
import { POPUP_TYPE } from '../../../../Helpers/Enums';

// Scss Imports
// Import scss
import './Profile.scss';
// Pages Imports
import AllPopups from '../../../../Popups/AllPopups';
// Images Imports
import profileDefault from '../../../../assets/images/structure/profile-default.svg';
import prflDetailIcon from '../../../../assets/images/structure/prfl-detail-icon.svg';
import bussDetailIcon from '../../../../assets/images/structure/buss-detail.svg';
import portfolioDetailIcon from '../../../../assets/images/structure/portfolio-detail.svg';
import paymentDetailIcon from '../../../../assets/images/structure/payment-detail.svg';
import circleAddBlueIcon from '../../../../assets/images/structure/circle-add-blue.svg';
import infoCircleIcon  from '../../../../assets/images/structure/info-circle-outlined.svg';
import deleteIcon  from '../../../../assets/images/structure/delete-icon-black-opacity.svg';
import uploadedImg  from '../../../../assets/images/product/react-img1.png';

// Material Ui Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckIcon from '@mui/icons-material/Check';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import PhoneInput from 'react-phone-input-2';

// local strings Imports
const strings = require('../../../../localisation_en.json');

const names = [
  'Nails',
  'Makeup',
  'Haircut',
  'Nails lorem',
  'Makeup lorem',
  'Haircut lorem',
];

function Profile(props) {
  const [fcategory, setFcategory] = React.useState('');
  const handleChange = (event) => {
    setFcategory(event.target.value);
  };
  

  const [category, setCategory] = React.useState([]);
  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [country, setCountry] = React.useState('');
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState("");
  function changeEmailPopupOpen() {
    setPopupType(POPUP_TYPE.CHANGE_EMAIL);
    setPopupOpen(true);
  }
  function changePhoneNoPopupOpen() {
    setPopupType(POPUP_TYPE.CHANGE_PHONE_NO);
    setPopupOpen(true);
  }

    return(
      <>
        <div className='mmh-container'>
        <Alert
         action={
           <IconButton
             aria-label="close"
             color="inherit"
             size="small">
             <CloseIcon fontSize="inherit" />
           </IconButton>
         }>
         {strings.yourPasswordHasBeenSuccessfullyChanged}
       </Alert>
            <div className='profile-main-holder'>
                <Grid container columnSpacing={2}>
                    <Grid item xs={3}>
                        <div className="upload-img-block">
                            <label className="upload-img-box">
                                <img src={profileDefault} alt=".." className="upload-img" />
                                <input type="file" />
                            </label>
                            <Heading6S text={'Jane Cooper'} color={Colors.black1d} textAlign={'center'} padding={'12px 0 0 0'} />
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={prflDetailIcon} alt=".."  />
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
                                        <Small text={strings.change} color={Colors.primary} className="change-text" onClick={() => changeEmailPopupOpen()} />
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
                                        <Small text={strings.change} color={Colors.primary} className="change-text" onClick={() => changePhoneNoPopupOpen()} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={bussDetailIcon} alt=".." />
                                <Heading6S text={strings.businessDetail} color={Colors.black1d} textAlign={'center'} padding={'0px 0 0 8px'} fontWeight={'700'} />
                            </LabelWrapper>
                            <Grid container columnSpacing={2} mt={'25px'}>
                                <Grid item xs={12}>
                                    <label className="upload-cover-img">
                                        <Box display={'flex'} alignItems={'center'} marginBottom={'10px'}>
                                            <img src={circleAddBlueIcon} alt=".." className={'plus-icon'}  />
                                            <Small text={strings.addCoverImage} color={Colors.primary} fontWeight={'600'}  />
                                        </Box>
                                        <Smallest text={strings.addCoverImageHereJPGPNGFormat} color={Colors.gray61}  />
                                        <Smallest text={strings.imageRatio} color={Colors.gray61}  />
                                        <input type="file" />
                                    </label>

                                    <label className="uploaded-cover-img">
                                      <img src={deleteIcon} alt=".." className={'delete-icon'} />
                                      <img src={uploadedImg} alt=".." className={'uploaded-img'}  />
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
                                    <Box className="form-group add-info-tool">
                                        <FormControl className='selectfield' required variant="filled">
                                          <InputLabel id="demo-simple-select-filled-label">{strings.businessCategory}</InputLabel>
                                          <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            value={fcategory}
                                            onChange={handleChange}
                                          >
                                            <MenuItem value={10}>Therapists <CheckIcon /></MenuItem>
                                            <MenuItem value={20}>Salon <CheckIcon /></MenuItem>
                                            <MenuItem value={30}>Spa <CheckIcon /></MenuItem>
                                          </Select>
                                        </FormControl>
                                        <Tooltip title="Lorem ipsum dolor sit amet elit. Nullam nulla sit sed leo." arrow className="info-box">
                                          <img src={infoCircleIcon} alt=".."  />
                                        </Tooltip>
                                    </Box>
                                </Grid>
                                <Grid item xs={6}>
                                  <Box className="form-group add-info-tool">
                                      <FormControl className='selectfield' required variant="filled">
                                        <InputLabel id="demo-simple-select-filled-label">{strings.secondaryCategory}</InputLabel>
                                        <Select
                                          labelId="demo-simple-select-filled-label"
                                          id="demo-simple-select-filled"
                                          multiple
                                          value={category}
                                          onChange={handleChange2}
                                        >
                                          {names.map((name) => (
                                            <MenuItem
                                              key={name}
                                              value={name}
                                            >
                                              {name}
                                            </MenuItem>
                                            ))}
                                        </Select>
                                        <Tooltip title="Lorem ipsum dolor sit amet elit. Nullam nulla sit sed leo." arrow className="info-box">
                                          <img src={infoCircleIcon} alt=".."  />
                                        </Tooltip>
                                      </FormControl>
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
                                      <FormControl className='selectfield' required variant="filled" sx={{ m: 1, minWidth: 120 }}>
                                        <InputLabel id="country-filled-label">{strings.country}</InputLabel>
                                        <Select
                                          labelId="country-filled-label"
                                          id="country-filled"
                                          value={country}
                                          onChange={handleChangeCountry}
                                        >
                                          <MenuItem value={10}>option1 <CheckIcon /></MenuItem>
                                          <MenuItem value={20}>option2 <CheckIcon /></MenuItem>
                                          <MenuItem value={30}>option3 <CheckIcon /></MenuItem>
                                        </Select>
                                      </FormControl>
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={paymentDetailIcon} alt=".." />
                                <Heading6S text={strings.paymentDetails} color={Colors.black1d} textAlign={'center'} padding={'0px 0 0 8px'} fontWeight={'700'} />
                            </LabelWrapper>
                            <Grid container spacing={'4px'} mt={'15px'}>
                                <Grid item xs={4}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Visa" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Dankort" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Mastercard" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControlLabel control={<Checkbox  />} label="Cash" />
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControlLabel control={<Checkbox  />} label="Mobilepay" />
                                </Grid>
                            </Grid>
                        </div>
                        <div className="white-box">
                            <LabelWrapper display={'flex'} alignItems={'center'}>
                                <img src={portfolioDetailIcon} alt=".." />
                                <Heading6S text={strings.portfolio} color={Colors.black1d} textAlign={'center'} padding={'0px 0 0 8px'} fontWeight={'700'} />
                            </LabelWrapper>
                            <Grid container spacing={1} mt={'10px'}>
                              <Grid item xs={12}>
                                  <label className="upload-cover-img">
                                      <Box display={'flex'} alignItems={'center'} marginBottom={'10px'}>
                                          <img src={circleAddBlueIcon} alt=".." className={'plus-icon'}  />
                                          <Small text={strings.addPortfolioImage} color={Colors.primary} fontWeight={'600'}  />
                                      </Box>
                                      <Smallest text={strings.addPortfolioText} color={Colors.gray61}  />
                                      <Smallest text={strings.imageRatio4_3} color={Colors.gray61}  />
                                      <input type="file" />
                                  </label>

                                  <label className="uploaded-cover-img">
                                    <img src={deleteIcon} alt=".." className={'delete-icon'} />
                                    <img src={uploadedImg} alt=".." className={'uploaded-img'}  />
                                  </label>
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
        <AllPopups
            popupIsOpen={popupOpen}
            style={popupType}
            closePopup={() => setPopupOpen(false)}
        />
        </>
    )
}

export default Profile
