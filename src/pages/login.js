import Form from "../components/forms/form"
import Input from "../components/forms/input"
import Button from "../components/buttons/Button"
import Link from "../components/router/link"

import LandingRightImage from "../layouts/landingRightImage"

import { loginAction } from "../actions/authActions"

import { emailValidated } from "../validation"

import LoginImage from "../assets/login_portrait.jpg"

/*
form name: Login
input names: email, password
description: on submiting goes to loginAction
*/

const LoginDescription = () => {
  return (
    <div style={{ marginInline: "20rem" }}>
      <h2>Login</h2>
      <Form
        formName="Login"
        action={loginAction}
        validation={{ Email: [emailValidated] }}
      >
        <Input name="Email" type="text" required></Input>
        <br></br>
        <Input name="Password" type="password" required></Input>
        <br></br>
        <br></br>
        <Button type="submit">Submit</Button>
        <br></br>
        <br></br>
        <Link href="/register">Not a member yet? Register</Link>
      </Form>
    </div>
  )
}

const Login = () => {
  return (
    <div>
      <LandingRightImage
        image={LoginImage}
        description={LoginDescription}
      ></LandingRightImage>
    </div>
  )
}

export default Login
