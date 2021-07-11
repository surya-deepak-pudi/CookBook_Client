import React from "react"

const Link = ({ href, children }) => {
  const handleChange = (e) => {
    e.preventDefault()
    window.history.pushState({}, "", href)

    const navEvent = new PopStateEvent("popstate")
    window.dispatchEvent(navEvent)
  }

  return (
    <a href={href} className="link" onClick={handleChange}>
      {children}
    </a>
  )
}

export default Link
