import { Router } from 'preact-router'
import { Link } from 'preact-router/match'
import { ProfileIcon } from "./components/ProfileIcon";
import { MainFeed } from "./MainFeed";
import { Profile } from './Profile';
import { Trending } from './Trending';

export function App() {
  if (window.location.href === '/') window.location.href = '/main'

  return (
    <div id="main">
      <div id="left">
        <div id="profile_icon">
          <ProfileIcon />
        </div>

        <div class="menu_list">
            <Link href="/home" className="menu_item" activeClassName="selected">
              Home
            </Link>
            <Link href="/trending" className="menu_item" activeClassName="selected">
              Trending
            </Link>
        </div>
      </div>

      <div id="right">
        <Router>
          <MainFeed path="home" />
          <Trending path="trending" />
          <Profile path="profile/:profileId" />
        </Router>
      </div>
    </div>
  )
}