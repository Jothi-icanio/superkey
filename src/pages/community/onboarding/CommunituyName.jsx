import { Grid2 as Grid } from '@mui/material';
import AppDropDown from 'components/AppComponents/AppDropDown';
import { useState } from 'react';

import AppLabelComponent from 'components/AppComponents/AppLabelComponent';
import AppAutoComplete from 'components/AppComponents/AppAutoComplete';


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



const CommunityName = ({ setFieldValue, formValues, touched, errors }) => {

    const [address, setAddress] = useState('')
    const onSearch = (searchString) => {
        setAddress(searchString)
    }


    return (
        <Grid container textAlign={'center'} justifyContent={'center'} rowSpacing={4} >
            <Grid item >
                <AppLabelComponent gap={2} variant="h4" label={'What is the name of your community?'}>
                    <AppAutoComplete name='communityName' freesolo error={touched.communityName && errors.communityName} onChange={setFieldValue} searchString={address} value={formValues.communityName} options={options} placeholder='Search your Community' onSearch={onSearch} />
                </AppLabelComponent>

            </Grid>
        </Grid>
    )
}

export default CommunityName