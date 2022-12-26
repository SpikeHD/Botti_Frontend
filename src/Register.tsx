import { useState } from 'preact/hooks'
import { Error } from './components/Error'

// Use the same login.css
import './Login.css'

export function Register() {
  const [emailed, setEmailed] = useState(false)
  const [err, showErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  const register = async () => {
    const email = document.querySelector('#login_email') as HTMLInputElement
    const username = document.querySelector('#login_username') as HTMLInputElement
    const password = document.querySelector('#login_password') as HTMLInputElement

    const maybeEmailed = await fetch(`${process.env.API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        username: username.value,
        password: password.value,
      })
    })

    const resp = await maybeEmailed.json()

    if (!resp.success) {
      setErrMsg(resp.message)
      showErr(true)

      setTimeout(() => showErr(false), 5000)
    }

    if (resp.success) {
      setEmailed(true)
    }
  }

  return (
    <div id="login">
      <Error show={err} message={errMsg} />
      <div class="box_title">Welcome to Botti!</div>
      {
        emailed ? (
          <>
            <div>All done! You should see a confirmation email in your emails!</div>
            <a href="/login">Back to login</a>
          </>
        ) : (
          <div id="login_box">
            <div class="login_section">
              <div class="login_header">Email</div>
              <input id="login_email" type='text' placeholder='Email'/>
            </div>
            <div class="login_section">
              <div class="login_header">Username</div>
              <input id="login_username" type='text' placeholder='Username'/>
            </div>
            <div class="login_section">
              <div class="login_header">Password</div>
              <input id="login_password" type='password' placeholder='Password'/>
            </div>
            <div class="login_section bottom">
              <div class="fake_ass_button" onClick={register}>Register</div>
              <div class="or">- or -</div>
              <a href="/login">Login</a>
            </div>
          </div>
        )
      }
    </div>
  )
}