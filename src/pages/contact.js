import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from '../components/SEO'

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default function Contact({ data }) {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout>
      <SEO title='Contact' />
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>

            <h3>Wany Yo Get In Touch?</h3>
            <p>
              Helvetica literally vinyl kitsch listicle narwhal. Distillery crucifix tattooed, next level normcore man braid intelligentsia pitchfork pok pok hammock sustainable unicorn locavore gochujang hella. Actually raw denim hell of 90's chicharrones iceland migas church-key distillery. Bicycle rights coloring book subway tile four dollar toast wolf fingerstache chartreuse semiotics craft beer copper mug street art. Chartreuse post-ironic prism vaporware craft beer.
                    </p>
            <p>
              Intelligentsia everyday carry bitters jianbing post-ironic art party normcore gochujang fingerstache vegan small batch farm-to-table actually knausgaard twee. Pork belly meditation marfa church-key. Woke pop-up bicycle rights chillwave beard twee snackwave keffiyeh jean shorts poutine bushwick. Vexillologist occupy hexagon raclette microdosing squid iPhone mixtape. Adaptogen subway tile tumeric unicorn dreamcatcher, master cleanse ramps heirloom pok pok everyday carry vinyl craft beer migas kale chips. +1 green juice beard banjo knausgaard.
                    </p>
          </article>
          <article>
            <form
              className='form contact-form'
              action="https://formspree.io/f/xvodakek"
              method="POST"
            >
              <div className='form-row'>
                <label htmlFor="name">your name</label>
                <input type="text" name="name" defaultValue="" />
              </div>
              <div className='form-row'>
                <label htmlFor="email">your email</label>
                <input type="email" name="email" defaultValue="" />
              </div>
              <div className='form-row'>
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className='btn block'>
                submit
                            </button>
            </form>
          </article>
        </section>
        <section className='featured-recipes'>
          <h5>Look at this Awesome souce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}
