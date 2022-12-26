import { useState, useEffect } from "preact/hooks"
import { getProfile } from "./util/apiRequest"

interface Props {
  path: string
}

export function Profile(props: Props) {
  const [userState, setUserState] = useState({})
  const uid = Number(window.location.pathname.split("/")[2])

  useEffect(() => {
    ;(async () => {
      setUserState(await getProfile(uid))
    })()
  }, [])

  return (
    <div id="profile">This is a profile page for {uid}</div>
  )
}