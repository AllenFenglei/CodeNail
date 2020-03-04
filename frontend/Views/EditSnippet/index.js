import React, { Component } from 'react';
import styles from './styles';
import appLayout from 'SharedStyles/appLayout.css';
import { connect } from 'react-redux';
import { post_snippet } from './actions';
import brace from 'brace';
import AceEditor from 'react-ace';
import langNorm from './languageNormalization.js';
import 'brace/mode/javascript';
import 'brace/mode/c_cpp';
import 'brace/mode/java';
import 'brace/mode/python';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/mode/php';
import 'brace/mode/ruby';
import 'brace/mode/scala';
import 'brace/theme/xcode';

class EditSnippet extends Component {
    //to get title: this.titleInput.value
    //to get description: this.descriptionInput.value
    //to get language: this.languageInput.value //use langNorm to normalize the language names, for more info, read languageNormalization.js
    //to get keywords: this.keywordsInput.value //tokenize it before storing into DB
    //to get code: this.codeEditor.editor.getValue() 
    constructor(props) {
        super(props);
        this.state = {
            language: langNorm("")
        }
        //this.titleInput = "";
        //this.descriptionInput = "";
        //this.keywordsInput = "";
        //this.languageInput = "";

        this.onChangeLang = this.onChangeLang.bind(this);
        this.postBtnHandler = this.postBtnHandler.bind(this);
    }

    onChangeLang() {    //normalize different typing of programming language (e.g., Python->python, C++ or c++ -> cpp)
        this.setState({language: langNorm(this.languageInput.value)});
    }

    postBtnHandler() {  //press post button
        console.log("Enter Btn");
        //console.log(this.props.authenticated);
        //console.log(this.props.name);
        if (this.props.authenticated) {
            this.props.post_snippet(this.titleInput.value, this.descriptionInput.value, this.keywordsInput.value.trim().split(/-+|,\s+|,+|\s+/), langNorm(this.languageInput.value).name, this.codeEditor.editor.getValue(), this.props.name);
        }
        else{
            alert("Please login first!");
        }
    }

    render() {  //front html
        console.log(this.state.language.highlight);
        var {
            posting,
            error,
            authenticated,
            name
        } = this.props;
        return (
          <div className={appLayout.constraintWidth}>
            <div className={styles.pageTitle}>Create a new snippet</div>
            <div className={styles.container}>
              <input className={styles.title} type='text' placeholder="Title" ref={input => this.titleInput = input}/>
              <textarea className={styles.description} placeholder="descriptions" ref={input => this.descriptionInput = input}/>
              <div className={styles.termContainer}>
                <div className={styles.term}>keywords:</div>
                <input className={styles.keywords} type='text' ref={input => this.keywordsInput = input}/>
              </div>
              <div className={styles.termContainer}>
                <div className={styles.term}>language:</div>
                <input className={styles.language} type='text' ref={input => this.languageInput = input} onChange={this.onChangeLang}/>
              </div>
              <AceEditor
                className={styles.code}
                value={this.codeEditor ? this.codeEditor.editor.getValue() : ""}
                width="100%"
                fontSize={18}
                mode={this.state.language.highlight}
                theme="xcode"
                printMargin={false}
                useWorker={false}
                ref={input => this.codeEditor = input}/>
              <button className={styles.post} onClick={this.postBtnHandler}>Post snippet</button>
            </div>
          </div>
        );
    }
}

//state change and data passing
export default connect( 
    (state) => { return {
        posting: state.post_snippet.posting,
        error: state.post_snippet.error,
        authenticated: state.user.authenticated,
        name: state.user.name
    }; },
    (dispatch) => {
        return {
        post_snippet: (title, descriptions, keywords, language, code, user) => dispatch(post_snippet(title, descriptions, keywords, language, code, user))
    }; }
)(EditSnippet);
//export default EditSnippet;