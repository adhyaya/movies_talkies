/* import libraries */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* import Login Component */
import AddEditWebseriesComponent from './AddEditWebseriesComponent';

/* import actions from redux */
import * as addEditWebseriesActions from './Redux/Actions';

/* import services  */
import * as services from './Service';

// defines the container for AddEditWebseriesComponent
const AddEditWebseriesContainer = (props) => {
  const customProps = { ...props, addEditWebseriesServices: { ...services } };
  return <AddEditWebseriesComponent {...customProps} />;
};

const mapStateToProps = (state) => ({
  addEditWebseriesState: state.addEditWebseries,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...addEditWebseriesActions,
  }, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(AddEditWebseriesContainer);
