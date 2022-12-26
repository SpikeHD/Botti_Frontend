import { useState } from 'preact/hooks'
import './Confirm.css'

interface Props {
  path: string
}

export function Confirm(props: Props) {
  const [confirmed, setConfirmed] = useState(false)
  const params = new URLSearchParams(window.location.search)
  let err = false

  if (!confirmed) {
    fetch(`${process.env.API_URL}/confirm`, {
      method: "POST",
      body: JSON.stringify({
        code: params.get('code'),
      })
    }).then(() => {
      setConfirmed(true)
    }).catch((e) => {
      console.error(e)
    })
  }
  
  return (
    <div class="confirm_main">
      <div class="confirm_header">Confirming your email...</div>
      <div class="confirm_message">
        {
          confirmed ? (
            <>Email confirmed! Head back on over to <a href="/login">the login page</a> to log in!</>
          ) : 'We are just confirming your email, one moment!'
        }

        {
          err ? 'An error occurred...' : ''
        }
      </div>
    </div>
  )
}