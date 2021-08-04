import { Fragment } from "react"
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { formEntryAction } from "../../actions/formActions"

import "./input.scss"

const Input = ({
  name,
  type,
  size,
  lvisible,
  label,
  placeholder,
  style,
  ...rest
}) => {
  if (!label) {
    label = name
  }
  if (!placeholder) {
    placeholder = name
  }
  const [formName, setFormName] = useState(null)
  const formRef = useRef(null)
  const dispatch = useDispatch()
  let sizeStyle, errStyle

  switch (size) {
    case "small":
      sizeStyle = "textInput__" + size
      break
    case "large":
      sizeStyle = "textInput__" + size
      break
    default:
      sizeStyle = "textInput__default"
      break
  }

  useEffect(() => {
    setFormName(formRef.current.parentNode.name)
  }, [])

  const err = useSelector((state) => {
    return state.error[formName] || {}
  })

  let setValue = useSelector(
    (state) => state.forms[formName] && state.forms[formName][name]
  )

  let handleChange = (e) => {
    e.preventDefault()
    const values = { name, value: e.target.value, formName }
    formEntryAction(values, dispatch)
  }

  errStyle = err[name] ? { borderColor: "red" } : {}

  return (
    <Fragment>
      {(setValue || lvisible === "y") && (
        <Fragment>
          <label className="label">{label + ":"}</label>
        </Fragment>
      )}

      <input
        className={"textInput" + " " + sizeStyle}
        style={{ ...style, ...errStyle }}
        {...rest}
        name={name}
        ref={formRef}
        value={setValue}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
      ></input>
    </Fragment>
  )
}

export default Input
