import { createPortal } from "react-dom"

import Form from "./forms/form"
import Input from "./forms/input"
import { loginAction } from "../actions/authActions"

const Modal = ({ children }) => {
  return createPortal(
    <div
      className
      style={{
        position: "relative",
        backgroundColor: "white",
        height: "30rem",
        width: "40rem",
        marginInline: "auto",
        top: "26vh",
      }}
    >
      <div style={{ position: "absolute", padding: "15rem" }}>
        <Form formName="Login" action={loginAction}>
          <Input name="email" type="text"></Input>
          <Input name="password" type="password"></Input>
          <button type="submit">submit</button>
        </Form>
      </div>
    </div>,
    document.querySelector("#modal")
  )
}

export default Modal
