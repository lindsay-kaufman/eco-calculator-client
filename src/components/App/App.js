import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Home from '../Home/Home'

import Garments from '../Garments/Garments'
import Garment from '../Garments/Garment'
import GarmentCreate from '../Garments/GarmentCreate'
import GarmentEdit from '../Garments/GarmentEdit'

import Textiles from '../Textiles/Textiles'

import GreenScore from '../Garments/GreenScore'

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
          <Route exact path='/' render={() => (
            <Home component={Home} user={user} />
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
          <AuthenticatedRoute exact path='/garments/:id' user={user} render={({ match }) => (
            <Garment component={Garment} user={user} match={match}/>
          )} />
          <AuthenticatedRoute exact path ='/create-garment' user={user} render={(props) => (
            <GarmentCreate component={GarmentCreate} user={user} />
          )} />
          <AuthenticatedRoute exact path='/garments/:id/edit' user={user} render={({ match, garment }) => (
            <GarmentEdit component={GarmentEdit} user={user} match={match} garment={garment} />
          )} />
          <AuthenticatedRoute exact path='/textiles' user={user} render={({ match }) => (
            <Textiles component={Textiles} user={user} match={match}/>
          )} />
          <AuthenticatedRoute exact path='/green-score' user={user} render={() => (
            <GreenScore component={GreenScore} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
