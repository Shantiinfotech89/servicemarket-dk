import * as React from 'react';
// Styles Imports
import * as Colors from '../../../../assets/styles/Colors';
import { PrimaryLarge, CancelLarge } from '../../../../assets/styles/Buttons';
import { Heading6S, Body } from '../../../../assets/styles/Labels';
// Import scss
import './BookingCalendar.scss';
// Import Pages

// Images Imports
import addCirclePlusBlue from '../../../../assets/images/structure/add_circle-plus-blue.svg'
import removeCircleRed from '../../../../assets/images/structure/emove_circle-red.svg'
// Material Ui Imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CheckIcon from '@mui/icons-material/Check';

// local strings Imports
const strings = require('../../../../localisation_en.json')

function ManageWorkingHours(props) {
    const [starttime, setStartTime] = React.useState('');
    const [endttime, setEndTime] = React.useState('');
    const handleChange = (event) => {
    setStartTime(event.target.value);
    };
    const handleChange2 = (event) => {
        setEndTime(event.target.value);
    };
    return(
        <div className='mmh-container'>
            <div className='manage-working-hours-holder'>
                <Grid container columnSpacing={2} direction="row" justifyContent="center">
                    <Grid item xs={6} md={8}>
                        <Heading6S text={strings.workingHours} color={Colors.black1d} fontWeight={'700'} />
                        <Body text={strings.ManageWorkingHoursOfYourBussiness} color={Colors.black45} padding={'0 0 15px 0'} />
                       <div className='mwhh-white-box'>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}>
                                    <Checkbox />
                                    <Heading6S text={strings.monday} color={Colors.black1d} padding={'0 2px 0 2px'} className="width100" />
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={addCirclePlusBlue} alt={'icons'} className="" />
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}>
                                    <Checkbox />
                                    <Heading6S text={strings.tuesday} color={Colors.black1d} padding={'0 2px 0 2px'} className="width100" />
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={addCirclePlusBlue} alt={'icons'} className="" />
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}className="width142">
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={removeCircleRed} alt={'icons'} className="" />
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}>
                                    <Checkbox />
                                    <Heading6S text={strings.wednesday} color={Colors.black1d} padding={'0 2px 0 2px'} className="width100" />
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={addCirclePlusBlue} alt={'icons'} className="" />
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}>
                                    <Checkbox />
                                    <Heading6S text={strings.thursday} color={Colors.black1d} padding={'0 2px 0 2px'} className="width100" />
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={addCirclePlusBlue} alt={'icons'} className="" />
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}>
                                    <Checkbox />
                                    <Heading6S text={strings.friday} color={Colors.black1d} padding={'0 2px 0 2px'} className="width100" />
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={addCirclePlusBlue} alt={'icons'} className="" />
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'20px'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                                    <Checkbox />
                                    <Heading6S text={strings.saturday} color={Colors.gray61} padding={'0 2px 0 2px'} fontWeight={'400'} className="width100" />
                                </Box>
                                <Box>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={12} md={12}>
                                            <Body text={strings.closed} color={Colors.gray61} padding={'0 0 0px 50px'} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                            <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'} mb={'19px'}>
                                    <Checkbox />
                                    <Heading6S text={strings.sunday} color={Colors.black1d} padding={'0 2px 0 2px'} className="width100" />
                                </Box>
                                <Box className='inputs-group'>
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">Start Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={starttime}
                                                    onChange={handleChange}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={6} md={6}>
                                            <FormControl className='selectfield' variant="filled" sx={{ m: 1, minWidth: 210 }}>
                                                <InputLabel id="demo-simple-select-filled-label">End Time</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-filled-label"
                                                    id="demo-simple-select-filled"
                                                    value={endttime}
                                                    onChange={handleChange2}
                                                >
                                                    <MenuItem value={10}>00 : 15<CheckIcon /></MenuItem>
                                                    <MenuItem value={20}>00 : 30<CheckIcon /></MenuItem>
                                                    <MenuItem value={30}>01 : 00<CheckIcon /></MenuItem>
                                                    <MenuItem value={40}>01 : 15<CheckIcon /></MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </Grid>
                                </Box>
                                <Box mb={'12px'}>
                                    <img src={addCirclePlusBlue} alt={'icons'} className="" />
                                </Box>
                            </Box>
                       </div>
                       <Box display={'flex'} justifyContent={'space-between'}>
                            <CancelLarge text={strings.cancel} width={'140px'} />
                            <PrimaryLarge text={strings.save} width={'140px'} />
                       </Box>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ManageWorkingHours