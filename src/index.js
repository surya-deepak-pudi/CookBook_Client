import React from "react"
import ReactDOM from "react-dom"
import Thunk from "redux-thunk"
import reportWebVitals from "./reportWebVitals"
import { applyMiddleware, createStore, compose } from "redux"
import { Provider } from "react-redux"

import App from "./App"
import reducer from "./reducers/index"
import "./index.scss"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(Thunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
