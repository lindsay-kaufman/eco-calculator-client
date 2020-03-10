import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Textiles = (user, match) => {
  const [textiles, setTextiles] = useState([])
  const [component, setComponent] = useState(null)

  useEffect(() => {
    axios({
      url: `${apiUrl}/textiles`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(res => setTextiles(res.data.textiles))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setComponent(component => ({ ...component, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/garments/${match.params.id}`,
      method: 'POST',
      data: { component },
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(res => setComponent(res.data.component.name))
      .catch(console.error)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select material
          <select onChange={handleChange}>
            {textiles && textiles.length > 0 && textiles.map(textile => {
              return <option key={textile.name} value={textile.name}>{textile.name}</option>
            })}
          </select>
        </label>{' '}
        <br />
      </form>
    </div>
  )
}

export default Textiles
