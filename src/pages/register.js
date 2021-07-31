import Form from "../components/forms/form"
import Input from "../components/forms/input"
import Button from "../components/buttons/Button"

import LandingRightImage from "../layouts/landingRightImage"

import { registerAction } from "../actions/authActions"

import RegisterImage from "../assets/register_portrait.jpg"

/*
form name: Register
input names: email, password, retype password
description: on submiting goes to registerAction
*/

const RegisterDescription = () => {
  return (
    <div style={{ marginInline: "20rem" }}>
      <h2>Register</h2>
      <Form formName="Register" action={registerAction}>
        <Input name="Email" type="text"></Input>
        <br></br>
        <Input name="Password" type="password"></Input>
        <br></br>
        <Input name="Re-type Password" type="password"></Input>
        <br></br>
        <br></br>
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
