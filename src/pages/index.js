import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import SbEditable from 'storyblok-react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  const content = JSON.parse(story.content)

  const components = content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

    return (
  <Layout>
    <Seo title="Home" />
    <h1>{ content.title }</h1>
    { components }
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
)}

export default IndexPage
export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {

    content
    name
    }
  }
`

