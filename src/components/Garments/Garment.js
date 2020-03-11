import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Layout from './../shared/Layout'

const Garment = (props) => {
  const [garment, setGarment] = useState(null)
  const [deleted, setDeleted] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/garments/${props.match.params.id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => {
        setGarment(res.data.garment)
      })
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/garments/${props.match.params.id}`,
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  if (!garment) {
    return <h5>Loading....</h5>
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/garments', state: { msg: 'Garment successfully deleted.' } }
    } />
  }

  const textilesHtml = garment.textiles.map(textile => (
    <li key={textile.id}>{textile.name}</li>
  ))

  return (
    <Layout>
      <h5>Type: {garment.style}</h5>
      <h5>Description: {garment.description}</h5>
      <h5>Materials: {textilesHtml}</h5>
      <p>Green score: {garment.rating}</p>
      <Link to={`/garments/${props.match.params.id}/edit`} textiles={garment.textiles}>
        <button>Update Garment</button><br />
      </Link>
      <button onClick={destroy}>Remove Garment</button><br />
      <Link to="/garments">Back To Garments</Link>
    </Layout>
  )
}

export default Garment
