import { Link } from '@mui/material';
import PasswordField from 'components/styledComponents/PasswordField.jsx';
import AppTextField from 'components/AppComponents/AppTextField';
import { BootstrapInput } from 'components/AppComponents/CustomField';

// Login Form Component
const LoginForm = ({ userCredentials, onChangeCredential, errors, next, resetPassword }) => {
  // Conditional rendering based on the 'next' prop
  if (next) {
    return (
      <>
        <PasswordField
          label="Password"
          name="password"
          value={userCredentials.password}
          onChange={onChangeCredential}
          error={!!errors.password}
          helperText={errors.password}
        />
        <Link href="#" underline="hover" variant="body2" onClick={resetPassword}>
          Forgotten my password
        </Link>
      </>
    );
  }

  return (
    <>
      <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" />
      <AppTextField
        value={userCredentials.mailId}
        onChange={onChangeCredential}
        error={errors.mailId}
        helperText={errors.mailId}
      />
    </>

  );
};

export default LoginForm;