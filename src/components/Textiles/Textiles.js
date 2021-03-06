import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Textiles = ({ user, match, handleChange, name, value, garment }) => {
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
      .catch(console.error('error'))
      .finally(res => {
        setComponent(res.data.component.name)
        console.log('Component set!' + res.data.component)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select material
          <select name={name} onChange={handleChange}>
            <option value={value}>Select a material</option>
            {textiles && textiles.length > 0 && textiles.map(textile => {
              return <option key={textile.name} value={textile.id}>{textile.name}</option>
            })}
          </select>
        </label>{' '}
        <br />
      </form>
    </div>
  )
}

export default Textiles
