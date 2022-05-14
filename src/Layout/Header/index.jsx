import React from 'react'
import { NavBar, Reader, Speed } from './NavElements'

const Header = ({ user }) => (
  <NavBar>
      <Speed>Speed</Speed><Reader>Reader</Reader>
  </NavBar>
)

export default Header
