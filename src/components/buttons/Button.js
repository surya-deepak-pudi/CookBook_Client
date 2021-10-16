import "./button.scss"

const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick} class="button__register">
      {children}
    </button>
  )
}

export default Button
