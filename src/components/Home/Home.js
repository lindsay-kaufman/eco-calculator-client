import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './../shared/Layout'

const Home = (props) => {
  if (props.user) {
    return (
      <Layout>
        <h1>Welcome!</h1>
        <h5>Find out the true environmental impact of your clothes.</h5>
        <Link to={'/garments'} className="view-garments-title">View Your Garments</Link>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <h1 className="title">Welcome to the Eco-Calculator!</h1><br />
        <h5 className="title">Find out the true environmental impact of your clothes.</h5>
        <div className="fashion-facts">
          <h2>Did You Know?</h2><br />
          <p>21 billion tons of textiles are sent to landfills every year.</p>
          <p>It takes roughly 2,000 gallons of water to produce a single pair of jeans.</p>
          <p>The average consumer purchases 60% more clothing than they did in 2000.</p>
          <h5> Sign up or sign in to get started.</h5>
        </div>
      </Layout>
    )
  }
}

export default Home
