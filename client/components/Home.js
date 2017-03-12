import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences } from '../store/actions/firebase/firebaseActions';

class Home extends Component {
  render() {
    return (
        <div>Homeeeee</div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { getPreferences })(Home);
