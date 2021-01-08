import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../../common/components/Input';
import Button from '../../common/components/Button';
import useForm from '../../common/hooks/form';
import { loginUser } from '../../redux/actions/login';
import { validateRequire } from '../../common/helpers/validators';
import { encodetoB64 } from '../../common/helpers/transformers';
import styles from './styles';

const fieldNames = {
  LOGIN_ID: 'loginId',
  PASSWORD: 'password',
};

function handleSubmit(values) {
  const encodedValues = encodetoB64(values);
  this.loginUser(encodedValues);
}

function handleChange(event, preValues) {
  const { name, value } = event.target || {};
  return { ...preValues, [name]: value };
}

const fields = {
  [fieldNames.LOGIN_ID]: {
    handleChange,
  },
  [fieldNames.PASSWORD]: {
    handleChange,
  },
};

function validate({ values = {} }) {
  const errors = {};
  if (!validateRequire(values[fieldNames.LOGIN_ID])) {
    errors[fieldNames.LOGIN_ID] = 'Please enter Login id';
  }

  if (!validateRequire(values[fieldNames.PASSWORD])) {
    errors[fieldNames.PASSWORD] = 'Please enter password';
  }

  return errors;
}

function Login(props) {
  const { values, errors, events } = useForm({
    initialValues: {}, handleSubmit: handleSubmit.bind(props), fields, validate,
  });
  const { login } = props;
  const { onSubmit, ...restEvents } = events;
  return (
    <div style={styles.root}>
      <div style={styles.sideImageContainer}>
        <img src="/auth-img.jpg" alt="auth-img" height="100%" width="100%" />
      </div>
      <div
        style={styles.formContainer}
        className="Box--Shadow"
      >
        <div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>WELCOME TO ZIQITZA</span>
          </div>
          <div style={styles.formFieldsContainer}>
            <div>
              <Input
                name="loginId"
                labelText="Login Id"
                placeholder="Login Id"
                value={values[fieldNames.LOGIN_ID]}
                {...restEvents}
                errorText={errors[fieldNames.LOGIN_ID]}
              />
            </div>
            <div style={{ marginTop: 24 }}>
              <Input
                name="password"
                labelText="Password"
                placeholder="Password"
                type="password"
                value={values[fieldNames.PASSWORD]}
                {...restEvents}
                errorText={errors[fieldNames.PASSWORD]}
              />
            </div>
          </div>
          <div
            style={styles.formActionsContainer}
          >
            <Link href="/forgot-password">
              <span
                className="Primary"
                style={styles.forgotPasswordLink}
              >
                Forgot Password?
              </span>
            </Link>
            <Button
              type="primary"
              style={styles.loginAction}
              disabled={login.isProcessing}
              onClick={onSubmit}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  login: PropTypes.shape({
    isProcessing: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ login }) => ({ login });

export default connect(mapStateToProps, ({ loginUser }))(Login);
