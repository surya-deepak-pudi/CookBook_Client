import {
  IMAGE_UPLOAD,
  FORM_ENTRY,
  FORM_CLEAR,
  FORM_ENTRY_ARRAY,
} from "./actionTypes"

export const formEntryAction = (data, dispatch) => {
  dispatch({ type: FORM_ENTRY, payload: data })
}

export const formClearAction = (formName, dispatch) => {
  dispatch({ type: FORM_CLEAR, payload: formName })
}
