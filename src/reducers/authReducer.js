import _ from "lodash"

import { LOGIN_USER, LOGOUT_USER } from "../actions/actionTypes"

const authReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_USER:
      console.log({ ...state, ...payload })
      return { ...state, ...payload }
    case LOGOUT_USER:
      return {}
    default:
      return state
  }
}

export default authReducer
