import * as React from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, CancelLarge } from '../../../../assets/styles/Buttons';
import { Heading6S, Body } from '../../../../assets/styles/Labels';
// Import scss
import './MyEmployees.scss';
// Import Pages

// Images Imports
import myInputSearchIcon from '../../../../assets/images/structure/inputsearch-icon.svg'
import myButtonIcon from '../../../../assets/images/structure/me-button-icon.svg'

// Material Ui Imports
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

// local strings Imports
const strings = require('../../../../localisation_en.json')

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

function MyEmployees(props) {
    
    return(
        <div className='mmh-container'>
            <div className='my-employees-holder'>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
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
                <div className=''>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEmployees