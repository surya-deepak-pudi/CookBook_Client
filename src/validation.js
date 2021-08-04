import {
  ERR_PWD_CASE,
  ERR_PWD_MISMATCH,
  ERR_PWD_NUMERIC,
  ERR_PWD_SMALL,
  ERR_MAIL_INVALID,
} from "./actions/actionTypes"

export const passwordMatched = (pwd, form, input) => {
  if (pwd[0] === pwd[1]) {
    return true
  } else {
    return {
      type: ERR_PWD_MISMATCH,
      payload: {
        message: "password and re-type password mismatched",
        form,
        input,
      },
    }
  }
}

export const passwordValidated = (pwd, form, input) => {
  if (pwd[0].length < 6) {
    return {
      type: ERR_PWD_SMALL,
      payload: {
        message: "Password length is less than 6 charecters",
        form,
        input,
      },
    }
  } else if (!(/[a-z]+/.test(pwd[0]) & /[A-Z]+/.test(pwd[0]))) {
    return {
      type: ERR_PWD_CASE,
      payload: {
        message: "Password should contain both cases",
        form,
        input,
      },
    }
  } else if (!/[0-9]+/.test(pwd[0])) {
    return {
      type: ERR_PWD_NUMERIC,
      payload: {
        message: "Password should contain numeric charecters",
        form,
        input,
      },
    }
  } else {
    return true
  }
}

export const emailValidated = (email, form, input) => {
  console.log(form)
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (re.test(email[0])) {
    console.log("its passed")
    return true
  } else {
    console.log("not passed")
    return {
      type: ERR_MAIL_INVALID,
      payload: { message: "Please enter a valid email", form, input },
    }
  }
}
