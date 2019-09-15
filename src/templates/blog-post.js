import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  const post = data.mdx
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <MDXRenderer>{post.body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
      }
    }
  }
`
