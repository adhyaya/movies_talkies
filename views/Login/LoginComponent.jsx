/* import libraries */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* import components */
import { Form } from 'antd';
import LoginUI from './LoginUI';

/* import constants */
function LoginComponent(props) {
  /* states  and form */
  const [form] = Form.useForm();

  /* extracting state */
  const {
    loginState: {
      loginApiState,
    },
  } = props;

  /* extracting actions */
  const {
    actions: {
      loginUserAction,
      clearLoginApiState,
    },
  } = props;

  /* useEffect */
  useEffect(() => {
    const { isSuccess } = loginApiState;
    if (isSuccess) {
      clearLoginApiState();
    }
  }, [loginApiState]);

  const onSubmitHandler = () => {
    const values = form.getFieldsValue();
    form.validateFields().then(() => {
      const payload = {
        email: values.email,
        password: values.password,
      };
      loginUserAction(payload);
    });
  };
  return (
    <LoginUI
      form={form}
      onSubmitHandler={onSubmitHandler}
    />
  );
}

LoginComponent.propTypes = {
  loginState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};


export default LoginComponent;
