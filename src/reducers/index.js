import { combineReducers } from "redux"
import formReducer from "./formReducers"

let dummyReducer = (state = {}) => {
  return state
}

const appReducer = combineReducers({ forms: formReducer, dummy: dummyReducer })

export default appReducer
