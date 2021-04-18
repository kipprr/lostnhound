import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../context/PetContext"

function RedirectRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Redirect to="/dashboard" /> : <Component {...props} />
      }}
    ></Route>
  )
}

export default RedirectRoute;