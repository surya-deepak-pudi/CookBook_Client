import { useEffect, useState } from "react"
import redirect from "./redirect"
import useAuth from "../../customHooks/authHook"

const PrivateRoute = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)
  const isAuthenticated = useAuth()
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener("popstate", onLocationChange)
    return () => {
      window.removeEventListener("popstate", onLocationChange)
    }
  }, [])
  if (currentPath === path) {
    if (isAuthenticated) {
      return children
    } else {
      redirect("/")
    }
  }
  return null
}

export default PrivateRoute
