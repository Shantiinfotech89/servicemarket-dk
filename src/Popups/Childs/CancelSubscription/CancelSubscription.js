// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B, Body } from '../../../assets/styles/Labels';
import { PrimaryLarge } from '../../../assets/styles/Buttons';
// Images Imports
import ModalClose from '../../../assets/images/structure/modal-close-icon.svg';
// local strings Imports
const strings = require('../../../localisation_en.json')

function CancelSubscription(props) {
  return (
    <div className="ph-container-box">
      <div className="ph-paper-box width470">
        <img src={ModalClose} alt="..." className="modal-close" onClick={() => props.closePopup()} />
        <Heading2B text={strings.Areyousureyouwanttocancelthesubscription} color={Colors.black1d}  margin={'0px 5px 12px 0px'} />
        <Body text={strings.IfYesyoursubscriptionwillbecancelled} color={Colors.black45} margin={'0  0px 30px 0'} />
        <PrimaryLarge text={strings.CancelSubscription} color={Colors.white} />
    </div>
  </div>
  )
}

export default CancelSubscription
