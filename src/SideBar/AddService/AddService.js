import  React from 'react';
// Styles Imports
// import * as Colors from '../../../../../assets/styles/Colors';
import {  Heading5B,  } from '../../assets/styles/Labels';
import { PrimaryLarge} from '../../assets/styles/Buttons';
// Images Imports
import SidebarClose from '../../assets/images/structure/modal-close-icon.svg';
import deleteIcon from '../../assets/images/structure/delete-icon.svg';
import sendIcon from '../../assets/images/structure/send-icon.svg';
// Imports Material Ui
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListSubheader from '@mui/material/ListSubheader';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';

// local strings Imports
const strings = require('../../localisation_en.json')

const names = [
  'Nails',
  'Makeup',
  'Haircut',
];
function AddService(props) {

  
const [fCategory, setFcategory] = React.useState('');
const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setFcategory(
    typeof value === 'string' ? value.split(',') : value,
  );
};

const [sDuration, setSDuration] = React.useState('');
const handleChangeDuration = (event) => {
  const {
    target: { value },
  } = event;
  setSDuration(
    typeof value === 'string' ? value.split(',') : value,
  );
};

 

  return (
    <>
    <Box className="sidebar-right">
      <img src={SidebarClose} alt="..." className="sidebar-close" onClick={() => props.closeSideBar()}  />
      <Box className="sidebar-heading">
        <Heading5B text={'Add Service'} fontWeight="700" />
      </Box>
      <Box className="sidebar-body">
        <Box className="form-group">
            <TextField
            className="textfield"
            label={strings.serviceName}
            variant="filled"
            placeholder="Enter Here"
            required
            />
        </Box>
        <Box className="form-group">
          <FormControl className='selectfield' required variant="filled">
                <InputLabel id="demo-multiple-checkbox-label">{strings.SelectServices}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={fCategory}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(', ')} >
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
        </Box>
        <Box className="form-group gray-left-form">  
            <span className='gray-left-box'>Kr</span>          
            <TextField
            className="textfield"
            label={strings.LastName}
            variant="filled"
            placeholder="Enter Here"
            required
            />
        </Box>
        <Box className="form-group">
          <FormControl className='selectfield' required variant="filled">
                <InputLabel id="demo-multiple-checkbox-label">{strings.SelectServices}</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={sDuration}
                    onChange={handleChangeDuration}
                    renderValue={(selected) => selected.join(', ')} >
                    <MenuItem value={'15 mins'}>                    
                        <ListItemText primary={'15 mins'} />
                    </MenuItem>
                    <MenuItem value={'30 mins'}>                    
                        <ListItemText primary={'30 mins'} />
                    </MenuItem>
                    <MenuItem value={'45 mins'}>                    
                        <ListItemText primary={'45 mins'} />
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box>
            <TextField 
                className="textfield textareafield"
                label={strings.ServiceDescription}
                id="outlined-textarea" 
                multiline
                rows={2}
                variant="filled"
                placeholder="Enter Here"
            />
        </Box>
        

      </Box>
      <Box className="sidebar-footer">
        <img src={deleteIcon} alt="..." className='icon48' />
        <PrimaryLarge text={strings.save} />
      </Box>
    </Box>
    </>
  )
}

export default AddService
