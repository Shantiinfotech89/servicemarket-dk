  import * as React from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, BackLarge } from '../../../../assets/styles/Buttons';
import { Heading1B, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// import header
import FHeader from '../../../Layout/FHeader/FHeader';
// Scss Imports
import './../SignUp.scss';
// Images Imports
import infoCircleIcon  from '../../../../assets/images/structure/info-circle-outlined.svg';
import reChapcha from '../../../../assets/images/product/reChapcha.png';
// Material Ui Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import CheckIcon from '@mui/icons-material/Check';
import ListItemText from '@mui/material/ListItemText';
import Autocomplete from '@mui/material/Autocomplete';
import Tooltip from '@mui/material/Tooltip';
import { useHistory } from 'react-router-dom';
// local strings Imports
const strings = require('../../../../localisation_en.json');

const ChooseAddress = [
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
];

function ThirdStep(props) {
const history = useHistory();
const BackhandleClick = () => {
  history.push("/signup2");
}
const handleClick = () => {
  history.push("/signup4");
}
const [fCategory, setFcategory] = React.useState('');
const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setFcategory(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

const [sCategory, setSCategory] = React.useState([]);
const handleChange2 = (event) => {
  const {
    target: { value },
  } = event;
  setSCategory(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};

const [country, setCountry] = React.useState('');
const handleChangeCountry = (event) => {
  setCountry(event.target.value);
};


return (
  <>
  <FHeader />
      <div className="auth-holder">
        <Grid container justifyContent="center" direction="column" alignItems="center">
            <Grid item xs={6} pt={'0px'}>
              <div className="auth-box ab-660">
              <Heading1B text={strings.companyDetails} color={Colors.black1d} padding={'0 0 8px 0'} textAlign={'center'} />
              <LabelWrapper justifyContent={'center'} padding={'0 0 30px 0'} textAlign={'center'}>
                <Body text={strings.pleaseFillInAllTheRequiredDetails} color={Colors.black45} padding={'0 2px'} />
              </LabelWrapper>
              <div className="user-service-holder">
              <Grid container columnSpacing={2}>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <Autocomplete
                      variant="filled"
                      className="textfield"
                      disablePortal
                      id="combo-box-demo"
                      options={ChooseAddress}
                      renderInput={(params) => <TextField variant="filled" required {...params} label="Address" />}
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
                    <FormControl className='selectfield' required variant="filled" >
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
              <Grid item xs={6}>
                  <Box className="form-group add-info-tool">
                      <FormControl className='selectfield' required variant="filled">
                        <InputLabel id="demo-simple-select-filled-label">{strings.businessCategory}</InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          multiple
                          value={fCategory}
                          onChange={handleChange}
                          renderValue={(selected) => selected.join(', ')}
                        >
                          <ListSubheader>Salon</ListSubheader>
                          <MenuItem value={'Nails'}>
                            <Checkbox  />
                            <ListItemText primary={'Nails'} />
                          </MenuItem>
                          <MenuItem value={'Makeup'}>
                            <Checkbox  />
                            <ListItemText primary={'Makeup'} />
                          </MenuItem>
                          <MenuItem value={'Haircut'}>
                            <Checkbox  />
                            <ListItemText primary={'Haircut'} />
                          </MenuItem>
                          <ListSubheader>Spa</ListSubheader>
                          <MenuItem value={'Ayurvedic spa'}>
                            <Checkbox  />
                            <ListItemText primary={'Ayurvedic spa'} />
                          </MenuItem>
                          <MenuItem value={'Thai Spa'}>
                            <Checkbox  />
                            <ListItemText primary={'Thai Spa'} />
                          </MenuItem>
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
                    <InputLabel id="demo-multiple-checkbox-label">{strings.serviceCategory}</InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={sCategory}
                      onChange={handleChange2}
                      renderValue={(selected) => selected.join(', ')}
                    >
                        <ListSubheader>Salon</ListSubheader>
                        <MenuItem value={'Nails'}>
                          <Checkbox  />
                          <ListItemText primary={'Nails'} />
                        </MenuItem>
                        <MenuItem value={'Makeup'}>
                          <Checkbox  />
                          <ListItemText primary={'Makeup'} />
                        </MenuItem>
                        <MenuItem value={'Haircut'}>
                          <Checkbox  />
                          <ListItemText primary={'Haircut'} />
                        </MenuItem>
                        <ListSubheader>Spa</ListSubheader>
                        <MenuItem value={'Ayurvedic spa'}>
                          <Checkbox  />
                          <ListItemText primary={'Ayurvedic spa'} />
                        </MenuItem>
                        <MenuItem value={'Thai Spa'}>
                          <Checkbox  />
                          <ListItemText primary={'Thai Spa'} />
                        </MenuItem>
                    </Select>
                    <Tooltip title="Lorem ipsum dolor sit amet elit. Nullam nulla sit sed leo." arrow className="info-box">
                      <img src={infoCircleIcon} alt=".."  />
                    </Tooltip>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
              <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <Checkbox />
                <Body text={strings.iAgreeTo} color={Colors.gray61} padding={'0 2px 0 2px'} />
                <Body text={strings.termsAndConditions} color={Colors.primary} padding={'0 2px'} cursor={'pointer'} className="text-underline" />
              </Box>
              <Box textAlign={'left'} margin={'10px 0px 15px 0px'}>
              <img src={reChapcha} alt=".."  />
              </Box>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pt={'16px'}>
                <BackLarge width={'140px'} text={strings.back} color={Colors.white} onClick={BackhandleClick} />
                <PrimaryLarge width={'140px'} text={strings.signUp} color={Colors.white} onClick={handleClick} />
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
</>
  )
}

export default ThirdStep
