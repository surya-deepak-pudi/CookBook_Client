import backend from "../api/backend"
import { capitalize } from "lodash"

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
  backend.post("/register", payload).then((response) => {
    console.log(response)
  })
}
