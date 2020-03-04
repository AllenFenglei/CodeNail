import React, { Component } from 'react';
import styles from './styles';
import SearchBox from './SearchBox';
import bkImage from './bk.jpg';
import searchIcon from './search.svg';
import searchIllusion from './search.png';
import shareIllusion from './share.png';
import pluginIllusion from './plugin.jpg';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleClickSearch () {
        if (this.content && this.content.value) {
            window.location.href = "/search_post/" + this.content.value;
        }
    }

    
    handleEnter(event) {
        if (event.key === 'Enter' && this.content.value) {
            window.location.href = "/search_post/" + this.content.value;
        }

    }

    render() {
        var background = {
            backgroundImage: `url(${bkImage})`,
            backgroundSize: "100% auto",
            backgroundRepeat: "no-repeat", 
        }

        var searchBackground = {
            backgroundImage: `url(${searchIcon})`, 
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat", 
            backgroundPositionY: "center",
            backgroundPositionX: "8px"
        };

        return (
          <div className={styles.container}>
          <div className={styles.background} style={background}>
            <div className={styles.title}>CodeNail</div>
            <input className={styles.textBox} style={searchBackground} type="input" placeholder="search snippets" onKeyPress={this.handleEnter} ref={(content) => this.content=content}/>                                      
            <div className={styles.searchContainer}>
            <button className={styles.searchBottun} onClick={this.handleClickSearch}>Search</button>
            <button className={styles.searchBottun} onClick={() => window.location.href='/plugin.tar.gz'}>Get plugin</button>
            </div>
          </div>
          <div className={styles.margin}></div>
          <div className={styles.illusionContainer}>
            <img className={styles.illusionImg} src={searchIllusion} />
            <div className={styles.illusionTextContainer}>
              <div className={styles.illusionTitle}>Find snippets on CodeNail</div>
              <div className={styles.illusionPara}>CodeNail is an open snippet sharing platform. It always got the snippets that is frequently used but you do not want to type by yourself.</div>
            </div>
          </div>
          <div className={styles.illusionContainer}>
            <img className={styles.illusionImg} src={shareIllusion} />
            <div className={styles.illusionTextContainer}>
              <div className={styles.illusionTitle}>Share snippets on CodeNail</div>
              <div className={styles.illusionPara}>CodeNail is empowered by community. Share your favorite snippets to make CodeNail more powerful!</div>
            </div>
          </div>
          <div className={styles.illusionContainer}>
            <img className={styles.illusionImg} src={pluginIllusion} />
            <div className={styles.illusionTextContainer}>
              <div className={styles.illusionTitle}>Integrate CodeNail to your code editor</div>
              <div className={styles.illusionPara}>You can directory search for snippets shared on CodeNail on your editor! Download and install the sublime text pulgin to speed up coding!</div>
            </div>
          </div>
          </div>
        );
    }
}

export default HomePage;
