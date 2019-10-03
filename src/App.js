import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Profile from './profile-page/profile';
import Messenger from './messenger-page/messenger';


export default function App() {
  const [value, setValue] = React.useState('messenger');

  function handlePages(event, newValue) {
    setValue(newValue)
  }

  function changePage() {
    if (value === 'profile') {
      return <Profile />
    } else if (value === 'wallet') {
      return <span>Favorites</span>
    } else if (value === 'nearby') {
      return <span>Nearby</span>
    } else if (value === 'messenger') {
      return <Messenger name="northcrypto" />
    }
  }

  function navigation() {
    return (
      <BottomNavigation value={value} onChange={handlePages} page={value}>
        <BottomNavigationAction label="Profile" value="profile" icon={<Icon><img src="./icons/icons_identity.png" className="icon-image" alt="😀" /></Icon>} />
        <BottomNavigationAction label="Messenger" value="messenger" icon={<Icon><img src="./icons/icons_partners.png" className="icon-image" alt="📜" /></Icon>} />
      </BottomNavigation>
    )
  }

  return (
    <div className="App">
      {changePage()}
      {navigation()}
    </div>
  )
}

