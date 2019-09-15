import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
