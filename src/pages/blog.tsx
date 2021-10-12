import * as React from "react"
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Intro from "../components/Intro"
import Post from "../components/Post"
const Blog = () => {
  const data = useStaticQuery(graphql`
    {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {fileAbsolutePath: {regex: "/post/"}}
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

  const posts = data.allMarkdownRemark.nodes
  return (
    <PostsWrapper>
      <Header/>
      <Intro/>
      <PostWrapper>
        <PostTitle>RECENTLY POST</PostTitle>
        <PostSection>
          {posts.map((post, index) => {
              return <Post key={post.id} description={post.frontmatter.description} tags={post.frontmatter.tags}
                           title={post.frontmatter.title}
                           image={post.frontmatter.featuredImage.childImageSharp.fixed.src} slug={post.fields.slug}/>
            }
          )}
        </PostSection>
      </PostWrapper>
      <Footer/>
    </PostsWrapper>
  )
};

export default Blog

const PostsWrapper = styled.div`
  background-color: #141B23;
  min-height: 600px;
`;

const PostWrapper = styled.section`
  max-width: 1300px;
    position: relative;
    z-index: 2;
    padding-top: 64px;
    padding-left: 24px;
    padding-right: 24px;
    margin: auto
`

const PostTitle = styled.h2`
  font-size: 16px;
  color: #e44643;
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