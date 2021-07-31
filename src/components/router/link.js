import React from "react"
import redirect from "./redirect"

const Link = ({ href, children, style }) => {
  const handleChange = (e) => {
    e.preventDefault()
    redirect(href)
  }

  return (
    <a href={href} className={style} onClick={handleChange}>
      {children}
    </a>
  )
}

export default Link
