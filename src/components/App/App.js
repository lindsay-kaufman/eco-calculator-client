import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

import Garments from '../Garments/Garments'
import Garment from '../Garments/Garment'
import GarmentCreate from '../Garments/GarmentCreate'
import GarmentEdit from '../Garments/GarmentEdit'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  msgAlert = ({ heading, message, variant }) => {
    this.setState({ msgAlerts: [...this.state.msgAlerts, { heading, message, variant }] })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
          />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute exact path='/garments' user={user} render={() => (
            <Garments component={Garments} user={user} />
          )} />
          <AuthenticatedRoute exact path='/garments/:id' user={user} render={(props) => (
            <Garment component={Garment} user={user} />
          )} />
          <AuthenticatedRoute exact path ='/create-garment' user={user} render={(props) => (
            <GarmentCreate component={GarmentCreate} user={user} />
          )} />
          <AuthenticatedRoute exact path='/garments/:id/edit' user={user} render={() => (
            <GarmentEdit component={GarmentEdit} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
