import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import Header from 'Containers/Header';
import appLayout from 'SharedStyles/appLayout.css';
import styles from './styles.css';


class AppContainer extends Component {

  render() {

    // render title, header bar and children
    return (
        <div>
          <Helmet><title>CodeNail</title></Helmet>

          <Header />
          {this.props.children}
        </div>
      );
  }
}

export default connect(
  (state) => { return {
  }; },
  (dispatch) => { return {
  }; }
)(AppContainer);
