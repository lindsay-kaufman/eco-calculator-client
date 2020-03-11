import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import EditGarmentForm from './EditGarmentForm'
import Layout from './../shared/Layout'

const GarmentEdit = props => {
  const [garment, setGarment] = useState({ style: '', description: '', textileOne: null, textileTwo: null, textileThree: null, textileFour: null })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/garments/${props.match.params.id}`,
      method: 'GET',
      data: { garment },
      headers: {
        Authorization: `Bearer ${props.user.token}`
      }
    })
      .then(res => {
        setGarment(res.data.garment)
      })
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setGarment(garment => ({ ...garment, [event.target.name]: event.target.value }))
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
        const map = {
          0: 'textileOne',
          1: 'textileTwo',
          2: 'textileThree',
          3: 'textileFour'
        }

        const promises = []
        for (let i = 0; i < 4; i++) {
          if (garment.components[i] === undefined) {
            promises.push(axios({
              url: `${apiUrl}/components/`,
              method: 'POST',
              data: {
                component: {
                  garment_id: `${props.match.params.id}`,
                  textile_id: garment[map[i]]
                }
              }
            }))
          } else {
            promises.push(axios({
              url: `${apiUrl}/components/${garment.components[i].id}`,
              method: 'PATCH',
              data: {
                component: {
                  garment_id: `${props.match.params.id}`,
                  textile_id: garment[map[i]]
                }
              }
            }))
          }
        }

        return Promise.all(promises)
      })

      .then(() => {
        setUpdated(true)
      })
      .catch(console.error)
  }

  if (updated) {
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
