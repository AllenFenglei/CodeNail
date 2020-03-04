import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import styles from './styles';
import Button from 'Components/Button';
import { search } from 'App/actions';
import searchIcon from './search.svg';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        if (window.location.pathname == '/') {
            this.state = {
                displaySearchBox: false
            };
        }
        else {
            this.state = {
                displaySearchBox: true
            };
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch (event) {
        if (event.key === 'Enter') {
            window.location.href = "/search_post/" + this.content.value;
        }
    }

    render() {

        
        var { displaySearchBox } = this.state;
        var searchBackground = {
            backgroundImage: `url(${searchIcon})`, 
            backgroundSize: "16px 16px",
            backgroundRepeat: "no-repeat", 
            backgroundPositionY: "center",
            backgroundPositionX: "4px"
        };

        return (
            <div className={styles.Container}>
                
            {displaySearchBox && 
                <div className={styles.searchBox}>
                    <input className={styles.textBox} style={searchBackground} type="input" placeholder="search snippets" onKeyPress={this.handleSearch} ref={(content) => this.content=content}/>                                      
                </div>
            }
            </div>
        );
    }   
}

export default connect(
    (state) => { return {        
    }; },
    (dispatch) => { return {
        
    }; }
)(SearchBox);
