import { Router } from 'preact-router'
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Confirm } from './pages/Confirm';
import { Main } from './pages/Main';

export function App() {
  return (
    <Router>
      <Login path="/login" />
      <Register path="/register" />
      <Confirm path="/confirm" />
      <Main default path="/home" />
    </Router>
  )
}