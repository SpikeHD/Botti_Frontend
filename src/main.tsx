import { render } from 'preact'
import { App } from './app'
import { Login } from './pages/Login'
import { Confirm } from './pages/Confirm'
import { Register } from './pages/Register'

import './index.css'

// TODO change
process.env.API_URL = 'http://localhost:4000'

;(() => {
  // Email confirmation, special case
  if (window.location.pathname === '/confirm') {
    // @ts-expect-error shut up
    render(<Confirm />, document.getElementById('app'))
    return
  }

  // Registration, special case
  if (window.location.pathname === '/register') {
    // @ts-expect-error shut up
    render(<Register />, document.getElementById('app'))
    return
  }

  if (window.localStorage.getItem('auth_key')) {
    // @ts-expect-error shut up
    render(<App />, document.getElementById('app'))
  } else {
    // @ts-expect-error shut up
    render(<Login />, document.getElementById('app'))
  }
})()


