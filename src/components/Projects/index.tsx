import * as React from "react"
import styled from 'styled-components';
import Post from "../Post"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {fileAbsolutePath: {regex: "/project/"}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date
          description
          tags
          title
          featuredImage {
            childImageSharp {
              fixed {
            ...GatsbyImageSharpFixed
              }
            }
          }
        }
        id
      }
    }
  }
  `)
  const posts = data.allMarkdownRemark.nodes;

  console.log(posts)
  return (
    <PostWrapper>
      <PostTitle>Proejct</PostTitle>
      <PostSection>
        {posts.map((post, index) => {
            return <Post key={post.id} description={post.frontmatter.description} tags={post.frontmatter.tags}
                         title={post.frontmatter.title}
                         image={post.frontmatter.featuredImage.childImageSharp.fixed.src} slug={post.fields.slug}/>
          }
        )}
      </PostSection>
    </PostWrapper>

  )
};

export default Projects
const PostWrapper = styled.section`

`

const PostTitle = styled.h2`
font-size: 16px;
color: #ff0a78;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 2px;
`

const PostSection = styled.div`
display: flex;
flex-wrap: wrap;
box-sizing: border-box;

padding-top: 20px;
`

