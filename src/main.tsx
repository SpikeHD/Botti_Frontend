import { render } from 'preact'
import { App } from './app'
import './index.css'

// @ts-expect-error shut up
render(<App />, document.getElementById('app'))
