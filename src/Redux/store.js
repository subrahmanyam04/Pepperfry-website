// import { createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// import thunk from "redux-thunk";

// import crdentialReducers from '../Redux/Reducer/crdentialReducers';


// const middleware = [thunk];

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }


// const store = createStore(crdentialReducers, applyMiddleware(...middleware));
// const abc = store.getState()
// console.log('sdfgd',abc)

// export default store;

import { legacy_createStore as createStore } from 'redux';
import rootReducer from './Reducer/Rootreducer';// Assuming you have a rootReducer if there are multiple reducers
 // You can use Redux Thunk for async actions

const store = createStore(rootReducer);

export default store;