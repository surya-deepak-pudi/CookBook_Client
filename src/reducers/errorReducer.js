import _ from "lodash"

import {
  ERR_MAIL_INVALID,
  ERR_PWD_CASE,
  ERR_PWD_MISMATCH,
  ERR_PWD_NUMERIC,
  ERR_PWD_SMALL,
  ERR_RESET,
} from "../actions/actionTypes"

const errorReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ERR_MAIL_INVALID:
      console.log("inreducer for mail")
      return {
        [payload.form]: { [payload.input]: { message: payload.message } },
      }
    case ERR_PWD_CASE:
      return {
        [payload.form]: { [payload.input]: { message: payload.message } },
      }
    case ERR_PWD_MISMATCH:
      return {
        [payload.form]: { [payload.input]: { message: payload.message } },
      }
    case ERR_PWD_NUMERIC:
      return {
        [payload.form]: { [payload.input]: { message: payload.message } },
      }
    case ERR_PWD_SMALL:
      return {
        [payload.form]: { [payload.input]: { message: payload.message } },
      }
    case ERR_RESET:
      return { ...state, [payload.form]: { [payload.input]: {} } }
    default:
      return state
  }
}

export default errorReducer
