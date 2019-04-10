import axios from 'axios'

const initialState = {
  email: null,
  firstName: null,
  lastName: null
}

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData(){
  let data = axios.get('/auth/user-data').then(res => res.data)
  return {
    type: REQUEST_USER_DATA,
    payload: data
  }
}
export default function (state = initialState, action){
  const { type, payload } = action
  switch(type) {
  case REQUEST_USER_DATA + '_LOADING':
    return {...state, loading: true}
  case REQUEST_USER_DATA + '_FULFILLED':
    return {
      email: payload.email,
      firstname: payload.firstname,
      lastName: payload.lastName
    }
  default:
    return state
  }
}