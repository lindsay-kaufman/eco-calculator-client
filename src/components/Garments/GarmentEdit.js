import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import EditGarmentForm from './EditGarmentForm'
import Layout from './../shared/Layout'

const GarmentEdit = props => {
  const [garment, setGarment] = useState({ style: '', description: '' })
  const [updated, setUpdated] = useState(false)
  const [components, setComponents] = useState({ textileOne: null, textileTwo: null, textileThree: null, textileFour: null })
  const [componentUpdated, setComponentUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/garments/${props.match.params.id}`)
      .then(res => {
        setGarment(res.data.garment)
        setComponents(res.data.garment.components)
      })
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setGarment(garment => ({ ...garment, [event.target.name]: event.target.value }))
    setComponents(components => ({ ...components, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/garments/${props.match.params.id}`,
      method: 'PATCH',
      data: { garment },
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(() => {
        axios({
          url: `${apiUrl}/components/${components.id}`,
          method: 'PATCH',
          data: {
            component: {
              garment_id: `${props.match.params.id}`,
              textile_id: garment.textileOne
            }
          }
        })
      })
      .then(() => {
        axios({
          url: `${apiUrl}/components`,
          method: 'PATCH',
          data: {
            component: {
              garment_id: `${props.match.params.id}`,
              textile_id: garment.textileTwo
            }
          }
        })
      })
      .then(() => {
        axios({
          url: `${apiUrl}/components`,
          method: 'PATCH',
          data: {
            component: {
              garment_id: `${props.match.params.id}`,
              textile_id: garment.textileThree
            }
          }
        })
      })
      .then(() => {
        axios({
          url: `${apiUrl}/components`,
          method: 'PATCH',
          data: {
            component: {
              garment_id: `${props.match.params.id}`,
              textile_id: garment.textileFour
            }
          }
        })
      })
      .then(() => {
        setUpdated(true)
        setComponentUpdated(true)
      })
      .catch(console.error)
  }

  if (updated && componentUpdated) {
    return <Redirect to={`/garments/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <EditGarmentForm
        garment={garment}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={props.user}
        match={props.match}
        cancelPath={`/garments/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default GarmentEdit
