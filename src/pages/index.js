import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMdx.edges
  return (
    <Layout>
      <SEO title="Home" />
      {posts.map(post => {
        return (
          <div key={post.node.id}>
            <Link to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
            <p>
              <small>{post.node.frontmatter.date}</small>
            </p>
            <p>{post.node.excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query BlogPosts {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
