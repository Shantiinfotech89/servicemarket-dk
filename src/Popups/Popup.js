import React, { useState } from 'react';
// import { Heading2Bold } from '../../Styles-Elements/Labels';
import { POPUP_TYPE } from '../../Helpers/Enums'

import './Popup.scss';

// Material UI for the snackbar
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

// Importing localised strings
const strings = require('../../localisation_en.json')

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Popup(props) {

  // const [fileName, setFileName] = useState('Drag and drop or select .CSV file')
  // const [fileImportContent, setFileImportContent] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackBarState, setSnackbarState] = useState("error")
  const [snackBarMessage, setSnackbarMessage] = useState('')
  const [inputFieldEntry, setInputFieldEntry] = useState('')

  // async function handleDrop ([file]) {
  //   setFileName(file.name)

  //   var reader = new FileReader();
  //   reader.onload = () => {
  //     const binaryStr = reader.result
  //     setFileImportContent(binaryStr)
  //   }
  //   reader.readAsText(file);
  // }

  function getSnackBarMessage() {
    switch (props.style) {
      case POPUP_TYPE.RESET_PASSWORD:
        return strings.enterYourEmailAddress
      case POPUP_TYPE.CHANGE_PASSWORD:
        return strings.enterYourPassword
      case POPUP_TYPE.CHANGE_PROFILE_DETAIL:
          return strings.enterChangeProfileDetail
      case POPUP_TYPE.CANCEL_SUBSCRIPTION:
        return strings.enterCancelSubscription
      case POPUP_TYPE.ANNUAL_SUBSCRIPTION:
          return strings.enterAnnualSubscription
    }
  }

  function handleRequest() {
    switch (props.style) {
      case POPUP_TYPE.RESET_PASSWORD:
        return
      case POPUP_TYPE.CHANGE_PASSWORD:
        return
      case POPUP_TYPE.CHANGE_PROFILE_DETAIL:
          props.setCode()
            return
      case POPUP_TYPE.CANCEL_SUBSCRIPTION:
        props.setCode()
        return
      case POPUP_TYPE.ANNUAL_SUBSCRIPTION:
          props.setCode()
          return
    }
  }

  function submitRequest() {

    if (inputFieldEntry === '') {
      setSnackbarState("error")
      setSnackbarMessage(getSnackBarMessage())
      setSnackbarOpen(true)
    } else {
      // Send request
      handleRequest()
    }
  }

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  }

  function renderPopupStyle() {
    switch (props.style) {

      case POPUP_TYPE.RESET_PASSWORD:
        return <div className="container-modal">
                <div className="popup-wbimgpop-container neutral">
                  <img src={wbimgpopNeutral} width={120} height={120} />
                </div>
                <Subtitle text={strings.forgotYourPassword} color={Colors.brandSecondary} textAlign={"center"} padding={"24px 0"}/>
                <LargeBody text={strings.letsRecoverYourPassword} textAlign={"center"} color={Colors.darkGray} padding={"0 0 16px 0"}/>
                <Subheading text={strings.email} color={Colors.brandSecondary} padding={"0 0 8px 0"}/>
                <Textfield onChange={(event) => setInputFieldEntry(event.target.value)} placeholder={strings.enterYourEmailAddress}/>
                <MainRoundedButton text={strings.confirm} margin={'24px 0 8px 0'} onClick={() => submitRequest()} />
                <ClearButton text={strings.cancel} onClick={() => props.closePopup()} />
            </div>
    }
  }

  return (
    <>
    { (props.popupIsOpen) ?
      <div className="container">
        { renderPopupStyle() }
        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackBarState}>
            {snackBarMessage}
          </Alert>
        </Snackbar>
      </div>
      :
      null
    }
    </>
  )
}

export default Popup
