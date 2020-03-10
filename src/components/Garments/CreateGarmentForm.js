import React from 'react'
import { Link } from 'react-router-dom'
import Textiles from './../Textiles/Textiles'

// Add 4 'materials' sections
// The first will be required, the remaining will be optional

const GarmentForm = ({ garment, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Type</label>
    <input
      placeholder="Dress..."
      value={garment.style}
      name="style"
      onChange={handleChange}
    />

    <label>Description</label>
    <input
      placeholder="Black polkadot dress..."
      value={garment.description}
      name="description"
      onChange={handleChange}
    />

    <Textiles />
    <Textiles />
    <Textiles />
    <Textiles />

    <button type="submit">Create</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default GarmentForm
