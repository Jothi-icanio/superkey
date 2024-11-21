import {
  Button,
  FormLabel,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/system";
import AppCard from "components/AppComponents/AppCard";

import { useFormik } from "formik";

const initialValues = {
  addressDetails: {
    communityName: "",
    city: "",
    state: "",
    zipcode: "",
  },
  communityDetails: {
    communityManager: "",
    contactNumber: "",
    communityType: "",
    email: "",
  },
  insuranceDetails: {
    insuranceValue: "",
    insuranceCoverage: "",
  },
};
const EditCommunity = ({ open, onClose }) => {
  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      console.log(values);
    },
  });
  const {
    values,
    errors,
    touched,
    setFieldValue,
    setValues,
    handleSubmit,
    handleChange,
    setTouched,
    setErrors,
  } = formik;

  const Footer = () => {
    return (
      <>
        <Button>Discard</Button>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </>
    );
  };

  return (
    <AppCard title={"Desert Springs"} footer={<Footer />}>
      <Grid
        container
        size={{ xs: 12 }}
        padding={1}
        spacing={2}
        direction={"column"}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          {"AddressDetails"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Community Name</FormLabel>

              <TextField
                value={values.addressDetails.communityName}
                fullWidth
                onChange={handleChange}
                name="addressDetails.communityName"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>City</FormLabel>

              <TextField
                value={values.addressDetails.city}
                fullWidth
                onChange={handleChange}
                name="addressDetails.city"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>State</FormLabel>

              <TextField
                value={values.addressDetails.state}
                fullWidth
                onChange={handleChange}
                name="addressDetails.state"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>ZipCode</FormLabel>

              <TextField
                value={values.addressDetails.zipcode}
                fullWidth
                onChange={handleChange}
                name="addressDetails.zipcode"
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        size={{ xs: 12 }}
        padding={1}
        spacing={2}
        direction={"column"}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          {"CommunityDetails"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Community Property Manager</FormLabel>

              <Select
                value={values.communityDetails.communityManager}
                fullWidth
                onChange={handleChange}
                options={[
                  { label: "Ten", value: 10 },
                  { label: "Twenty", value: 20 },
                  { label: "Thirty", value: 30 },
                ]}
                name="communityDetails.communityManager"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Contact Number</FormLabel>

              <TextField
                value={values.communityDetails.contactNumber}
                fullWidth
                onChange={handleChange}
                name="communityDetails.contactNumber"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Community Type</FormLabel>

              <Select
                value={values.communityDetails.communityType}
                fullWidth
                onChange={handleChange}
                name="communityDetails.communityType"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Email ID</FormLabel>

              <TextField
                value={values.communityDetails.email}
                fullWidth
                onChange={handleChange}
                name="communityDetails.email"
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        size={{ xs: 12 }}
        padding={1}
        spacing={2}
        direction={"column"}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          {"InsuranceDetails"}
        </Typography>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Insurance Value</FormLabel>

              <Select
                value={values.insuranceDetails.insuranceValue}
                fullWidth
                onChange={handleChange}
                options={[
                  { label: "Ten", value: 10 },
                  { label: "Twenty", value: 20 },
                  { label: "Thirty", value: 30 },
                ]}
                name="insuranceDetails.insuranceValue"
              />
            </Stack>
          </Grid>
          <Grid item size={{ xs: 6 }}>
            <Stack rowGap={1}>
              <FormLabel>Insurance Coverage</FormLabel>

              <TextField
                value={values.insuranceDetails.insuranceCoverage}
                fullWidth
                onChange={handleChange}
                name="insuranceDetails.insuranceCoverage"
              />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </AppCard>
  );
};

export default EditCommunity;
