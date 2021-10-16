import { useDispatch, useSelector } from "react-redux"
import { formClearAction } from "../../actions/formActions"
import "./input.scss"

/*for validation provide  validation={{"inputNames":[list of all the validation methods]}}*/

const Form = ({ action, formName, children, validation }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.forms[formName])
  const err = useSelector((state) => state.error[formName])

  const handleSubmit = (e) => {
    let isValidated = true
    e.preventDefault()
    Object.keys(validation).map((input) => {
      for (let i = 0; i < validation[input].length; i++) {
        const splitParams = input.split(",")
        let param1 = []
        splitParams.map((j) => {
          param1.push(data[j])
        })
        let validationResult = validation[input][i](
          param1,
          formName,
          splitParams[0]
        )
        if (validationResult !== true) {
          dispatch(validationResult)
          isValidated = false
          break
        }
      }
    })
    if (isValidated) {
      action(data, dispatch)
      formClearAction(formName, dispatch)
    }
  }

  return (
    <form onSubmit={handleSubmit} name={formName}>
      {children}
      <div>
        {Object.keys(err || {}).map((ip) => {
          console.log(ip)
          return (
            <div className="textInput--error">{`${ip}: ${err[ip].message}`}</div>
          )
        })}
      </div>
    </form>
  )
}

export default Form
