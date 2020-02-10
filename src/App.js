import React, { useState } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Profile from './profile-page/profilePage';
import Messenger from './messenger-page/messenger';
import Wallet from './wallet-page/wallet';
import Login from './signin-page/login'


export default function App() {
  const [value, setValue] = React.useState('signin');
  const [hideNav, setNav] = React.useState(true);
  const style = hideNav ? { display: 'none' } : {};

  var prod = false;

  if(!prod) {
    localStorage.setItem('debug', 'awesome-react-app:*');
  }

  function handlePages(event, newValue) {
    setValue(newValue)
  }

  function continueForward(value) {
    if (value === true) {
      setNav(false);
      setValue('profile');
    }
  }

  function changePage() {
    if (value === 'profile') {
      return <Profile />
    } else if (value === 'wallet') {
      return <Wallet />
    } else if (value === 'signin') {
      return <Login continue={continueForward} />
    } else if (value === 'messenger') {
      return <Messenger name="northcrypto" />
    }
  }

  function navigation() {
    return (
      <BottomNavigation value={value} onChange={handlePages} style={style} page={value}>
        <BottomNavigationAction label="Profile" value="profile" icon={<Icon><img src="./icons/icons_identity.png" className="icon-image" alt="😀" /></Icon>} />
        <BottomNavigationAction label="Messenger" value="messenger" icon={<Icon><img src="./icons/icons_partners.png" className="icon-image" alt="📜" /></Icon>} />
        <BottomNavigationAction label="Wallet" value="wallet" icon={<Icon><img src="./icons/icons_wallet.png" className="icon-image" alt="📜" /></Icon>} />
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

