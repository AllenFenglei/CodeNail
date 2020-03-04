import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import styles from './styles';
import Button from 'Components/Button';
import { login, logout } from 'App/actions';

class UserMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySubMenu: false,
            displayLogout: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleClickUser = this.handleClickUser.bind(this);
        this.handleClickLogout = this.handleClickLogout.bind(this);
        this.handleClickUserProfile = this.handleClickUserProfile.bind(this);
    }

    toggleMenu() {
        // set menu to be visible
        this.setState({ displaySubMenu: true });
    }

    handleClickOutside(evt) {
        // hide menu if click outside
        this.setState({ 
            displaySubMenu: false,
            displayLogout: false
        });
    }

    handleClickLogin() {
        // call login action
        this.props.login(this.name.value, this.password.value);
    }

    handleClickUser() {
        // toggle user menu
        this.setState({ displayLogout: true });
    }

    handleClickUserProfile() {
        // jump to user profile page
        window.location.href = "/user_profile/" + this.props.userName;
    }

    handleClickLogout() {
        // call logout action
        this.props.logout();
    }

    render() {
        var {
            authenticated,
            error,
            userName,
            avatarUrl
        } = this.props;

        var { displaySubMenu, displayLogout } = this.state;

        // if already login, render username and avatar
        if (authenticated && userName) {
            return (
                <div className={styles.container}>
                <div className={styles.userContainer} onClick={this.handleClickUser}>
                    {avatarUrl && <img className={styles.avatar} src={avatarUrl} />}
                    <Button alwaysActive noUppercase
                     className={styles.userNameBtn}>
                        {userName}
                    </Button>
                </div>
                {displayLogout && 
                    <div className={styles.subMenu}>
                        <Button className={styles.logoutBottun} noUppercase onClick={this.handleClickUserProfile}> Profile </Button>
                        <Button className={styles.logoutBottun} noUppercase onClick={this.handleClickLogout}> Logout </Button>
                    </div>}
                </div>
            );
        }

        // if not login, render login and sign up button
        return (
            <div className={styles.Container}>
                <div className={styles.navContainer}>
                    <Button alwaysActive
                     className={styles.navigationBtn}
                     onClick={this.toggleMenu}>
                        Login
                    </Button>
                    <div className={styles.navigationBtn}> / </div>
                    <Button
                     alwaysActive
                     className={styles.navigationBtn}
                     onClick={() => window.location.href = "/sign_up"}>
                        Sign Up
                    </Button>
                    
                </div>
            {displaySubMenu && 
                <div className={styles.subMenu} ref={(subMenu) => this.subMenu = subMenu}>
                    <input className={styles.textBox} type="input" placeholder="user name" ref={(input) => this.name=input}/>
                    <input className={styles.textBox} type="password" placeholder="password" ref={(input) => this.password=input}/>
                    <div className={styles.errMsg}>{error}</div>
                    <Button className={styles.loginBottun} onClick={this.handleClickLogin}> Login </Button>
                </div>
            }
            </div>
        );
    }
}

export default connect(
    (state) => { return {
        // bind user state to Component
        logingIn: state.user.logingIn,
        authenticated: state.user.authenticated,
        error: state.user.error,
        userName: state.user.name,
        avatarUrl: state.user.avatarUrl
    }; },
    (dispatch) => { return {
        // bind login and logout action
        login: (name, password) => dispatch(login(name, password)),
        logout: () => dispatch(logout())
    }; }
)(onClickOutside(UserMenu));
