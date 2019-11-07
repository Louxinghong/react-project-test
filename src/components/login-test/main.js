import React from 'react'

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <h1>{this.props.isLoggedIn ? 'Welcome Back!' : 'Please sign up!'}</h1>
    )
  }
}

class LogButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <button onClick={this.props.onClick}>
        {this.props.isLoggedIn ? 'Logout' : 'Login'}
      </button>
    )
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    return (
      <div>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {isLoggedIn ? (
          <LogButton onClick={this.handleLogoutClick} />
        ) : (
          <LogButton onClick={this.handleLoginClick} />
        )}
      </div>
    )
  }
}

export default LoginControl
