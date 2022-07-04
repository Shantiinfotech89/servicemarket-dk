// Styles Imports
import * as Colors from '../../../../../assets/styles/Colors';
import {  Heading5B,  } from '../../../../../assets/styles/Labels';
import { PrimaryLarge ,BackLarge} from '../../../../../assets/styles/Buttons';
// Images Imports
import SidebarClose from '../../../../../assets/images/structure/modal-close-icon.svg'
// Imports Material Ui
import Box from '@mui/material/Box';
// local strings Imports
const strings = require('../../../../../localisation_en.json')

function AddEmployee(props) {

  return (
    <>
    <Box className="sidebar-right">
      <img src={SidebarClose} alt="..." className="sidebar-close"  />
      <Box className="sidebar-heading">
        <Heading5B text={'Add Employee'} fontWeight="700" />
      </Box>
      <Box className="sidebar-body">

      </Box>
      <Box className="sidebar-footer">
        <PrimaryLarge text={strings.save} />
      </Box>
    </Box>
    </>
  )
}

export default AddEmployee
