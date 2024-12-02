import { Search, Send } from "@mui/icons-material";
import { Button, InputAdornment, Typography } from "@mui/material";
import CardGrid from "components/AppComponents/AppDataCard";
import AppGrid from "components/AppComponents/AppGrid";
import AppModal from "components/AppComponents/AppModal";
import AppRowBox from "components/AppComponents/AppRowBox";
import { StyledTextField } from "components/StyledComponents";
import { useFormik } from "formik";
import SuccessScreen from "pages/community/onboarding/SuccessScreen";
import { useState } from "react";
import { COIData, certificateData } from "utils/constants";
import * as Yup from "yup";
import CertificatesCard from "./CertificatesCard";
import CoiEmailProcess from "./CoiEmailProcess";

const initialValues = {
  toPropertyManager: "yes",
  id: "",
  name: "",
  email: "",
  sms: "yes",
  mobile: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .min(10, "Mobile number must be at least 10 digits.")
    .max(15, "Mobile number cannot exceed 15 digits.")
    .required("Mobile number is required"),
});

const coiMailSteps = [
  {
    title: "Select Recipient",
    component: (props) => <CoiEmailProcess {...props} />,
  },
  {
    title: "",
    component: () => <SuccessScreen title={"Email sent successfully!"} />,
  },
];
let intialValues = {
  community: {},
  certificate: {},
};

const COI = () => {
  const [showCertificates, setShowCertificates] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [coi, setCoi] = useState(intialValues);
  const finalStep = activeStep == coiMailSteps?.length - 1;
  const updateCoi = (key, value) => {
    setCoi({ ...coi, [key]: value });
  };
  const handleCertificates = (community) => {
    updateCoi("community", community);
    setShowCertificates(!showCertificates);
  };

  const handleEmailModal = (certificate) => {
    updateCoi("certificate", certificate);
    setOpen(true);
  };
  const handleEmailModalClose = () => {
    setOpen(false);

    resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      if (values) {
        setActiveStep(1);
      }
    },
  });
  const { handleSubmit, resetForm } = formik;

  const footer = () => {
    return (
      <AppRowBox>
        <div></div>
        <Button
          fullWidth
          color="info"
          type="submit"
          onClick={() => handleSubmit()} // Trigger Formik handleSubmit here
          variant="contained"
          endIcon={<Send />}
        >
          {"Send"}
        </Button>
      </AppRowBox>
    );
  };
  return (
    <AppGrid container spacing={5}>
      <AppRowBox>
        <AppGrid size={{ xs: 12, sm: 8, md: 6, lg: 4 }}>
          <StyledTextField
            fullWidth
            placeholder="Search COI"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search color="success" />
                  </InputAdornment>
                ),
              },
            }}
          />
        </AppGrid>
      </AppRowBox>
      <AppRowBox>
        <AppGrid size={{ xs: 12, sm: 8, md: 6, lg: 4 }}>
          <AppRowBox>
            <Typography variant="h5">Communities</Typography>
            <Typography variant="body1">
              {COIData?.length} Communities &nbsp; |&nbsp;{" "}
              {COIData?.length * 10} COI{" "}
            </Typography>
          </AppRowBox>
        </AppGrid>
      </AppRowBox>
      {!showCertificates ? (
        <AppGrid item size={{ xs: 12 }}>
          <CardGrid handleClick={handleCertificates} data={COIData} />
        </AppGrid>
      ) : (
        <AppGrid item size={{ xs: 12 }}>
          <CertificatesCard
            title={coi?.community?.title}
            handleEmail={handleEmailModal}
            handleCertificates={handleCertificates}
            certificateData={certificateData}
          />
        </AppGrid>
      )}

      <AppModal
        cardHeight={finalStep ? "30vh" : "50vh"}
        enableCard
        title={coiMailSteps[activeStep].title}
        open={open}
        onClose={handleEmailModalClose}
        footer={!finalStep && footer()}
        align={finalStep ? "center" : ""}
      >
        {coiMailSteps[activeStep].component({ formik: formik })}
      </AppModal>
    </AppGrid>
  );
};

export default COI;
