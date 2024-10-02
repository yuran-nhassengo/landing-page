import React from 'react'
import Logo from './logo'
import NavigationBar from './navigation'
import ActionButton from './action-button'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-10 border-b">
      <Logo/>
      <NavigationBar/>
      <ActionButton/>
    </div>
  )
}

export default NavBar
