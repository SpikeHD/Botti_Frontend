import { render } from 'preact'
import { App } from './app'
import { Login } from './Login'
import './index.css'

// TODO change
process.env.API_URL = 'http://localhost:4000'

if (window.localStorage.getItem('auth_key')) {
  // @ts-expect-error shut up
  render(<App />, document.getElementById('app'))
} else {
  // @ts-expect-error shut up
  render(<Login />, document.getElementById('app'))
}

