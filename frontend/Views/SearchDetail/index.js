import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import styles from './styles';
import Button from 'Components/Button';
import { searchDetail, addComment } from './actions';


// show post detail page and comment list
class SearchDetail extends Component {
    constructor(props) {
        super(props);        
        var id = this.props.params.id;
     
        console.log(id)
        if ( id && id != '') {
            this.state = {
                searchDetail: true,
                id: id
            };
        }
        else {
            this.state = {
                searchDetail: false
            };
        }
        this.handleClickAdd = this.handleClickAdd.bind(this);        
        
    } 
      // after click add button
    handleClickAdd() {
        console.log('click add button');
        console.log(this.props.name);
        //this.props.addComment(this.newComment.value, this.state.id, this.props.name);
        this.props.addComment(this.newComment.value, this.state.id, this.props.name);
    }   
    // send search detail request before render
    componentWillMount() {

        console.log('in mount');
        
        if (this.state.searchDetail) {
            console.log('send search detail request before render');
            this.props.searchDetail(this.state.id);
            this.setState({ searchDetail: false });
        }
    }

    render() {
        var {
            post,
            error,
            name
        } = this.props;

        var { searchDetail } = this.state;

        if (error) {
            return ( 
                <div>
                    <p> error</p>
                </div>
            );
        }

        if (post == null) {
            return ( 
                <div>
                    <h1> Loading </h1>
                </div>
            );
        }
        console.log('get post');
        console.log(post);
        console.log(name);

        var comments = post.comments;
        const listItems = comments.map((comment, i) =>
            <li key={i}>{comment.owner.name + " :" +comment.content}</li>
        );
       
        return (
            <div className={styles.container}>
              <div className={styles.titleBar}><p className={styles.postTitle}>{post.title}</p></div>
              <div className={styles.keywords}>
                  <p>Keywords:
                  {(post.keywords).map((keyword) => <div className={styles.keyword}>{keyword}</div>)}
                  </p>
              </div>
              <div className={styles.descriptionBar}><h2 className={styles.text}>Description</h2></div>
              <p className={styles.description}>{post.description}</p>
              <div className={styles.codeBar}><h2 className={styles.text}>Codes</h2></div>
              <div className={styles.codes}>{post.code}</div>
              <div className={styles.lastLine}>
              <div className={styles.userName}>Post by: {post.owner.name}</div>
              <div className={styles.dateBar}>{Date(post.date).toString().substr(0,24)}</div>
              </div>

              
              <div className={styles.comments}>
              <div className={styles.bar}><h3 className={styles.text}>Comments</h3></div>
              { comments.map(comment => 
                    <div className={styles.comment}>
                      <div className={styles.commentOwner}>{comment.owner.name}</div>
                      <div className={styles.commentContent}>{comment.content}</div>
                    </div>
                )}
              </div>
              <div>
                <div><p className={styles.commentBar}>{"Add Comment\n"}</p></div>
                <form>
                  <input className={styles.textBox} type="input" placeholder="......" ref={(input) => this.newComment=input}/>
                  <span></span>
                  <Button className={styles.loginBottun} onClick={this.handleClickAdd}> Add </Button>
                </form>
              </div>
            </div>
        );
    }   
}

export default connect(
    (state) => { return {
        post: state.search_detail.post,
        error: state.search_detail.error, 
        name: state.user.name  
    }; },
    (dispatch) => { return {
        searchDetail: (id) => dispatch(searchDetail(id)),
        addComment: (content, toPost, user_name) => dispatch(addComment(content, toPost, user_name))
    }; }
)(SearchDetail);
