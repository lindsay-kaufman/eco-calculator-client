import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import GarmentForm from './CreateGarmentForm'
import Layout from '../shared/Layout'

const GarmentCreate = props => {
  const [garment, setGarment] = useState({ style: '', description: '', rating: '' })
  const [garmentId, setGarmentId] = useState(null)

  const handleChange = event => {
    event.persist()
    setGarment(garment => ({ ...garment, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/garments`,
      method: 'POST',
      data: { garment },
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => setGarmentId(res.data.garment.id))
      .catch(console.error)
  }

  if (garmentId) {
    return <Redirect to={`/garments/${garmentId}`} />
  }

  return (
    <Layout>
      <GarmentForm
        garment={garment}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/garments"
      />
    </Layout>
  )
}

export default GarmentCreate
