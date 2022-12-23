import { render } from 'preact'
import { App } from './app'
import './index.css'

// @ts-expect-error app will always exist
render(<App />, document.getElementById('app'))
