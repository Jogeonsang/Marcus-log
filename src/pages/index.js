import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"
import Intro from '../components/Intro'
import Projects from "../components/Projects"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Wrapper>
      <Header/>
      <Intro/>
      <Content>
        <PostWrapper>
          <PostTitle>recent post</PostTitle>
          <PostSection>
            {posts.map((post, index) => {
                if (index < 4) {
                  return <Post key={post.id} description={post.frontmatter.description} tags={post.frontmatter.tags}
                               title={post.frontmatter.title}
                               image={post.frontmatter.featuredImage.childImageSharp.fixed.src} slug={post.fields.slug}/>
                }
              }
            )}
          </PostSection>
        </PostWrapper>
        <Projects/>
      </Content>
      <Footer/>
    </Wrapper>
  )
}

export default BlogIndex

const Wrapper = styled.div`
  background-color: #141B23;
  width: 100%;
  overflow: auto;
`

const Content = styled.main`
  max-width: 1300px;
  position: relative;
  z-index: 2;
  padding-top: 64px;
  padding-left: 24px;
  padding-right: 24px;
  margin: auto;
`

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

const ProjectWrapper = styled.div`
  
`
export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {fileAbsolutePath: {regex: "/posts/"}}
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
`

/*
export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;*/
