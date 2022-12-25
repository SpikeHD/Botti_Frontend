import './Login.css'

interface Props {
  path: string
}

export function Login(props: Props) {
  const login = async () => {
    const email = document.querySelector('#login_email') as HTMLInputElement
    const password = document.querySelector('#login_password') as HTMLInputElement

    const maybeKey = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      })
    })

    const resp = await maybeKey.json()

    if (resp.key) {
      window.localStorage.setItem('auth_key', resp.key)

      // Navigate to main
      window.location.href = '/home'
    }
  }

  return (
    <div id="login">
      <div class="box_title">Welcome to Botti!</div>
      <div id="login_box">
        <div class="login_section">
          <div class="login_header">Email</div>
          <input id="login_email" type='text' placeholder='Email'/>
        </div>
        <div class="login_section">
          <div class="login_header">Password</div>
          <input id="login_password" type='password' placeholder='Password'/>
        </div>
        <div class="login_section bottom">
          <div class="fake_ass_button" onClick={login}>Login</div>
          <div class="or">- or -</div>
          <a href="/register">Register</a>
        </div>
      </div>
    </div>
  )
}