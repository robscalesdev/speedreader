import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

// const authenticatedOptions = (
//   <Fragment>
//     <NavDropdown>
//       <NavLink to='/change-password' className='nav-link'>Change Password</NavLink>
//       <NavLink to='/sign-out' className='nav-link'>Sign Out</NavLink>
//     </NavDropdown>
//   </Fragment>
// )

// const unauthenticatedOptions = (
//   <Fragment>
//     <NavLink to='/sign-up' className='nav-link' style={{ color: '#FFF' }}>Sign Up</NavLink>
//     <NavLink to='/sign-in' className='nav-link' style={{ color: '#FFF' }}>Sign In</NavLink>
//   </Fragment>
// )

const Header = ({ user }) => (
  <Navbar className={ styles.navbar }>
    {/* <Navbar.Toggle aria-controls='basic-navbar-nav' /> */}
      <NavLink to='/' style={{ color: '#FFF', textDecoration: 'none', fontSize: '2rem', display: 'flex', alignItems: 'center' }}>Speed Reader</NavLink>
    {/* <Navbar.Collapse id='basic-navbar-nav' className={styles.menu}>
      <Nav>
        {user ? authenticatedOptions : unauthenticatedOptions}
        {user && (
          <span className='navbar-text' style={{ color: '#FFF' }}>{user.email}</span>
        )}
      </Nav>
    </Navbar.Collapse> */}
  </Navbar>
)

export default Header
