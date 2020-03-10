import {createStore, applyMiddleware} from 'redux';  
import rotateReducer from "./reducers";
import thunk from 'redux-thunk';


const configureStore = (state = { rotating: true }) => {
  return createStore(rotateReducer,
    state,
    applyMiddleware(thunk)
    );
}

export default configureStore;