import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Layout from './../shared/Layout'

const Garments = props => {
  const [garments, setGarments] = useState([])

  useEffect(() => {
    axios({
      url: `${apiUrl}/garments`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => {
        setGarments(res.data.garments)
      })
      .catch(console.error)
  }, [])

  if (garments.length === 0) {
    return (
      <div>
        <h6>Looks like you do not have any garments yet..</h6>
        <Link to={'/create-garment'}>Create a new one!</Link>
      </div>
    )
  }

  const garmentsHtml = garments.map(garment => (
    <li key={garment.id}>
      <Link to={`/garments/${garment.id}`}>{garment.description}</Link>
    </li>
  ))

  return (
    <Layout>
      <div className="garment-body">
        <div className="body-heading">
          <h1>Garments</h1>
          <Link to={'/create-garment'} className="create-garment-title">Create A Garment</Link>
        </div>
        <ul>{garmentsHtml}</ul><br />
      </div>
    </Layout>
  )
}

export default Garments
