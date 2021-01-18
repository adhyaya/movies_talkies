/* import libraries */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/* import components */
import { Form } from 'antd';
import AddEditWebseriesUI from './AddEditWebseriesUI';

/* import constants */
function AddEditWebseriesComponent(props) {
  /* states  and form */
  const [form] = Form.useForm();

  /* extracting state */
  const {
    addEditWebseriesState: {
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

  const config = {
    castDropdownHandler: () => {
      console.log('in cast handler');
    },
  };

  const onSubmitHandler = () => {
    console.log(form);
    const values = form.getFieldsValue();
    console.log(values);
    form.validateFields().then(() => {
      console.log(values);
      const payload = {
        email: values.name,
        password: values.cast,
      };
      loginUserAction(payload);
    });
  };
  return (
    <AddEditWebseriesUI
      form={form}
      onSubmitHandler={onSubmitHandler}
      config={config}
    />
  );
}

AddEditWebseriesComponent.propTypes = {
  addEditWebseriesState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};


export default AddEditWebseriesComponent;
