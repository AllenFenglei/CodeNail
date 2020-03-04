import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { userReducer } from './reducers';
import { userProfileReducer } from '../Views/UserProfile/reducers';
import { signUpReducer } from '../Views/SignUp/reducers';
import { postReducer } from '../Views/EditSnippet/reducers';
import { searchPostReducer} from '../Views/SearchPost/reducers'
import { searchDetailReducer} from '../Views/SearchDetail/reducers'


// root reducer for app
const rootReducer = combineReducers({
    user: userReducer,
    userProfile: userProfileReducer,
    signUp: signUpReducer,
    post_snippet: postReducer,
    search_post: searchPostReducer,
    search_detail: searchDetailReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

// persist states in to localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// application store
let store = createStore(
    persistedReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )  
);

let persistor = persistStore(store);

export default store;
export {store, persistor};
