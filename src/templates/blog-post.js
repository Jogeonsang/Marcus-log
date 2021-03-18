import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import defaultImg from "../images/default.svg"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  return (
    <TemplateWrapper>
      <Header/>
      <Content>
        <TitleWrapper>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            <time>{post.frontmatter.date}</time>
            <span> • </span><span>조건상</span></p>
        </TitleWrapper>
        <Thumbnail>
          <Image src={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fixed.src}/>
        </Thumbnail>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr/>
      </Content>
      <Footer/>
    </TemplateWrapper>
  )
}

export default BlogPostTemplate

const TemplateWrapper = styled.div`
  width: 100%;
  overflow: auto;
  background: #141B23;
`

const Content = styled.div`

  @media screen and (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
  width: calc(980px - (30px * 2));
  margin: 0 auto;
  
  section {
    color: whitesmoke;
    
    h1 {
      
    }
    
    h2 {
      
    }
    
    
  }
`

const TitleWrapper = styled.header`
  margin: 60px 0 30px;
  
  h1 {
    font-size: 2em;
    line-height: 1.5;
    color: whitesmoke;
    font-weight: 900;
  }
  
  p {
    font-size: 15.75px;
    color: #f8f9fa;
  }
`

const Thumbnail = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`


const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  object-fit: cover;
  max-height: 483px;
`
export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fixed {
            ...GatsbyImageSharpFixed
          }
          }
        }
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
