import Image from 'next/image'
import React from 'react'

import logo from "../images/logo/logo.png"

const Logo = () => {
  return (
    <div>
        <Image src={logo} width={50} height={50} alt="logo"/>
    </div>
  )
}

export default Logo
