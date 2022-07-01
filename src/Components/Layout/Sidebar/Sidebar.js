import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { MAIN_COMPONENTS_STATE,POPUP_TYPE } from "../../../Helpers/Enums";
// import { POPUP_TYPE } from '../../../Helpers/Enums'
// Pages Imports
import AllPopups from '../../../Popups/AllPopups';
// Images Imports
import sDashboardIcon from '../../../assets/images/structure/s-dashboard.svg'
import sDatepickerIcon from '../../../assets/images/structure/s-datepicker.svg'
import sCategoryIcon from '../../../assets/images/structure/s-category.svg'
import sUserIcon from '../../../assets/images/structure/s-user.svg'
import sSubscriptionIcon from '../../../assets/images/structure/s-subscription.svg'
import sLogoutIcon from '../../../assets/images/structure/s-logout.svg'
// Import scss
import './Sidebar.scss';

function Sidebar(props) {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState("");
    const [activeState, setActiveState] = useState("");
    let history = useHistory();

    function logoutPopupOpen() {
      setPopupType(POPUP_TYPE.LOGOUT_MODAL);
      setPopupOpen(true);
    }
    return(
      <>
        <div className="sidebar-holder">
            <div className=''>
                <div className={
                        activeState === MAIN_COMPONENTS_STATE.DASHBOARD
                        ? "sh-menu-list active"
                        : "sh-menu-list"
                    }
                    onClick={() => {
                        setActiveState(MAIN_COMPONENTS_STATE.DASHBOARD);
                        props.setCurrentOpenPage(MAIN_COMPONENTS_STATE.DASHBOARD);
                        window.localStorage.setItem("sidebar", MAIN_COMPONENTS_STATE.DASHBOARD);
                        history.push({
                        pathname: "/main-app",
                        search: "?dashboard",
                        });
                    }}
                >
                    <img src={sDashboardIcon} className="sh-menu-icon" alt='icon' />
                </div>
                <div className={
                        activeState === MAIN_COMPONENTS_STATE.BOOKINGCALENDAR
                        ? "sh-menu-list active"
                        : "sh-menu-list"
                    }
                    onClick={() => {
                        setActiveState(MAIN_COMPONENTS_STATE.BOOKINGCALENDAR);
                        props.setCurrentOpenPage(MAIN_COMPONENTS_STATE.BOOKINGCALENDAR);
                        window.localStorage.setItem("sidebar", MAIN_COMPONENTS_STATE.BOOKINGCALENDAR);
                        history.push({
                        pathname: "/main-app",
                        search: "?booking-calendar",
                        });
                    }}
                >
                    <img src={sDatepickerIcon} className="sh-menu-icon" alt='icon' />
                </div>
                <div className='sh-menu-list'>
                    <img src={sCategoryIcon} className="sh-menu-icon" alt='icon' />
                </div>
                <div className='sh-menu-list'>
                    <img src={sUserIcon} className="sh-menu-icon" alt='icon' />
                </div>
                <div className='sh-menu-list'>
                    <img src={sSubscriptionIcon} className="sh-menu-icon" alt='icon' />
                </div>
            </div>
            <div className=''>
                <div className='sh-menu-list'  onClick={() => logoutPopupOpen()}>
                    <img src={sLogoutIcon} className="sh-menu-icon" alt='icon' />
                </div>
            </div>
        </div>
          <AllPopups
              popupIsOpen={popupOpen}
              style={popupType}
              closePopup={() => setPopupOpen(false)}
          />
      </>
    )
}

export default Sidebar
