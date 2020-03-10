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
        console.log(res.data.garments)
      })
      .catch(console.error)
  }, [])

  if (garments.length === 0) {
    return (
      <div>
        <h6>Looks like you do not have any garments yet..</h6>
        <Link to={'/create-garment'}>Create a new one here!</Link>
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
      <h4>Garments</h4>
      <Link to={'/create-garment'}>Create A Garment</Link>
      <ul>{garmentsHtml}</ul>
    </Layout>
  )
}

export default Garments
