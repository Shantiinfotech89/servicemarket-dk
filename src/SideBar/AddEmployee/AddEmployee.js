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
function AddEmployee(props) {

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
    <>
    <Box className="sidebar-right">
      <img src={SidebarClose} alt="..." className="sidebar-close" onClick={() => props.closeSideBar()}  />
      <Box className="sidebar-heading">
        <Heading5B text={'Add Employee'} fontWeight="700" />
      </Box>
      <Box className="sidebar-body">
        <Box className="form-group">
            <TextField
            className="textfield"
            label={strings.FirstName}
            variant="filled"
            placeholder="Enter Here"
            required
            />
        </Box>
        <Box className="form-group">
            <TextField
            className="textfield"
            label={strings.LastName}
            variant="filled"
            placeholder="Enter Here"
            required
            />
        </Box>
        <Box className="form-group">
            <TextField
            className="textfield"
            label={strings.email}
            variant="filled"
            placeholder="Enter Here"
            required
            />
        </Box>
        <Box className="form-group">
          <FormControl className='selectfield' required variant="filled" sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">{strings.SelectServices}</InputLabel>
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

      </Box>
      <Box className="sidebar-footer">
        <img src={deleteIcon} alt="..." className='icon48' />
        <img src={sendIcon} alt="..." className='icon48' />
        <PrimaryLarge text={strings.save} />
      </Box>
    </Box>
    </>
  )
}

export default AddEmployee
