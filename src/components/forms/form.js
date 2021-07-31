import { createContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { formClearAction } from "../../actions/formActions"

export const FormNameContext = createContext()

const Form = ({ action, formName, children }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.forms[formName])

  const handleSubmit = (e) => {
    e.preventDefault()
    action(data, dispatch)
    formClearAction(formName, dispatch)
  }

  return (
    <form onSubmit={handleSubmit} name={formName}>
      {children}
    </form>
  )
}

export default Form
