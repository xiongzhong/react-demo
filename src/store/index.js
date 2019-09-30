import {applyMiddleware, combineReducers, createStore} from 'redux'
import details from './reducers/details'
import list from './reducers/list'
import user from './reducers/user'
import thunk from 'redux-thunk'
const reducers = combineReducers({
    details,
    list,
    user
});
const store = createStore(reducers, applyMiddleware(thunk));
export default store
