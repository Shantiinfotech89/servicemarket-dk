
import {  POPUP_TYPE } from "../../../Helpers/Enums";
// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import { PrimarySmall,PrimaryOutlineSmall } from '../../../assets/styles/Buttons';
// Pages Imports
import AllPopups from '../../../Popups/AllPopups';
// Import scss
import './FHeader.scss';
// Import Images
import headerLogo from '../../../assets/images/logo/header-logo.svg'
import userProfileImg from '../../../assets/images/product/user-profile.png'
import myProfileIcon from '../../../assets/images/structure/my-profile-icon.svg'
import settingIcon from '../../../assets/images/structure/setting-icon.svg'
import notificationIcon from '../../../assets/images/structure/notification-icon.svg'

// Import Material UI
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import "react-sweet-progress/lib/style.css";

// local strings Imports
const strings = require('../../../localisation_en.json')

function FHeader(props) {
    let history = useHistory();
    const handleClickSignUp = () => {
      history.push("/signup");
    }

    // const [activeState, setActiveState] = useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [language, setLanguage] = React.useState('');
    const handleChangeLanguage = (event) => {
      setLanguage(event.target.value);
    };

    const [popupOpen, setPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState("");

    function loginPopupOpen() {
      setPopupType(POPUP_TYPE.LOGIN);
      setPopupOpen(true);
    }

    return(
        <div className="header-holder">
            <Container>
                <div className='header-left'>
                    <img src={headerLogo} alt="..." className='header-logo' />
                    <span className='dasboard-name'>{strings.serviceMarket}</span>
                </div>
                <div className='header-right'>
                {/*before login start*/}
                <Box className={'right-align'}>
                  <PrimaryOutlineSmall text={strings.signIn} borderStyle={'solid'} width={'100px'} onClick={() => loginPopupOpen()} />
                  <PrimarySmall text={strings.signUp} color={Colors.white} width={'100px'} onClick={handleClickSignUp} />
                  <Select
                    value={language}
                    onChange={handleChangeLanguage}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value="">English</MenuItem>
                    <MenuItem value="Danish">Danish</MenuItem>
                  </Select>
                </Box>
                {/*before login end*/}

                {/*after login start*/}

                {/*after login end*/}
                </div>
            </Container>
            <AllPopups
                popupIsOpen={popupOpen}
                style={popupType}
                closePopup={() => setPopupOpen(false)}

            />
        </div>
    )

}

export default FHeader
