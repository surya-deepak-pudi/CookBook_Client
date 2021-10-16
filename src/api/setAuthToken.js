import backend from "./backend"

const setAuthToken = (token) => {
  if (token) {
    backend.defaults.headers.common = { Authorization: `Bearer ${token}` }
  } else {
    delete backend.defaults.headers.common["Authorization"]
  }
}

export default setAuthToken
