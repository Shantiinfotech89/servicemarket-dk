import * as React from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, BackLarge } from '../../../../assets/styles/Buttons';
import { Heading1B, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// Scss Imports
import './../SignUp.scss';
// Images Imports
import authLogo from '../../../../assets/images/logo/auth-logo.svg'
// Material Ui Imports
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckIcon from '@mui/icons-material/Check';
import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Autocomplete from '@mui/material/Autocomplete';

// local strings Imports
const strings = require('../../../../localisation_en.json')
const names = [
  'Nails',
  'Makeup',
  'Haircut',
];
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const ChooseAddress = [
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
  { label: '1901 Thornridge Cir. Shiloh, Hawaii 81063'},
];

function ThirdStep(props) {

const [fcategory, setFcategory] = React.useState('');
const handleChange = (event) => {
  setFcategory(event.target.value);
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

return (

    <div className="auth-holder">
      <Grid container justifyContent="center" direction="column" alignItems="center">
        <Grid item xs={6} pt={'60px'}>
          <div className="auth-box ab-660">
            <img src={authLogo} className="auth-top-logo" alt="" />
            <Heading1B text={strings.companyDetails} color={Colors.black1d} padding={'0 0 8px 0'} textAlign={'center'} />
            <LabelWrapper justifyContent={'center'} padding={'0 0 30px 0'} textAlign={'center'}>
              <Body text={strings.pleaseFillInAllTheRequiredDetails} color={Colors.black45} padding={'0 2px'} />
            </LabelWrapper>
            <div className="user-service-holder">
            <Grid container columnSpacing={2}>
              <Grid item xs={12}>
                  <Box className="form-group">
                      <Autocomplete
                        variant="filled"
                        className="textfield"
                        disablePortal
                        id="combo-box-demo"
                        options={ChooseAddress}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField variant="filled" required {...params} label="Address" />}
                      />
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <FormControl className='selectfield' required variant="filled" sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-filled-label">Primary Category</InputLabel>
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
                  </Box>
              </Grid>
              <Grid item xs={6}>
                  <Box className="form-group">
                    <FormControl className='selectfield' required variant="filled" sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-checkbox-label">Secondary Category</InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={sCategory}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                       
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={sCategory.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
              </Grid>
            </Grid>
              <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <Checkbox />
                <Body text={strings.iAgreeTo} color={Colors.secondary} padding={'0 2px 0 2px'} />
                <Body text={strings.termsAndConditions} color={Colors.secondary} padding={'0 2px'} cursor={'pointer'} className="text-underline" />
              </Box>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} pt={'16px'}>
                <BackLarge width={'140px'} text={strings.back} color={Colors.white} />
                <PrimaryLarge width={'140px'} text={strings.signUp} color={Colors.white} />
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>

  )
}

export default ThirdStep
