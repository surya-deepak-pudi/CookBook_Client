import { combineReducers } from "redux"
import formReducer from "./formReducers"
import errorReducer from "./errorReducer"

let dummyReducer = (state = {}) => {
  return state
}

const appReducer = combineReducers({
  forms: formReducer,
  dummy: dummyReducer,
  error: errorReducer,
})

export default appReducer
