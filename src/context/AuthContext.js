import {Component, createContext} from 'react'
import { ThemeContext } from './ThemeContext'

export const AuthContext = createContext()

class AuthContextProvider extends Component {
  state = {
    isAuthenticated: false
  }

  setAuth = () => {
    this.setState({ isAuthenticated: !this.state.isAuthenticated})
  }
render() {
  return (
    <AuthContext.Provider value={{...this.state, setAuth: this.setAuth}}>
      { this.props.children}
    </AuthContext.Provider>
    )
  }
}

export {AuthContextProvider}
