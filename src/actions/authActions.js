import backend from "../api/backend"
import { capitalize } from "lodash"
import jwtDecode from "jwt-decode"
import setAuthToken from "../api/setAuthToken"
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import redirect from "../components/router/redirect"

const setUser = (response, dispatch) => {
  const token = response.data
  localStorage.setItem("jwtToken", token)
  setAuthToken(token)
  console.log("done")
  const decodedToken = jwtDecode(`Bearer ${token}`)
  console.log(decodedToken)
  dispatch({ type: LOGIN_USER, payload: decodedToken })
  redirect("/")
}

export const loginAction = (data, dispatch) => {
  const { Email, Password } = data
  const payload = {
    email: Email,
    password: Password,
  }
  backend
    .post("/login", payload)
    .then((response) => {
      console.log(response)
      setUser(response, dispatch)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const registerAction = (data, dispatch) => {
  const { Email, FirstName, LastName, Password } = data
  const payload = {
    email: Email,
    firstName: capitalize(FirstName),
    lastName: capitalize(LastName),
    password: Password,
  }
  backend
    .post("/register", payload)
    .then((response) => {
      setUser(response, dispatch)
    })
    .catch((err) => {
      console.log(err.msg)
    })
}

export const logoutAction = (dispatch) => {
  localStorage.removeItem("jwtToken")
  setAuthToken(null)
  dispatch({ type: LOGOUT_USER, payload: null })
}
