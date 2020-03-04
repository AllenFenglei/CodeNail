import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import Moment from 'moment';
import styles from './styles';

import Tag from 'Components/Tag';

class PostBox extends Component {
  render() {
    const {
      title,
      keywords,
      date,
      owner,
      link
    } = this.props;

    return (
      <div className={styles.container}>
        <div className={classnames(styles.title, styles.titleBottomMargin)}><Link to={link}>{title}</Link></div>

        <div className={styles.posterInfo}>
          <Link to={`/user_profile/${owner}`} className={styles.name}>Author: {owner}</Link>
        </div>

        <div className={styles.boxFooter}>

          <div className={styles.tagsArea}>
            { keywords.map((keyword) => <Tag key={keyword} name={keyword} />) }
          </div>

          <div className={styles.postInfo}>
            <span className={styles.info}>{Date(date).toString().substr(0,24)}</span>
          </div>

        </div>
      </div>
    );
  }
}

PostBox.defaultProps = {
  title: "Hello World",
  keywords: ['react', 'redux', 'nodejs'],
  date: 'unknown',
  owner: 'unknown',
  link: ''
};

PostBox.propTypes = {
  title: React.PropTypes.string,
  keywords: React.PropTypes.array,
  date: React.PropTypes.string,
  owner: React.PropTypes.string,
  link: React.PropTypes.string
};

export default PostBox;
