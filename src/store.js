import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from './ducks/budgetReducer'

const rootReducer = combineReducers({
  budget: reducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))