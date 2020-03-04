import React, { Component } from 'react';
import styles from './styles';
import appLayout from 'SharedStyles/appLayout.css';
import { connect } from 'react-redux';
import { fetchUserPost, fetchUserCollection } from './actions';

import { Link } from 'react-router';

import PostBox from 'Components/PostBox';

class UserProfile extends Component {
    constructor(props) {
      super(props);
      // set initial state
      this.state = { 
        fetchPosts: true,
        fetchCollection: true,
        username: this.props.params.username
      };
    }

    componentWillMount() {
      // fetch post once
      if(this.state.fetchPosts) {
        const { fetchUserPost } = this.props;
        fetchUserPost(this.state.username);
        this.setState( {fetchPosts: false});
      }

      // fetch collection once
      if(this.state.fetchCollection) {
        const { fetchUserCollection } = this.props;
        fetchUserCollection(this.state.username);
        this.setState( {fetchPosts: false});
      }
    }

    render() {
        var {
            avatarUrl,
            fetchingPost,
            posts,
            postError,
            fetchingCollection,
            collection,
            collectionError
        } = this.props;
        console.log(posts);

        // show error message
        if (postError || collectionError) {
            if(!collectionError) {
                return <div className={styles.errorMsg}>{ postError }</div>;
            } else if (!postError) {
                return <div className={styles.errorMsg}>{ collectionError }</div>;
            } else {
                return <div className={styles.errorMsg}>{ postError } and { collectionError }</div>;
            }
        }

        // show loading message
        if (fetchingPost) {
          return (
            <div className={appLayout.constraintWidth, styles.loadingMsg}>
              Loading users post ...
            </div>
          );
        }

        if (fetchingCollection) {
          return (
            <div className={appLayout.constraintWidth, styles.loadingMsg}>
              Loading users collection ...
            </div>
          );
        }


        // construct user post boxes
        const userPosts = posts.map((post) =>
                            <PostBox
                              title={post.title}
                              keywords={post.keywords}
                              date={post.date}
                              owner={post.owner.name}
                              key={post._id}
                              link={`/search_detail/${post._id}`}
                            />
                          );
        
          // construct user collection post boxes
          const userCollection = collection.map((post) =>
                              <PostBox
                                title={post.title}
                                keywords={post.keywords}
                                date={post.date}
                                owner={post.owner.name}
                                key={post._id}
                                link={`/search_detail/${post._id}`}
                              />
                            );

        // return layout of user post and collection
        return (
          <div className={appLayout.constraintWidth}>
            <div className={styles.pageTitle}>{this.props.params.username}'s Profile</div>
            
            <div className={styles.avatarContainer}>
              <img className={styles.avatar} src={avatarUrl} alt={`${this.props.params.username} avatar`} />
            </div>

            <div className={styles.buttonDiv}>
            <button className={styles.button}><Link to={`/edit_snippet`} className={styles.name}>Post New Snippet</Link></button>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>Posts</span>
                </div>
              
                <div className={styles.posts}>
                    {userPosts}
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.title}>Collection</span>
                </div>
              
                <div className={styles.posts}>
                    {userCollection}
                </div>
            </div>

          </div>
        );
    }
}


export default connect(
    (state) => { return {
        avatarUrl: state.user.avatarUrl,
        fetchingPost: state.userProfile.fetchingPost,
        posts: state.userProfile.posts,
        postError: state.userProfile.postError,
        fetchingCollection: state.userProfile.fetchingCollection,
        collection: state.userProfile.collection,
        collectionError: state.userProfile.collectionError
    }; },
    (dispatch) => {
        return {
        fetchUserPost: (username) => dispatch(fetchUserPost(username)),
        fetchUserCollection: (username) => dispatch(fetchUserCollection(username)),
    }; }
)(UserProfile);
//export default UserProfile;