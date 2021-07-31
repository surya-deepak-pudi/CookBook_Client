import { Fragment } from "react"
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { formEntryAction } from "../../actions/formActions"

import "./input.scss"

const Input = ({ name, type }) => {
  const [formName, setFormName] = useState(null)
  const formRef = useRef(null)
  const dispatch = useDispatch()

  useEffect(() => {
    setFormName(formRef.current.parentNode.name)
    console.log(formRef)
  }, [])

  let setValue = useSelector(
    (state) => state.forms[formName] && state.forms[formName][name]
  )

  let handleChange = (e) => {
    e.preventDefault()
    const values = { name, value: e.target.value, formName }
    formEntryAction(values, dispatch)
  }
  return (
    <Fragment>
      {setValue && <label className="label">{name + ":"}</label>}
      <br />
      <input
        className="textInput"
        name={name}
        ref={formRef}
        value={setValue}
        onChange={handleChange}
        placeholder={name}
        type={type}
      ></input>
    </Fragment>
  )
}

export default Input
