import React from "react"

import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import styled from "styled-components"

const Posts = styled.ol`
  list-style-type: none;
  margin: 0;
`

const Post = styled.li``

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  //console.log(data)

  return (
    <Layout>
      <h1>Blog</h1>
      <Posts>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Post>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </Post>
          )
        })}
      </Posts>
    </Layout>
  )
}

export default BlogPage
