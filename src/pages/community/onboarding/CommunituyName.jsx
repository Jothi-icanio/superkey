import { Grid2 as Grid, Stack } from '@mui/material';
import AppDropDown from 'components/AppComponents/AppDropDown';
import { useState } from 'react';

import { StyledTypography } from 'components/StyledComponents';


const options = [
    { label: "Desert Eagle" },
    { label: "Naples" },
    { label: "Sarasota" },
    { label: "Tampa" },
    { label: "Orlando" },
    { label: "Miami" },
    { label: "Jacksonville" },
    { label: "St. Petersburg" },
    { label: "Fort Lauderdale" },
    { label: "Palm Beach" }
];



const CommunityName = () => {

    const [name, setName] = useState({
        searchTerm: null,
        value: null,
    })
    const handleChange = (key = 'searchTerm', value = null, reset = false) => {
        if (!reset) {
            setName(prevAdd => ({
                ...prevAdd,
                [key]: value
            }))
        } else {
            setName({
                searchTerm: '',
                value: null,
            })
        }
    }


    return (
        <Grid container textAlign={'center'} justifyContent={'center'} rowSpacing={4} >
            <Grid item >
                <Stack spacing={4}>
                    <StyledTypography variant="h4">What is the name of your community?</StyledTypography>
                    <AppDropDown onChange={handleChange} searchString={name.searchTerm} value={name.value} placeholder={'Search your Community'} options={options} />
                </Stack>

            </Grid>
        </Grid>
    )
}

export default CommunityName