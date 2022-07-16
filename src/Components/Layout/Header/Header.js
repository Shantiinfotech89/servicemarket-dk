import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import { MAIN_COMPONENTS_STATE } from "../../../Helpers/Enums";
// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import { Small, Smallest } from '../../../assets/styles/Labels';
// Import scss
import './Header.scss';
// Import Images
import headerLogo from '../../../assets/images/logo/header-logo.svg'
import userProfileImg from '../../../assets/images/product/user-profile.png'
import myProfileIcon from '../../../assets/images/structure/my-profile-icon.svg'
import settingIcon from '../../../assets/images/structure/setting-icon.svg'
import notificationIcon from '../../../assets/images/structure/notification-icon.svg'

// Import Material UI
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

// local strings Imports
const strings = require('../../../localisation_en.json')

function Header(props) {
let history = useHistory();
const [activeState, setActiveState] = useState("");
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};

    return(
        <div className="header-holder">
            <div className='header-left'>
                <img src={headerLogo} alt="..." className='header-logo' />
                <span className='dasboard-name'>{strings.serviceMarket}</span>
            </div>
            <div className='header-right'>
                <div className='h-services-box'>
                    <Box className="top-progress" m={'auto'}>
                        <Progress type="circle" strokeWidth={7} width={40} percent={60} status="default"
                        theme={{
                            success: {
                                color: '#FFFFFF'
                            },
                            active: {
                                color: '#FFFFFF'
                            },
                            default: {
                                color: '#FFFFFF'
                            }
                            }}
                        />
                    </Box>
                    <div className='h-sb-right'>
                        <Small text={strings.AddYourServices} color={Colors.white} fontWeight={'600'} margin={'0 0 0px 0'} />
                        {/*
                            AddYourCoverImage
                            AddYourPortfolioImages
                            AddYourWorkingHours
                        */}
                        <Smallest text={strings.YouHaveToAddYourServicesFirst} color={Colors.white} margin={'0 0 0px 0'} />
                        {/*
                            YouHaveToAddYourCoverImage
                            YouHaveToAddPortfolioImages
                            YouHaveToAddYourWorkingHours
                        */}
                    </div>
                </div>
                <div className='notification-box'>
                    <img src={notificationIcon} alt="..." className='notification-icon' />
                </div>
                <div className='profile-box'>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        <img src={userProfileImg} alt="..." className='user-profile-img' />
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem
                            onClick={() => {
                                setActiveState(MAIN_COMPONENTS_STATE.PROFILE);
                                props.setCurrentOpenPage(MAIN_COMPONENTS_STATE.PROFILE);
                                window.localStorage.setItem("sidebar", MAIN_COMPONENTS_STATE.PROFILE);
                                history.push({
                                pathname: "/main-app",
                                search: "?profile",
                                });
                            }}
                        > <img src={myProfileIcon} alt="..." className='profile-dropd-icon' />{strings.myProfile}</MenuItem>
                        <MenuItem onClick={handleClose}><img src={settingIcon} alt="..." className='profile-dropd-icon' />{strings.settings}</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )

}

export default Header
