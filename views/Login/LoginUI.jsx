/* import libraries */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

/* import ui-core component */
import Button from '../../common/components/Button';
import CustomForm from '../../common/components/Form';

/* import constants */
import { loginFormFields } from '../../common/constants/constants';

/* import styles */
import './Login.less';
import strings from '../../locales/strings';


function LoginUI({
  form,
  onSubmitHandler,
}) {
  return (
    <div className="login">
      <div className="formContainer">
        <CustomForm
          form={form}
          formFields={loginFormFields()}
        />
        <Button
          className="loginButton"
          onClick={onSubmitHandler}
        >
          <span>
            <FormattedMessage id={strings.login} />
          </span>
        </Button>
      </div>
    </div>
  );
}

LoginUI.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};

export default LoginUI;
