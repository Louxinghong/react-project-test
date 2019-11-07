import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import Welcome from './components/state-read/main.js'
import Clock from './components/clock-test/main.js'
import Toggle from './components/button-idea/main.js'
import LoginControl from './components/login-test/main.js'
import NameForm from './components/form-test/main.js'
import Calculator from './components/state-improve/main.js'
import ErrorTest from './components/error-boundary/main.js'

function App() {
  return (
    <div>
      <Welcome name="jack" />
      <Clock name="loudahong" />
      <Clock name="louminihong" />
      <Toggle />
      <LoginControl />
      <NameForm />
      <Calculator />
      <ErrorTest />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
