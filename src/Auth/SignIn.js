import React, { Component } from 'react'

import { signIn } from '../api/auth'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Navigate } from 'react-router-dom'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      navigate: false
    }
  }

handleChange = (event) =>
  this.setState({
    [event.target.name]: event.target.value
  })

onSignIn = (event) => {
  event.preventDefault()

  const { setUser } = this.props

  signIn(this.state)
    .then((res) => setUser(res.data.user))
    .then(() => this.setState({ navigate: true }))
    .catch((error) => {
      this.setState({ email: '', password: '' })
      console.error(error)
    })
}

render () {
  const { email, password } = this.state

  if (this.state.navigate) {
    return <Navigate to='/' />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Sign In</h3>
        <Form onSubmit={this.onSignIn}>
          <Form.Group controlId='email'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type='email'
              name='email'
              value={email}
              placeholder='Enter email'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              name='password'
              value={password}
              type='password'
              placeholder='Password'
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </div>
    </div>
  )
}
}

export default SignIn
