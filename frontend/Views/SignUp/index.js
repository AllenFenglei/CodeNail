import React, { Component } from 'react';
import styles from './styles';
import Button from 'Components/Button';
import { connect } from 'react-redux';
import { signUp } from './actions';

class SignUpBox extends Component {
    constructor(props) {
        super(props);
        // componets references
        this.name = "";
        this.password1 = "";
        this.password2 = "";
        this.signUpBtnHandler = this.signUpBtnHandler.bind(this);
    }

    signUpBtnHandler() {
        // call sign up action
        this.props.signUp(this.name.value, this.password1.value, this.password2.value);
    }

    render() {
        var {
            signingUp,
            error
        } = this.props;
        
        // render sign up page
        return (
          <div className={styles.background}>
            <div className={styles.titleContainer}>
              <div className={styles.title}>CodeNail</div>
              <div className={styles.subTitle}>Join and share your snippet!</div>
            </div>
            <div className={styles.boxContainer}>
              <div className={styles.boxTitle}>Create Your Account</div>
              <input className={styles.textBox} type="text" placeholder="user name" ref={(input) => this.name=input}/>
              <input className={styles.textBox} type="password" placeholder="password" ref={(input) => this.password1=input}/>
              <input className={styles.textBox} type="password" placeholder="confirm password" ref={(input) => this.password2=input}/>
              <button className={styles.signUpBottun} onClick={this.signUpBtnHandler}>Sign Up</button>
            </div>
          </div>
        );
    }
}

export default connect(
    (state) => { return {
        // bind states for sign up page
        signingUp: state.signUp.signingUp,
        error: state.signUp.error
    }; },
    (dispatch) => { return {
        // bind sign up action
        signUp: (name, password1, password2) => dispatch(signUp(name, password1, password2))
    }; }
)(SignUpBox);
