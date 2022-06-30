import React from 'react';
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

// local strings Imports
const strings = require('../../../localisation_en.json')

function Header(props) {

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
                <img src={headerLogo} alt="picture" className='header-logo' />
                <span className='dasboard-name'>{strings.serviceMarket}</span>
            </div>
            <div className='header-right'>
                <div className='h-services-box'>
                    <div className='h-sb-right'>
                        <Small text={strings.AddYourServices} color={Colors.white} fontWeight={'600'} margin={'0 0 0px 0'} />
                        <Smallest text={strings.YouHaveToAddYourServicesFirst} color={Colors.white} margin={'0 0 0px 0'} />
                    </div>
                </div>
                <div className='notification-box'>
                    <img src={notificationIcon} alt="picture" className='notification-icon' />
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
                        <img src={userProfileImg} alt="picture" className='user-profile-img' />
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
                        <MenuItem onClick={handleClose}> <img src={myProfileIcon} alt="picture" className='profile-dropd-icon' /> {strings.myProfile}</MenuItem>
                        <MenuItem onClick={handleClose}> <img src={settingIcon} alt="picture" className='profile-dropd-icon' /> {strings.settings}</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )

}

export default Header