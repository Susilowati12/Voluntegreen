import {applyMiddleware, combineReducers, createStore} from 'redux';
import rootReducer from './rootReducer';
import { loginReducer } from './loginReducer';
import { registerReducer } from './registerReducer';
import thunk from 'redux-thunk';



const allReducer = combineReducers({
    login: loginReducer,
    register: registerReducer
})

export const store = createStore(allReducer, applyMiddleware(thunk))

