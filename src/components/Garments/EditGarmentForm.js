import React from 'react'
import { Link } from 'react-router-dom'
import Textiles from './../Textiles/Textiles'

// Add 4 'materials' sections
// The first will be required, the remaining will be optional

const EditGarmentForm = ({ garment, handleSubmit, handleChange, cancelPath, user, match }) => (
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

    <Textiles
      value ={garment.textileOne}
      name="textileOne"
      handleChange={handleChange}
      user={user}
      match={match}
    />
    <Textiles
      value ={garment.textileTwo}
      name="textileTwo"
      handleChange={handleChange}
      user={user}
      match={match}
    />
    <Textiles
      value ={garment.textileThree}
      name="textileThree"
      handleChange={handleChange}
      user={user}
      match={match}
    />
    <Textiles
      value ={garment.textileFour}
      name="textileFour"
      handleChange={handleChange}
      user={user}
      match={match}
    />

    <button type="submit">Update</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default EditGarmentForm
