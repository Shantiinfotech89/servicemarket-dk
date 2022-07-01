// Styles Imports
import * as Colors from '../../../assets/styles/Colors';
import {  Heading2B,  } from '../../../assets/styles/Labels';
import { PrimaryLarge ,BackLarge} from '../../../assets/styles/Buttons';
// Images Imports
import UserDeleteIcon from '../../../assets/images/structure/user-dummy-icon.svg'
// Imports Material Ui
import Box from '@mui/material/Box';
// local strings Imports
const strings = require('../../../localisation_en.json')

function ChatComfirmationModal(props) {

  return (
    <div className="ph-container-box">
      <div className="ph-paper-box width430">
        <img src={UserDeleteIcon} alt="..." width={'48px'} />
        <Heading2B text={strings.Areyousureyouwanttoblockthisuser} margin={'12px 0px 20px 0px '} />
        <Box display={'flex'}>
          <BackLarge text={strings.no} color={Colors.gray61} margin={'0px 20px 0px 0px '} width={'140px'} onClick={() => props.closePopup()} />
          <PrimaryLarge text={strings.yes} color={Colors.white} margin={'0px 0px 0px 0px '} width={'140px'} />
        </Box>
      </div>
    </div>
  )
}

export default ChatComfirmationModal
