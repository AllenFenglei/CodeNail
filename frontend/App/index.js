import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import styles from './styles';
import { PersistGate } from 'redux-persist/integration/react';

// app store
import appStore from './store';
import {persistor} from './store';

// app views
import AppContainer from './App';
import UserProfile from '../Views/UserProfile';
import SignUpBox from '../Views/SignUp';
import EditSnippet from '../Views/EditSnippet';
import SearchPost from '../Views/SearchPost';
import SearchDetail from '../Views/SearchDetail';
import Homepage from '../Views/Homepage';

// bind urls with pages
ReactDOM.render (
  <Provider store={appStore}>
    <PersistGate loading={null} persistor={persistor}>
    <Router history={browserHistory}>
      <Route path="/sign_up" component={AppContainer}>
        <IndexRoute component={SignUpBox} />
      </Route>
      <Route path="/edit_snippet" component={AppContainer}>
        <IndexRoute component={EditSnippet} />
      </Route>
      <Route path="/search_post/:content" component={AppContainer}>
        <IndexRoute component={SearchPost} />
      </Route>
      <Route path="/search_detail/:id" component={AppContainer}>
        <IndexRoute component={SearchDetail} />
      </Route>
      <Route path="/user_profile/:username" component={AppContainer}>
        <IndexRoute component={UserProfile} />
      </Route>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={Homepage} />
      </Route>
    </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
