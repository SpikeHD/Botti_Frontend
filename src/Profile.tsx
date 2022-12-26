import { useEffect, useState } from "preact/hooks"
import { getProfile } from "./util/apiRequest"

interface Props {
  path: string
}

export function Profile(props: Props) {
  const [userState, setUserState] = useState({})
  const uid = Number(window.location.pathname.split("/")[2])

  useEffect(() => {
    console.log('effect')
    ;(async () => {
      const profileData = await getProfile(uid)
      console.log(profileData)
    })()
  })

  return (
    <div id="profile">This is a profile page for {uid}</div>
  )
}