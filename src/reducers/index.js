import { combineReducers } from "redux"
import formReducer from "./formReducers"
import errorReducer from "./errorReducer"
import authReducer from "./authReducer"

let dummyReducer = (state = {}) => {
  return state
}

const appReducer = combineReducers({
  auth: authReducer,
  forms: formReducer,
  dummy: dummyReducer,
  error: errorReducer,
})

export default appReducer
