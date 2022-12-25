import './ProfileIcon.css'
import DefaultProfile from '../assets/question.jpg'

interface Props {
  image?: string;
}

export function ProfileIcon(props: Props) {
  return (
    <div class="circle_image profile_image">
      <img src={props.image || DefaultProfile}></img>
      <a href="logout">Log Out</a>
    </div>
  )
}