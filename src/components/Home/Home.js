import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './../shared/Layout'

const Home = (props) => {
  if (props.user) {
    return (
      <Layout>
        <h4>Welcome to the Eco-Calculator!</h4>
        <Link to={'/garments'}>View Your Garments</Link>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div>Welcome to the Eco-Calculator! Sign up or sign in to get started.</div>
      </Layout>
    )
  }
}

export default Home
