import { Grid2 as Grid, Stack } from '@mui/material';
import mapImg from 'assets/images/icons/map.png';
import AppDropDown from 'components/AppComponents/AppDropDown';
import { Image, StyledTypography } from 'components/StyledComponents';
import { useState } from 'react';

const options = [
    { label: "Phoenix North Estates, Phoenix, AZ 85023, USA", value: "AZ" },
    { label: "New York, Phoenix, NY 54321, USA", value: " " },
    { label: "India, Phoenix", value: "LA" },
];

const CommunityAddress = ({ setFieldValue, values, touched, errors }) => {

    const [address, setAddress] = useState({
        searchTerm: null,
        value: values?.communityAddress || null,
    })
    const handleAddressChange = (key = 'searchTerm', value = null, reset = false) => {
        if (!reset) {
            setAddress(prevAdd => ({
                ...prevAdd,
                [key]: value
            }))
            if (key == 'value') {
                setFieldValue('communityAddress', value)
            }
        } else {
            setAddress({
                searchTerm: '',
                value: null,
            })
            setFieldValue('communityAddress', null)
        }
    }
    console.log(values)
    return (
        <Grid container textAlign={'center'} justifyContent={'center'} rowSpacing={4} >
            <Grid item size={{ xs: 9 }}>
                <Image src={mapImg} alt='map' />
            </Grid>
            <Grid item >
                <Stack spacing={4}>
                    <StyledTypography variant="h4">What is the address of your Community ?</StyledTypography>
                    <AppDropDown error={touched.communityAddress && errors.communityAddress} onChange={handleAddressChange} searchString={address.searchTerm} value={address.value} options={options} />
                </Stack>

            </Grid>
        </Grid>
    )
}

export default CommunityAddress