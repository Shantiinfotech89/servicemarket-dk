// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg';
import addCirclePlusBlue from '../../../assets/images/structure/add_circle-plus-blue.svg';
import removeCircleRed from '../../../assets/images/structure/emove_circle-red.svg';
// Material Ui Imports
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, TextField,  } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import CheckIcon from '@mui/icons-material/Check';
// local strings Imports
const strings = require('../../../localisation_en.json')

function ManageAvailability(props) {
    const [value, setValue] = React.useState(null);
    const [starttime, setStartTime] = React.useState('');
    const [endttime, setEndTime] = React.useState('');
    const handleChange = (event) => {
    setStartTime(event.target.value);
    };
    const handleChange2 = (event) => {
        setEndTime(event.target.value);
    };
  return (
    <div className="ph-container-box">
      <div className="ph-paper-box width470">
        <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
        <Heading2B text={strings.ManageAvailability} color={Colors.black1d}  margin={'0px 5px 10px 0px'} />
        <Body text={strings.Setyouravailabilityhere} color={Colors.black45} margin={'0  0px 30px 0'} />
        <form>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker 
                    label="Date"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} className="textfield" variant="filled" required />}
                />
            </LocalizationProvider>
            <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="workingHours"
                    name="radio-buttons-group" 
                    sx={{ marginBottom: '24px' }}
                >
                <FormControlLabel value="workingHours" control={<Radio />} label={strings.workingHours} />
                <FormControlLabel value="holiday" control={<Radio />} label={strings.holiday} />
            </RadioGroup>
            <Box className='inputs-group' sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <FormControl className='selectfield' variant="filled" sx={{ maxWidth: 175 }}>
                    <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={starttime}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                        <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                        <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                        <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                    </Select>
                </FormControl>
                <FormControl className='selectfield' variant="filled" sx={{ maxWidth: 175 }}>
                    <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={endttime}
                        onChange={handleChange2}
                    >
                        <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                        <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                        <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                        <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                    </Select>
                </FormControl>
                <img src={addCirclePlusBlue} alt={'icons'} style={{ display: 'block', marginTop: '7px', cursor: 'pointer' }} className="" />
            </Box>
            <Box className='inputs-group' sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <FormControl className='selectfield' variant="filled" sx={{ maxWidth: 175 }}>
                    <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={starttime}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                        <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                        <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                        <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                    </Select>
                </FormControl>
                <FormControl className='selectfield' variant="filled" sx={{ maxWidth: 175 }}>
                    <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={endttime}
                        onChange={handleChange2}
                    >
                        <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                        <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                        <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                        <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                    </Select>
                </FormControl>
                <img src={removeCircleRed} alt={'icons'} style={{ display: 'block', marginTop: '7px', cursor: 'pointer' }} className="" />
            </Box>
            <PrimaryLarge text={strings.submit} color={Colors.white} margin={'16px 0px 0px 0px'} />
        </form>
    </div>
  </div>
  )
}

export default ManageAvailability