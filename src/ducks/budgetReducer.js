import { REQUEST_USER_DATA } from "./userReducer";
import axios from "axios";

const initialState = {
  purchases: [],
  budgetLimit: null,
  loading: false
}

export const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'
export const ADD_PURCHASE = 'ADD_PURCHASE'
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE'

export default function reducer(state = initialState, action){
  const { type, payload } = action
  switch(type){
    case REQUEST_BUDGET_DATA + '_LOADING':
      return { ...state, loading: true }
    case REQUEST_BUDGET_DATA + '_FULFILLED':
      return { ...state, ...action.payload, loading: false }
    case ADD_PURCHASE + '_LOADING':
      return { ...state, loading: true}
    case ADD_PURCHASE + '_FULFILLED':
      return { ...state, purchases: action.payload, loading: false }
    case REMOVE_PURCHASE + '_LOADING':
      return { ...state, loading: true}
    case REMOVE_PURCHASE + 'FULFILLED':
      return { ...state, loading: false, purchases: action.payload }
    default:
      return state
  }
}

export function requestBudgetData(){
  const data = axios.get('/api/budget-data').then(res => res.data)
  return {
    type: REQUEST_BUDGET_DATA,
    payload: data
  } 
}

export function addPurchase(price, description, category){
  const data = axios.get('/api/budget-data/purchase', { 
    description, 
    price, 
    category
  }).then(res => res.data)
  return {
    type: ADD_PURCHASE,
    payload: data
  }
}

export function removePurchase(id){
  const data = axios.get(`/api/budget-data/purchase/${id}`).then(res => res.data)
  return {
    type: REMOVE_PURCHASE,
    payload: data
  }
}