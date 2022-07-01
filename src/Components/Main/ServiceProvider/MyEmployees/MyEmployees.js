import * as React from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, CancelLarge } from '../../../../assets/styles/Buttons';
import { Heading6S, Body } from '../../../../assets/styles/Labels';
// Import scss
import './MyEmployees.scss';
// Import Pages
import Pagination from '../../../../GlobalModule/Pagination/Pagination';
// Images Imports
import myInputSearchIcon from '../../../../assets/images/structure/inputsearch-icon.svg'
import myButtonIcon from '../../../../assets/images/structure/me-button-icon.svg'

// Material Ui Imports
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// local strings Imports
const strings = require('../../../../localisation_en.json')

const columns = [
    
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'email', headerName: 'Email',width: 90 },
    { field: 'services', headerName: 'Services',width: 90 },
    {
      field: 'active_inactive',
      headerName: 'Active / Inactive',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'kristinwatson@gmail.com', services: 'Haircut, Haircolor', active_inactive: '' },
    
  ];

function MyEmployees(props) {
    
    return(
        <div className='mmh-container'>
            <div className='my-employees-holder'>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={'20px'}>
                    <Heading6S text={strings.myEmployees} color={Colors.black1d} />
                    <Box display={'flex'} alignItems={'center'}>
                        <div className='me-inputsearch-box'>
                            <input type="text" className='me-inputsearch' placeholder={strings.searchDots} />
                            <img src={myInputSearchIcon} className='me-inputsearch-icon' alt='icons' />
                        </div>
                        <div className='me-button-box'>
                            <button className='me-button'><img src={myButtonIcon} className='me-button-icon' alt='icons' /> <Body text={strings.employee} color={Colors.white} padding={'0 0 0 8px'} /> </button>
                        </div>
                    </Box>
                </Box>
                <div className='main-table-holder'>
                    <div className='table-box'>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={4}
                            rowsPerPageOptions={[4]}
                            
                        />
                    </div>
                </div>
                <Box>
                    <Pagination />
                </Box>
            </div>
        </div>
    )
}

export default MyEmployees