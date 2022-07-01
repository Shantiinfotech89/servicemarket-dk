import {useState} from 'react';
import { useHistory } from "react-router-dom";
import { MAIN_COMPONENTS_STATE } from "../../../Helpers/Enums";
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
    let history = useHistory();
    const [activeState, setActiveState] = useState("");
    return(
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
                <div className={
                        activeState === MAIN_COMPONENTS_STATE.MY_EMPLOYEES
                        ? "sh-menu-list active"
                        : "sh-menu-list"
                    }
                    onClick={() => {
                        setActiveState(MAIN_COMPONENTS_STATE.MY_EMPLOYEES);
                        props.setCurrentOpenPage(MAIN_COMPONENTS_STATE.MY_EMPLOYEES);
                        window.localStorage.setItem("sidebar", MAIN_COMPONENTS_STATE.MY_EMPLOYEES);
                        history.push({
                        pathname: "/main-app",
                        search: "?my-employees",
                        });
                    }}
                >
                    <img src={sUserIcon} className="sh-menu-icon" alt='icon' />
                </div>
                <div className='sh-menu-list'>
                    <img src={sSubscriptionIcon} className="sh-menu-icon" alt='icon' />
                </div>
            </div>
            <div className=''>
                <div className='sh-menu-list'>
                    <img src={sLogoutIcon} className="sh-menu-icon" alt='icon' />
                </div>
            </div>
        </div>
    )
}

export default Sidebar