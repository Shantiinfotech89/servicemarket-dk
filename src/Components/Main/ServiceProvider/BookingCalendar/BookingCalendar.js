import * as React from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, CancelLarge } from '../../../../assets/styles/Buttons';
import { Heading6S, Body } from '../../../../assets/styles/Labels';
// Import scss
import './BookingCalendar.scss';
// Import Pages

// Images Imports
import addCirclePlusBlue from '../../../../assets/images/structure/add_circle-plus-blue.svg'

// Material Ui Imports
import Box from '@mui/material/Box';


// local strings Imports
const strings = require('../../../../localisation_en.json')

function BookingCalendar(props) {
    
    return(
        <div className='mmh-container'>
            <div className='manage-working-hours-holder'>
                Booking Calendar
            </div>
        </div>
    )
}

export default BookingCalendar