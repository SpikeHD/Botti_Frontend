import './ProfileIcon.css'
import DefaultProfile from '../assets/question.jpg'

interface Props {
  image?: string;
}

export function ProfileIcon(props: Props) {
  const logout = () => {
    window.localStorage.setItem('auth_key', '')
    window.location.href = '/login'
  }

  return (
    <div class="circle_image profile_image">
      <img src={props.image || DefaultProfile}></img>
      <a href="logout" onClick={logout}>Log Out</a>
    </div>
  )
}