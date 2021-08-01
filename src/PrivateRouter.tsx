import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom' 
import ContextLogin from './ContextLogin'

interface PrivateRouteProps { 
  component: React.ComponentType<any>; 
  path: string;
}

const PrivateRoute = ({ component: Component, ...rest }: PrivateRouteProps) => {
const contextLogin = useContext(ContextLogin) 
return contextLogin.isLogin ? (
  <Route 
    {...rest}
    render={routeProps => ( 
      <Component {...routeProps} />
    )}
  />
  ) : <Redirect to="/" />
}

export default PrivateRoute