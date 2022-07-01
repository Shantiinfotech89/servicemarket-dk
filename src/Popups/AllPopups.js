import { POPUP_TYPE } from '../Helpers/Enums';
// Scss Imports
import './AllPopups.scss';
// Pages Imports
import Login from './Childs/Login/Login';
import ForgotPassword from './Childs/ForgotPassword/ForgotPassword';
import ResetPassword from './Childs/ResetPassword/ResetPassword';
import SuccessModal from './Childs/SuccessModal/SuccessModal';
import VerifyOTP from './Childs/VerifyOTP/VerifyOTP';
import ChangePassword from './Childs/ChangePassword/ChangePassword';
import ChangeEmail from './Childs/ChangeEmail/ChangeEmail';
import ChangePhoneNo from './Childs/ChangePhoneNo/ChangePhoneNo';
import DeleteModal from './Childs/DeleteModal/DeleteModal';
import LogoutModal from './Childs/LogoutModal/LogoutModal';
import CancelSubscription from './Childs/CancelSubscription/CancelSubscription';
import UpdateChangeCard from './Childs/UpdateChangeCard/UpdateChangeCard';
import ChatComfirmationModal from './Childs/ChatComfirmationModal/ChatComfirmationModal';

// local strings Imports

function AllPopups(props) {

  function renderPopupStyle() {
    switch (props.style) {
      case POPUP_TYPE.LOGIN:
        return(
          <Login
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.FORGOT_PASSWORD:
        return(
          <ForgotPassword
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.RESET_PASSWORD:
        return(
          <ResetPassword
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.SUCCESS_MODAL:
        return(
          <SuccessModal
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.VERIFY_OTP:
        return(
          <VerifyOTP
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.CHANGE_PASSWORD:
        return(
          <ChangePassword
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.CHANGE_EMAIL:
        return(
          <ChangeEmail
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.CHANGE_PHONE_NO:
        return(
          <ChangePhoneNo
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.DELETE_MODAL:
        return(
          <DeleteModal
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.LOGOUT_MODAL:
        return(
          <LogoutModal
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.CANCEL_SUBSCRIPTION:
        return(
          <CancelSubscription
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.UPDATE_CHANGE_CARD:
        return(
          <UpdateChangeCard
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
      case POPUP_TYPE.CHAT_COMFIRMATION_MODAL:
        return(
          <ChatComfirmationModal
            closePopup={() => props.closePopup()}
            popupIsOpen={props.popupOpen}
          />
        );
    }
  }

  return (
    <>
      { (props.popupIsOpen) ?
        <div className="popup-holder">
          <div className="ph-backdrop-box">
            { renderPopupStyle() }
          </div>
        </div>
        :
        null
      }
    </>
  )
}

export default AllPopups
