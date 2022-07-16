import React ,{useState} from 'react';
import { useHistory } from "react-router-dom";
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge } from '../../../../assets/styles/Buttons';
import { Heading4B, Heading5B, LabelWrapper, Body } from '../../../../assets/styles/Labels';
// modal
import { POPUP_TYPE } from '../../../../Helpers/Enums';
import AllPopups from '../../../../Popups/AllPopups';
// Import scss
import './MySubscription.scss';
// Import Pages
import Pagination from '../../../../GlobalModule/Pagination/Pagination';

// Images Imports
import arrowIcon from '../../../../assets/images/structure/gray-on-blue-arrow.svg';
import downloadIcon from '../../../../assets/images/structure/download-blue-icon.svg';

// Material Ui Imports
import {Box, Grid, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


// local strings Imports
const strings = require('../../../../localisation_en.json')


function createData(TrasactionID, TrasactionDate, StartEndDate, Price, Action) {
    return { TrasactionID, TrasactionDate, StartEndDate, Price, Action };
  }
  
  const rows = [
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
    createData('#121646', '1 Feb 2022', '1 Feb 2022 to 28 Feb 2022', 'Kr 40.00', ''),
  ];

function MySubscription(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState("");
    function updateChangeCard() {
        setPopupType(POPUP_TYPE.UPDATE_CHANGE_CARD);
        setPopupOpen(true);
        setAnchorEl(null);
    }
    function cancelSubscription() {
        setPopupType(POPUP_TYPE.CANCEL_SUBSCRIPTION);
        setPopupOpen(true);
        setAnchorEl(null);
    }

    let history = useHistory();
    const handleClickSubscription = () => {
        history.push("/subscription");
    }
    return(
        <div className='mmh-container'>
            <div className='my-subscription-holder'>
                <Grid container columnSpacing={'34px'}>
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Heading5B color={Colors.black1d} text={strings.mySubscription} fontWeight={700} className="top-heading" />
                        <Box className='white-box'>
                            <LabelWrapper alignItems={'center'} mb={'4px'}>
                                <Heading4B color={Colors.black1d} text={strings.AdvertiseBusiness} />
                                <span color={Colors.black1d} className='chips-primary'>Current Plan</span>
                            </LabelWrapper>
                            <LabelWrapper alignItems={'center'}>
                                <Heading5B text={'€29.00'} />
                                <Typography fontSize={'12px'}>/Monthly</Typography>
                            </LabelWrapper>
                            <Typography mt={1} mb={'58px'} color={Colors.gray61} fontSize={'12px'}>{strings.NextBillingDate} : 1 Jul 2022</Typography>
                            <LabelWrapper alignItems={'center'}>
                                <PrimaryLarge text={strings.changePlan} width={'calc(100% - 64px)'} onClick={handleClickSubscription} />
                                <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open ? 'long-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClickMenu}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="long-menu"
                                    MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleCloseMenu}
                                    PaperProps={{
                                        elevation: 0,
                                        marginLeft: 'auto',
                                        sx: {
                                          overflow: 'visible',
                                          mt: 1.5,
                                          '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                          },
                                          '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            borderTop: '1px solid var(--graybb)',
                                            borderLeft: '1px solid var(--graybb)',
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                          },
                                        },
                                      }}
                                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >                                    
                                    <MenuItem onClick={() => updateChangeCard()}>
                                    Change Card
                                    </MenuItem>
                                    <MenuItem onClick={() => cancelSubscription()}>
                                    Cancel Subscription
                                    </MenuItem>
                                </Menu>
                            </LabelWrapper>
                        </Box>
                        <Box className='white-box' display={'flex'} alignItems={'flex-end'} justifyContent={'space-between'}>
                            <div className='relative'>
                                <Body color={Colors.gray61} text={strings.PaymentMethod} />
                                <Typography color={Colors.black1d} mt={1}>{strings.CreditCard} - XXXX 4887</Typography>
                            </div>   
                            <img src={arrowIcon} alt=".."  onClick={handleClickSubscription} />            
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                        <Heading5B text={strings.TransactionHistory} fontWeight={700} className="top-heading" />
                        <div className='main-table-holder'>
                            <div className='table-box'>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>{strings.TrasactionID}</TableCell>
                                            <TableCell align="left">{strings.TrasactionDate}</TableCell>
                                            <TableCell align="left">{strings.StartEndDate}</TableCell>
                                            <TableCell align="left">{strings.Price}</TableCell>
                                            <TableCell align="left">{strings.Action}</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell component="th" scope="row">
                                                {row.TrasactionID}
                                            </TableCell>
                                            <TableCell align="left">{row.TrasactionDate}</TableCell>
                                            <TableCell align="left">{row.StartEndDate}</TableCell>
                                            <TableCell align="left">{row.Price}</TableCell>
                                            <TableCell align="left"><img src={downloadIcon} alt=".."/></TableCell>
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
                    </Grid>
                </Grid>
            </div>
            <AllPopups
                popupIsOpen={popupOpen}
                style={popupType}
                closePopup={() => setPopupOpen(false)}
            />
        </div>
    )
}

export default MySubscription