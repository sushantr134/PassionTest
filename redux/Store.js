import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import getListItems from './reducers/listReducer'

const allReducers = combineReducers({
     listStore : getListItems
})

const Store = () => createStore(allReducers,applyMiddleware(thunk,logger))

export default Store;
