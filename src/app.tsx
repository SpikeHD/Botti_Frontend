import { ProfileIcon } from "./components/ProfileIcon";
import { MainFeed } from "./MainFeed";

export function App() {
  return (
    <div id="main">
      <div id="left">
        <div id="profile_icon">
          <ProfileIcon />
        </div>

        <div class="menu_list">
          <div class="menu_item">Home</div>
          <div class="menu_item">Trending</div>
        </div>
      </div>
      
      <div id="right">
        <MainFeed />
      </div>
    </div>
  )
}