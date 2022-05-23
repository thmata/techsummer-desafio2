import React from 'react'
import './header.scss'


const Header = () => {
  return (
    <div className="header">
    <img src={(require('./img/logo.png'))} alt="" />
    </div>
  )
}

export default Header