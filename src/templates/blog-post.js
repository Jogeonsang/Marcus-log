import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import defaultImg from "../images/default.svg"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  console.log(data.markdownRemark.frontmatter)
  return (
    <TemplateContainer>
      <Header/>
      <TemplateWrapper>
      <Content>
        <TitleWrapper>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <hr/>
        </TitleWrapper>
        <Thumbnail>
          <img src={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src}/>
          {/* <Img fixed={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src} alt={"data.blogPost.author"} /> */}
        </Thumbnail>
        <Section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr/>
      </Content>
      <Footer/>
      </TemplateWrapper>
    </TemplateContainer>
  )
}
{/* <p>
    <time>{post.frontmatter.date}</time>
    <span> • </span><span>조건상</span></p> */}
export default BlogPostTemplate

const TemplateContainer = styled.div`
  width: 100%;
  overflow: auto;
  background: #141B23;
`

const TemplateWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const Content = styled.div`

  @media screen and (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
  
  section {
    color: whitesmoke;
    
    p {
      
    }
    
    h2, h3 {
      font-size: 30px; 
      display: block;
      font-weight: bold;
    }
    
    a {
      color: rgb(81, 92, 230);
    }
    
  }
`

const TitleWrapper = styled.header`
  margin: 60px 0 30px;
  
  h1 {
    font-size: 38px;
    line-height: 1.5;
    color: whitesmoke;
    font-weight: 900;
  }
  
  hr {
    border-top: 1px solid rgb(229, 229, 229);
    margin: 50px 0px;
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

const Section = styled.section`
  padding: 30px 0;  
`;
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
          childImageSharp {            fluid(maxWidth: 800) {              ...GatsbyImageSharpFluid            }          }
        
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
