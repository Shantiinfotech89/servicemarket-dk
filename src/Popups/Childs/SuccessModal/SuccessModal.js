import * as React from 'react';
// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B,  Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import SuccessIcon from '../../../assets/images/structure/success-icon.png'

// local strings Imports
const strings = require('../../../localisation_en.json')

function SuccessModal(props) {

  return (
      <div className="ph-container-box">
        <div className="ph-paper-box width420" style={{alignItems: 'center'}}>
          <img src={SuccessIcon} alt="..." className="success-icon" onClick={() => props.closePopup()} />
          <Heading2B text={strings.successfulPasswordReset} color={Colors.black1d} textAlign={'center'} margin={'0  0px 8px 0'} />
          {/* Password changed successfully
          Phone No. changed successfully
          Email changed successfully*/}
          <Body text={strings.yourPasswordHasBeenSuccessfullyReset} color={Colors.black45} textAlign={'center'} margin={'0  0px 40px 0'} />

          <PrimaryLarge text={strings.close} color={Colors.white} width={'150px'} onClick={() => props.closePopup()} />
        </div>
      </div>
  )
}

export default SuccessModal
