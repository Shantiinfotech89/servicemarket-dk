import  React,{useState} from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { Heading6S, Body } from '../../../../assets/styles/Labels';

import { SIDEBAR_TYPE } from '../../../../Helpers/Enums';

import AllSideBar from '../../../../SideBar/AllSideBar';
// Import scss
import './ManageServices.scss';
// Import Pages

import Pagination from '../../../../GlobalModule/Pagination/Pagination';
// Images Imports
import myInputSearchIcon from '../../../../assets/images/structure/inputsearch-icon.svg';
import myButtonIcon from '../../../../assets/images/structure/plus-button-icon.svg';

// Material Ui Imports
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

// local strings Imports
const strings = require('../../../../localisation_en.json')

  function createData(first_name, last_name, email, services, active_inactive) {
    return { first_name, last_name, email, services, active_inactive };
  }
  
  const rows = [
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
    createData('Haircut', 'Salon', 'Kr 40.00', '30 mins', ''),
  ];

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 32,
    height: 18,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 1,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#ffffff' : '#379F00',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(187,187,187,1)',
      boxSizing: 'border-box',
    },
  }));


function ManageServices(props) {

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const [sidebarType, setSideBarType] = useState("");

  function addServiceOpen() {
    setSideBarType(SIDEBAR_TYPE.ADD_SERVICE);
    setSideBarOpen(true);
  }
    return(
        <div className='mmh-container'>
            <div className='my-employees-holder'>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mb={'20px'}>
                    <Heading6S text={strings.manageServices} color={Colors.black1d} />
                    <Box display={'flex'} alignItems={'center'}>
                        <div className='me-inputsearch-box'>
                            <input type="text" className='me-inputsearch' placeholder={strings.searchDots} />
                            <img src={myInputSearchIcon} className='me-inputsearch-icon' alt='icons' />
                        </div>
                        <div className='me-button-box'>
                            <button className='me-button' onClick={() => addServiceOpen()}><img src={myButtonIcon} className='me-button-icon' alt='icons' /> <Body text={strings.service} color={Colors.white} padding={'0 0 0 8px'} /> </button>
                        </div>
                    </Box>
                </Box>
                <div className='main-table-holder'>
                    <div className='table-box'>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>{strings.serviceName}</TableCell>
                                <TableCell align="left">{strings.serviceCategory}</TableCell>
                                <TableCell align="left">{strings.price}</TableCell>
                                <TableCell align="left">{strings.servicesDuration}</TableCell>
                                <TableCell align="left">{strings.activate_Deactivate}</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.first_name}
                                </TableCell>
                                <TableCell align="left">{row.last_name}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.services}</TableCell>
                                <TableCell align="left"><AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} /></TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                    </div>
                </div>
                <Box>
                    <Pagination />
                </Box>
            </div>
            <AllSideBar
                sidebarIsOpen={sidebarOpen}
                style={sidebarType}
                closeSideBar={() => setSideBarOpen(false)}
            />
        </div>
    )
}

export default ManageServices
