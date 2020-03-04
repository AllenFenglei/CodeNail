import React, { Component } from 'react';
import styles from './styles';
import logo from './nail.png';

// render logo
const Logo = () => {
  return (
    <div className={styles.logoContainer} onClick={() => window.location.href="/"}>
      <img className={styles.logo} src={logo} />
      <div className={styles.logoTitle}>CodeNail</div>
    </div>
  );
};

export default Logo;
