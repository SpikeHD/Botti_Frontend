import { render } from 'preact'
import { App } from './app'
import { Login } from './Login'
import './index.css'
import { Confirm } from './Confirm'

// TODO change
process.env.API_URL = 'http://localhost:4000'

;(() => {
  // Email confirmation, special case
  if (window.location.pathname === '/confirm') {
    // @ts-expect-error shut up
    render(<Confirm />, document.getElementById('app'))
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


