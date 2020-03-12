import React from 'react'
import { Link } from 'react-router-dom'
import Textiles from './../Textiles/Textiles'

const GarmentForm = ({ garment, handleSubmit, handleChange, cancelPath, user, match }) => (
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
    <label>Percent</label>
    <input
      value={garment.textileOnePercent}
      name="textileOnePercent"
      onChange={handleChange}
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
    <label>Percent</label>
    <input
      value={garment.textileTwoPercent}
      name="textileTwoPercent"
      onChange={handleChange}
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
    <label>Percent</label>
    <input
      value={garment.textileThreePercent}
      name="textileThreePercent"
      onChange={handleChange}
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
    <label>Percent</label>
    <input
      value={garment.textileFourPercent}
      name="textileFourPercent"
      onChange={handleChange}
      user={user}
      match={match}
    />

    <button type="submit">Create</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default GarmentForm
