/* import libraries */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* import Login Component */
import LoginComponent from './LoginComponent';

/* import actions from redux */
import * as loginActions from './Redux/Actions';

/* import services  */
import * as services from './Service';

// defines the container for LoginComponent
const LoginContainer = (props) => {
  const customProps = { ...props, loginServices: { ...services } };
  return <LoginComponent {...customProps} />;
};

const mapStateToProps = (state) => ({
  loginState: state.login,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...loginActions,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
