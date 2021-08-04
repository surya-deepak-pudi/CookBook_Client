import Form from "../components/forms/form"
import Input from "../components/forms/input"
import Button from "../components/buttons/Button"

import LandingRightImage from "../layouts/landingRightImage"

import {
  emailValidated,
  passwordValidated,
  passwordMatched,
} from "../validation"

import { registerAction } from "../actions/authActions"

import RegisterImage from "../assets/register_portrait.jpg"

/*
form name: Register
input names: email, password, retype password
description: on submiting goes to registerAction
*/

const RegisterDescription = () => {
  return (
    <div style={{}}>
      <h2>Register</h2>
      <Form
        formName="Register"
        action={registerAction}
        validation={{
          Email: [emailValidated],
          "Password,retypePassword": [passwordMatched],
          Password: [passwordValidated],
        }}
      >
        <Input
          name="FirstName"
          type="text"
          size="small"
          lvisible="y"
          required
          style={{ marginRight: "3rem" }}
        ></Input>
        <Input
          name="LastName"
          type="text"
          size="small"
          required
          lvisible="y"
        ></Input>

        <br></br>
        <Input name="Email" type="text" lvisible="y" required></Input>
        <br></br>
        <Input
          name="Password"
          type="password"
          size="small"
          lvisible="y"
          required
          style={{ marginRight: "3rem" }}
        ></Input>

        <Input
          label="Re-type Password"
          placeholder="Re-type Password"
          type="password"
          size="small"
          lvisible="y"
          name="retypePassword"
          required
        ></Input>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

const Register = () => {
  return (
    <div>
      <LandingRightImage
        image={RegisterImage}
        description={RegisterDescription}
      ></LandingRightImage>
    </div>
  )
}

export default Register
