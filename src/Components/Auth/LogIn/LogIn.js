import React  from "react";
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

import * as Colors from '../../../Helpers/Colors';
import { PrimaryLarge,PrimarySmall,PrimaryOutlineLarge,PrimaryOutlineSmall} from '../../../Helpers/Buttons';
import { Body, Heading1B,Heading2B,Heading3B,Heading4B,Heading5B,Heading6S} from '../../../Helpers/Labels';

import './LogIn.scss';

function LogIn(props) {

return (
    <>
      <Heading1B text={'h1. Heading 40px'} color={Colors.black1d} />
      <Heading2B text={'h2. Heading 24px'} color={Colors.secondary} />
      <Heading3B text={'h3. Heading 20px'} color={Colors.secondary} />
      <Heading4B text={'h4. Heading 18px'} color={Colors.secondary} />
      <Heading5B text={'h6. Heading 16px bold'} color={Colors.secondary} />
      <Heading6S text={'h6. Heading 16px normal'} color={Colors.secondary} />

      <PrimaryLarge text={'Continue'} m={1} />
      <PrimarySmall text={'PrimarySmall'} m={1} />
      <PrimaryOutlineLarge text={'Continue'} m={1} />
      <PrimaryOutlineSmall text={'PrimarySmall'} m={1} />

      
    </>
    )
}

export default LogIn
