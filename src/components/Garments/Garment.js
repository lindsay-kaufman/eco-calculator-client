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
      <div className="garment-body">
        <div className="body-heading">
          <h1>Green score: {garment.weighted}</h1>
          <Link to="/garments" class="redirect-link">Back To Garments</Link>
        </div>
        <div className="my-garment">
          <h4>{garment.description}</h4>
          <h4><span className="materials-title">Materials</span><br /> {textilesHtml}</h4>

          <div className="edit-form-buttons">
            <Link to={`/garments/${props.match.params.id}/edit`} textiles={garment.textiles}>
              <button>Update</button><br />
            </Link>
            <button onClick={destroy}>Remove</button><br />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Garment
