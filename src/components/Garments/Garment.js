import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from './../shared/Layout'

const Garment = props => {
  const [garment, setGarment] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/garments/${props.match.params.id}`)
      .then(res => setGarment(res.data.garment))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/garments/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!garment) {
    return <p>Create a new garment.</p>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/garments', state: { msg: 'Garment successfully deleted.' } }
    } />
  }

  // how to I show materials here
  return (
    <Layout>
      <h4>{garment.description}</h4>
      <p>Type: {garment.type}</p>
      <p>Green score: {garment.rating}</p>
      <Link to={`/garments/${props.match.params.id}/edit`}>
        <button>Update Materials</button>
      </Link>
      <Link to="/garments">Back To Garments</Link>
      <button onClick={destroy}>Remove Garment</button>
    </Layout>
  )
}

export default Garment
