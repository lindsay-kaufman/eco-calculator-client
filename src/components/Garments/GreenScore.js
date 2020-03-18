/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './../shared/Layout'

const GreenScore = () => {
  return (
    <Layout>
      <div className="garment-body">
        <h1>What is your Green Score?</h1>
        <p>The Sustainable Apparel Coalition is a group of over 180 brands, retailers, suppliers, affiliates, nonprofits, and academic institutions aiming to reduce the social and environmental impacts of consumer goods. In 2016, the SAC added the Materials Sustainability Index Contributor (MSI) to their suite of Higg Index Tools. The Higg MSI allows users to compare scores for common materials, based on the materials impact on climate change, land use, water scarcity, resource depletion, eutrophication, and chemistry. Find out more about the <a href="https://apparelcoalition.org/higg-msi/" className="redirect-link" target="_blank">Higg Materials Sustainability Index.</a></p>

        <p>Your green score is simply a weighted sum of the <a href="https://msi.higg.org/sac-materials/1/textiles" className="redirect-link" target="_blank">MSI material scores.</a> While the MSI shows you the environmental and social impact of materials in your apparel, footwear and home textile products, the Eco-Calculator will measure the overall impact of your product itself.</p>

        <Link to={'/garments'} className="redirect-link">Back to your garments</Link>
      </div>
    </Layout>
  )
}

export default GreenScore
