import "./buttons.scss"

const Button = (props) => {
  const { children, type, handleClick } = props
  return (
    <button
      onClick={() => {
        handleClick()
      }}
      className={"button__" + type}
    >
      {children}
    </button>
  )
}

export default Button
