import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
// Import Styles
import { MAIN_COMPONENTS_STATE } from "../../../Helpers/Enums";
// Import scss
import './MidContentBox.scss';
// Import Pages
import Header from '../../Layout/Header/Header';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import Dashboard from '../../../Components/Main/ServiceProvider/Dashboard/Dashboard';
import BookingCalendar from '../../../Components/Main/ServiceProvider/BookingCalendar/BookingCalendar';
import ManageServices from '../../../Components/Main/ServiceProvider/ManageServices/ManageServices';
import MyEmployees from '../../../Components/Main/ServiceProvider/MyEmployees/MyEmployees';
import MySubscription from '../../../Components/Main/ServiceProvider/MySubscription/MySubscription';
import Profile from '../../../Components/Main/ServiceProvider/Profile/Profile';
import Subscription from '../../../Components/Main/ServiceProvider/Subscription/Subscription';
// Import Material Ui
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";

function MidContentBox(props) {
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [currentOpenPage, setCurrentOpenPage] = useState(MAIN_COMPONENTS_STATE.DASHBOARD)
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: black;
    `;
    useEffect(() => {

        if (
          history.location.pathname == "/main-app" &&
          history.location.search == "?dashboard"
        ) {
          setCurrentOpenPage(MAIN_COMPONENTS_STATE.DASHBOARD);
        } else if (
          history.location.pathname == "/main-app" &&
          history.location.search == "?BookingCalendar"
        ) {
          setCurrentOpenPage(MAIN_COMPONENTS_STATE.BOOKINGCALENDAR);
        } else {
          let sideBar = window.localStorage.getItem("sidebar");

          if (sideBar != null) {
            setCurrentOpenPage(sideBar);
          }
        }
      });

    function renderMainComponent() {
        switch (currentOpenPage) {
          case MAIN_COMPONENTS_STATE.DASHBOARD:
            return renderDashboard();

          case MAIN_COMPONENTS_STATE.BOOKINGCALENDAR:
            return renderBookingCalendar();

          case MAIN_COMPONENTS_STATE.MANAGE_SERVICES:
            return renderManageServices();

          case MAIN_COMPONENTS_STATE.MY_EMPLOYEES:
            return renderMyEmployees();

          case MAIN_COMPONENTS_STATE.MY_SUBSCRIPTION:
            return renderMySubscription();

          case MAIN_COMPONENTS_STATE.PROFILE:
            return renderProfile();

          case MAIN_COMPONENTS_STATE.SUBSCRIPTION:
            return renderSubscription();

          default:
            break;
        }
    }

    function renderDashboard() {
        return <Dashboard currentOpenPage={currentOpenPage} />
    }
    function renderBookingCalendar() {
        return <BookingCalendar />
    }
    function renderManageServices() {
      return <ManageServices />
    }
    function renderMyEmployees() {
      return <MyEmployees />
    }
    function renderMySubscription() {
      return <MySubscription />
    }
    function renderProfile() {
        return <Profile />
    }
    function renderSubscription() {
      return <Subscription />
  }

    useEffect(() => {
        const loadData = async () => {
          await new Promise((r) => setTimeout(r, 1000));
          setLoading((loading) => !loading);
        };
        loadData();
      }, [])
      if (loading) {
          return  <div className={props.loading ? "sweet-loading" : ""} style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <BounceLoader
          css={override}
          size={80}
          color={"#1994C1"}
          loading={props.loading}
          speedMultiplier={1.5}
          />
      </div>
      }
      else {


    return(
        <div className='main-app-holder'>
            <Header setCurrentOpenPage={setCurrentOpenPage} />
            <Sidebar  setCurrentOpenPage={setCurrentOpenPage} />
            <div className='main-mid-holder'>
                {renderMainComponent()}
            </div>
        </div>
    )
}
}
export default MidContentBox
