import { Button, FormHelperText, Grid } from '@mui/material';
import AnimateButton from 'components/@extended/AnimateButton';
import { FormOutLinedField } from 'components/AppComponents/FormOutLinedField';
import { Formik } from 'formik';
import { useNewPassword, useRequestReset, useResetPassword } from 'hooks/useLogin';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useAuthCookies } from 'utils/cookie';
import { createValidationSchema } from 'utils/loginUtils';

export default function ResetPassword(props) {
  const { fieldsConfig } = props
  const { id } = useParams();
  const { getCookie, setAuthCookie } = useAuthCookies()
  const user = getCookie("superkey")
  const token = getCookie("t")
  const newPasswordMutation = useNewPassword();
  const resetPasswordMutation = useResetPassword();
  const forgotPassword = useRequestReset();
  const validationSchema = createValidationSchema(fieldsConfig);

  const handleFormSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    if (id == "change") {
      let payload = {
        email: values?.email,
        password: values.password,
        newPassword: values.newPassword,
      }
      newPasswordMutation.mutate(payload);
    } else if (id == 'forgot') {
      forgotPassword.mutate(values?.email);
    } else {
      let payload = {
        email: values?.email,
        password: values.newPassword,

        newPassword: values.newPassword,

      };
      resetPasswordMutation.mutate(payload);
    }
    setAuthCookie("superkey", { email: values.email });

  };

  return (
    <Formik
      initialValues={{
        email: user?.email || "",
        password: '',
        newPassword: '',
        confirmPassword: '',
      }}
      validationSchema={validationSchema}
      validateOnChange={false}  // Disable validation on field change
      validateOnBlur={false}    // Disable validation on field blur
      onSubmit={handleFormSubmit}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {fieldsConfig.map((field) => (
              <Grid item xs={12} key={field.name}>
                <FormOutLinedField
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  value={values[field.name]}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  placeholder={field.placeholder}
                  label={field.label}
                  error={errors[field.name]}
                />
              </Grid>
            ))}

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}

            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="info">
                  Reset Password
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}

ResetPassword.propTypes = {
  isDemo: PropTypes.bool
};
