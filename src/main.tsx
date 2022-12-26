import { render } from 'preact'
import { App } from './app'
import { Login } from './pages/Login'
import { Confirm } from './pages/Confirm'
import { Register } from './pages/Register'

import './index.css'

// TODO change
process.env.API_URL = 'http://localhost:4000'

// @ts-expect-error shut up
render(<App />, document.getElementById('app'))


