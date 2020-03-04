import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import appLayout from 'SharedStyles/appLayout';
import styles from './styles';

// components for Header
import UserMenu from 'Components/Header/UserMenu';
import Logo from 'Components/Header/Logo';
import NavigationBar from 'Components/Header/NavigationBar';
import SearchBox from 'Components/Header/SearchBox';

class Header extends Component {

  render() {
    // render logo, search box and user menu on header bar
    return (
        <div className={styles.headerBar}>
            <div className={classnames(appLayout.constraintWidth, styles.headerContainer)}>
          <Logo />
          <SearchBox/>
          <UserMenu />          
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => { return {
  }; }
)(Header);
