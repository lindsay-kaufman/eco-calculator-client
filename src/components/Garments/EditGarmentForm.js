import React from 'react'
import { Link } from 'react-router-dom'
import Textiles from './../Textiles/Textiles'

// Add 4 'materials' sections
// The first will be required, the remaining will be optional

const EditGarmentForm = ({ garment, handleSubmit, handleChange, cancelPath, user, match }) => (
  <div className="wrapper">
    <div className="card">
      <div className="card-block">
        <form className="k-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Create A Garment</legend>
            <label className="k-form-field">
              <span>Garment Type</span>
              <input
                value={garment.style}
                name="style"
                onChange={handleChange}
              />
            </label>
            <label className="k-form-field">
              <span>Garment Description</span>
              <input
                value={garment.description}
                name="description"
                onChange={handleChange}
              />
            </label>
          </fieldset>
          <fieldset>
            <div>
              <Textiles
                value ={garment.textileOne}
                name="textileOne"
                handleChange={handleChange}
                user={user}
                match={match}
                garment={garment}
              />
              <label>Percent</label>
              <input
                className="k-textbox percents"
                value={garment.textileOnePercent}
                name="textileOnePercent"
                onChange={handleChange}
                user={user}
                match={match}
              />
            </div>
          </fieldset>
          <fieldset>
            <Textiles
              value ={garment.textileTwo}
              name="textileTwo"
              handleChange={handleChange}
              user={user}
              match={match}
              garment={garment}
            />
            <label>Percent</label>
            <input
              className="k-textbox percents"
              value={garment.textileTwoPercent}
              name="textileTwoPercent"
              onChange={handleChange}
              user={user}
              match={match}
            />
          </fieldset>
          <fieldset>
            <Textiles
              value ={garment.textileThree}
              name="textileThree"
              handleChange={handleChange}
              user={user}
              match={match}
              garment={garment}
            />
            <label>Percent</label>
            <input
              className="k-textbox percents"
              value={garment.textileThreePercent}
              name="textileThreePercent"
              onChange={handleChange}
              user={user}
              match={match}
            />
          </fieldset>
          <fieldset>
            <Textiles
              value ={garment.textileFour}
              name="textileFour"
              handleChange={handleChange}
              user={user}
              match={match}
              garment={garment}
            />
            <label>Percent</label>
            <input
              className="k-textbox percents"
              value={garment.textileFourPercent}
              name="textileFourPercent"
              onChange={handleChange}
              user={user}
              match={match}
            />
          </fieldset>
          <button type="submit">Create</button>
          <Link to={cancelPath}>
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    </div>
  </div>
)
export default EditGarmentForm
