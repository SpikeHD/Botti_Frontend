interface Props {
  path: string
}

export function Profile(props: Props) {
  const uid = window.location.pathname.split("/")[2]

  return (
    <div id="profile">This is a profile page for {uid}</div>
  )
}