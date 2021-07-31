import _ from "lodash"

import {
  IMAGE_UPLOAD,
  FORM_ENTRY,
  FORM_CLEAR,
  FORM_ENTRY_ARRAY,
} from "../actions/actionTypes"

const formReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case FORM_ENTRY:
      let { formName, name, value } = payload
      let oldData = state[formName] || {}
      return { ...state, [formName]: { ...oldData, [name]: value } }
    case FORM_CLEAR:
      return { ...state, [payload]: {} }
    default:
      return state
  }
}

export default formReducer
