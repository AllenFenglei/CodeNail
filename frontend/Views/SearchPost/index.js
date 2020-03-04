import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './styles';
import Button from 'Components/Button';
import { search } from './actions';
import appLayout from 'SharedStyles/appLayout.css';

//search page component
class SearchPost extends Component {
    constructor(props) {
        super(props);        
        var content = this.props.params.content;
        //console.log('in constructor');
        //console.log(content);

        //console.log('get post')
        if ( content && content != '') {
            this.state = {
                searchPost: true,
                content: content
            };
        }
        else {
            this.state = {
                searchPost: false
            };
        }        
        
    }    

    componentWillMount() {

        console.log('in mount');
        //console.log(this.props.post);
        //console.log(this.props.error);


        if (this.state.searchPost) {
            console.log('send search request before render');
            this.props.search(this.state.content);
            this.setState({ searchPost: false });
        }
    }

    render() {
        var {
            post,
            error
        } = this.props;

        var { searchPost } = this.state;

        if (error) {
            return ( 
                <div>
                    <h1> error</h1>
                </div>
            );
        }

        if (post == null) {
            return ( 
                <div>
                    <h1> searching </h1>
                </div>
            );
        }
        console.log('get post');
        console.log(post);
       
        return (
            <div className={appLayout.constraintWidth}>
            <div className={styles.container}> 
                <div className={styles.header}>Search Results</div>           
                { post.map(singlePost => 
                    <div className={styles.post} onClick={() => window.location.href="/search_detail/"+singlePost._id}>
                        <div className={styles.title}><Link className={styles.postLink} to={"/search_detail/"+singlePost._id}>{singlePost.title}</Link></div>
                        <div className={styles.userName}>{singlePost.owner.name}</div>
                        <div className={styles.keywords}>
                            {(singlePost.keywords).map((keyword) => <div className={styles.keyword}>{keyword}</div>)}
                            <div className={styles.date}>{Date(singlePost.date).toString().substr(0,24)}</div>
                        </div>
                    </div>
                )}
            </div>
            </div>
        );
    }   
}

export default connect(
    (state) => { return {
        post: state.search_post.post,
        error: state.search_post.error        
    }; },
    (dispatch) => { return {
        search: (content) => dispatch(search(content))
    }; }
)(SearchPost);
