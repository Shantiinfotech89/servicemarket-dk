import * as React from 'react';
// Styles Imports
// import * as Colors from '../../../../assets/styles/Colors';
// import { PrimarySmall, CancelLarge } from '../../../../assets/styles/Buttons';
// import { Heading6S, Body } from '../../../../assets/styles/Labels';
// Import scss
import './BookingCalendar.scss';
// Import Pages

// Images Imports
import myButtonIcon from '../../../../assets/images/structure/plus-button-icon.svg';
import BookingCalenderIcon from '../../../../assets/images/structure/booking-calender-icon.svg';
import BookingListIcon from '../../../../assets/images/structure/booking-list-icon.svg';

// Material Ui Imports
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import ManageWorkingHours from './ManageWorkingHours/ManageWorkingHours';
import CalenderView from './CalenderView/CalenderView';

// local strings Imports
// const strings = require('../../../../localisation_en.json')

function BookingCalendar(props) {

    
    const [month, setMonth] = React.useState('');
    const handleChangeMonth = (event) => {
      setMonth(event.target.value);
    };

    const [selectHuman, setselectHuman] = React.useState('');
    const handleChangeselectHuman = (event) => {
      setselectHuman(event.target.value);
    };
    
    return(
        <>
        {/* <div className='mmh-container'>
             <div className='bookings-holder'>
                <Box className='booking-top-row'>
                    <Select size="small"
                        value={month}
                        onChange={handleChangeMonth}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">Month</MenuItem>
                        <MenuItem value="January">January</MenuItem>
                    </Select>
                    <Select size="small"
                        value={selectHuman}
                        onChange={handleChangeselectHuman}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">Jane Cooper</MenuItem>
                        <MenuItem value="Jane Cooper">Jane Cooper</MenuItem>
                    </Select>
                    <Button variant="contained" ><img src={myButtonIcon} alt=".." className='plus-icon' /> {'Working Hours'}</Button>
                    <img src={BookingListIcon} alt="..." className='list-calender-icon' />
                    <img src={BookingCalenderIcon} alt="..." className='list-calender-icon' style={{display: 'none'}} />
                </Box>            
                <CalenderView />
            </div> 
        </div> */}

        <ManageWorkingHours />
        </>
    )   
}

export default BookingCalendar