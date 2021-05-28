import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import styled from "styled-components"
import FetchData from '../examples/fetchData'
import AllRecipes from '../components/AllRecipes.js'
import SEO from '../components/SEO'
const Wrapper = styled.section`
  color: red;
  h1 {
    color: yellowgreen;
  }
  .text {
    text-transform: uppercase;
  }
`

export default function Home() {
  return (
    <Layout>
      <SEO title='Home'/>
      <main className='page'>
        <header className='hero'>
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className='hero-container'>
            <div className='hero-text'>
              <h1>Simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        {/* <FetchData /> */}
        <AllRecipes />
      </main>
    </Layout>
  )
}
