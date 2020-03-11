import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import GarmentForm from './CreateGarmentForm'
import Layout from '../shared/Layout'

const GarmentCreate = props => {
  const [garment, setGarment] = useState({ style: '', description: '', rating: '', textileOne: null, textileTwo: null, textileThree: null, textileFour: null })
  const [garmentId, setGarmentId] = useState(null)

  const handleChange = event => {
    event.persist()
    setGarment(garment => ({ ...garment, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let tempGarmentId

    axios({
      url: `${apiUrl}/garments`,
      method: 'POST',
      data: { garment },
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => {
        tempGarmentId = res.data.garment.id
        return axios({
          url: `${apiUrl}/components`,
          method: 'POST',
          data: {
            component: {
              garment_id: tempGarmentId,
              textile_id: garment.textileOne
            }
          }
        })
      })
      .then(() => {
        return axios({
          url: `${apiUrl}/components`,
          method: 'POST',
          data: {
            component: {
              garment_id: tempGarmentId,
              textile_id: garment.textileTwo
            }
          }
        })
      })
      .then(() => {
        return axios({
          url: `${apiUrl}/components`,
          method: 'POST',
          data: {
            component: {
              garment_id: tempGarmentId,
              textile_id: garment.textileThree
            }
          }
        })
      })
      .then(() => {
        return axios({
          url: `${apiUrl}/components`,
          method: 'POST',
          data: {
            component: {
              garment_id: tempGarmentId,
              textile_id: garment.textileFour
            }
          }
        })
      })
      .catch(console.error)
      .finally(() => {
        setGarmentId(tempGarmentId)
      })
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
        user={props.user}
        match={props.match}
        cancelPath="/garments"
      />
    </Layout>
  )
}

export default GarmentCreate
