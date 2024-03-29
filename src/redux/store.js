import {createStore,applyMiddleware} from 'redux';
import {thunk} from "redux-thunk"
import postReducer from './reducers/postReducer';

const store = createStore(postReducer, applyMiddleware(thunk));

export default store;

/*
The applyMiddleware function serves as middleware for the dispatch function 
when actions are dispatched to the store. 
While the store typically accepts plain objects as actions, 
redux-thunk intercepts the dispatch function, allowing it to accept functions as well. 
This enables redux-thunk to handle asynchronous actions and 
other advanced logic before eventually dispatching plain action objects to the store
*/

// this applyMiddleware function is act as security checker for dispatch function when entering into store
// store only accept object from dispatch function but thunk is used to handle dispatch function when entering into store  
//  and it accepts the function as the dispatch function


// redux is used for the core Redux functionality, 
// while react-redux is used for integrating Redux with React components. 
// Most of the time, you'll end up using both libraries together in a Redux-powered React application.