import "./button.scss"
import Link from "../router/link"

const RedirectButton = (props) => {
  const { children, purpose, href } = props
  return (
    <Link href={href}>
      <button className={"button__" + purpose}>{children}</button>
    </Link>
  )
}

export default RedirectButton
