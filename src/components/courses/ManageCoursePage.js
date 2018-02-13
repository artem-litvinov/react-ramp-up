import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>ManageCoursePage</h1>
      </div>
    );
  }
};

ManageCoursePage.propTypes = {

};

function mapStateToProps(state, ownProps) {
  return {

  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
