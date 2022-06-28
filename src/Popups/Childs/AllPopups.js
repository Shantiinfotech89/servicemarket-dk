import React from "react";

import Login from './Login/Login';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import ResetPassword from './ResetPassword/ResetPassword';
import SuccessModal from './SuccessModal/SuccessModal';
import VerifyOTP from './VerifyOTP/VerifyOTP';
import ChangePassword from './ChangePassword/ChangePassword';
import ChangeEmail from './ChangeEmail/ChangeEmail';
import ChangePhoneNo from './ChangePhoneNo/ChangePhoneNo';
import DeleteModal from './DeleteModal/DeleteModal';


// const strings = require('../../localisation_en.json');

function AllPopups(props) {
  return (
    <>
      <Login />
      <ForgotPassword />
      <ResetPassword />
      <SuccessModal />
      <VerifyOTP />
      <ChangePassword />
      <ChangeEmail />
      <ChangePhoneNo />
      <DeleteModal />
    </>
  )
}

export default AllPopups
