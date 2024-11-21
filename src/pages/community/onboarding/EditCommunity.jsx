import {
  Button,
  FormLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/system";

import AppCard from "components/AppComponents/AppCard";
import { useFormik } from "formik";

const EditCommunity = ({ open, onClose }) => {
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

  const sections = [
    {
      title: "Address Details",
      fields: [
        {
          label: "Community Name",
          type: "text",
          value: values.addressDetails.communityName,
          name: "addressDetails.communityName",
        },
        {
          label: "City",
          type: "text",
          value: values.addressDetails.city,
          name: "addressDetails.city",
        },
        {
          label: "State",
          type: "text",
          value: values.addressDetails.state,
          name: "addressDetails.state",
        },
        {
          label: "ZipCode",
          type: "text",
          value: values.addressDetails.zipcode,
          name: "addressDetails.zipcode",
        },
      ],
    },
    {
      title: "Community Details",
      fields: [
        {
          label: "Community Property Manager",
          type: "select",
          value: values.communityDetails.communityManager,
          name: "communityDetails.communityManager",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        {
          label: "Contact Number",
          type: "text",
          value: values.communityDetails.contactNumber,
          name: "communityDetails.contactNumber",
        },
        {
          label: "Community Type",
          type: "select",
          value: values.communityDetails.communityType,
          name: "communityDetails.communityType",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        {
          label: "Email ID",
          type: "text",
          value: values.communityDetails.email,
          name: "communityDetails.email",
        },
      ],
    },
    {
      title: "Community Details",
      fields: [
        {
          label: "Community Property Manager",
          type: "select",
          value: values.communityDetails.communityManager,
          name: "communityDetails.communityManager",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        {
          label: "Contact Number",
          type: "text",
          value: values.communityDetails.contactNumber,
          name: "communityDetails.contactNumber",
        },
        {
          label: "Community Type",
          type: "select",
          value: values.communityDetails.communityType,
          name: "communityDetails.communityType",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        {
          label: "Email ID",
          type: "text",
          value: values.communityDetails.email,
          name: "communityDetails.email",
        },
      ],
    },
    {
      title: "Insurance Details",
      fields: [
        {
          label: "Insurance Value",
          type: "select",
          value: values.insuranceDetails.insuranceValue,
          name: "insuranceDetails.insuranceValue",
          options: [
            { label: "Ten", value: 10 },
            { label: "Twenty", value: 20 },
            { label: "Thirty", value: 30 },
          ],
        },
        {
          label: "Insurance Coverage",
          type: "text",
          value: values.insuranceDetails.insuranceCoverage,
          name: "insuranceDetails.insuranceCoverage",
        },
      ],
    },
  ];

  const Footer = () => {
    return (
      <>
        <Button>Discard</Button>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </>
    );
  };
  const CommunityForm = ({ sections }) => {
    return (
      <>
        {sections.map((section, index) => (
          <Grid
            container
            size={{ xs: 12 }}
            key={index}
            padding={1}
            spacing={2}
            direction={"column"}
          >
            {console.log(section, "section")}
            <Typography variant="h3" sx={{ mb: 2 }}>
              {section.title}
            </Typography>
            <Grid container spacing={2}>
              {section.fields.map((field, idx) => (
                <Grid item size={{ xs: 6 }}>
                  <Stack rowGap={1} key={idx}>
                    <FormLabel>{field.label}</FormLabel>
                    {field.type === "text" && (
                      <TextField
                        value={field.value}
                        fullWidth
                        onChange={handleChange}
                        name={field.name}
                      />
                    )}
                    {field.type === "select" && (
                      <Select
                        value={field.value}
                        fullWidth
                        onChange={(event) => {
                          handleChange(event);
                        }}
                        name={field.name}
                      >
                        {field.options.map((option, optionIdx) => (
                          <MenuItem key={optionIdx} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </>
    );
  };

  return (
    <AppCard
      onClose={onClose}
      title={"Desert Springs"}
      children={<CommunityForm sections={sections} />}
      footer={<Footer />}
    />
  );
};
export default EditCommunity;
