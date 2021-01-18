/* import libraries */
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

/* import ui-core component */
import Button from '../../common/components/Button';
import CustomForm from '../../common/components/Form';

/* import constants */
import { addEditWebseriesFormFields } from '../../common/constants/constants';

/* import styles */
import './AddEditWebseries.less';
import strings from '../../locales/strings';


function AddEditWebseriesUI({
  form,
  onSubmitHandler,
  config,
}) {
  return (
    <div className="login">
      <div className="formContainer">
        <CustomForm
          form={form}
          formFields={addEditWebseriesFormFields(config)}
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

AddEditWebseriesUI.propTypes = {
  form: PropTypes.object.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
};

export default AddEditWebseriesUI;
