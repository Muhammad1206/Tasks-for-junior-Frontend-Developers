import { combineReducers, createStore, applyMiddleware } from "redux";
import productsReducer from './Reducer/products-reducer.js';
import thunkMiddleware  from 'redux-thunk';


const reducers = combineReducers({
    tablesPage : productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;