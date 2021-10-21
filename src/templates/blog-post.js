import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Header from "../components/Header"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import profileImg from '../images/profile.jpg';
import moment from 'moment';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data


  return (
    <TemplateContainer>
      <SEO title={`Marcus Log - ${post.frontmatter.title}`} ogImage={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src} description={post.frontmatter.description}/>
      <Header/>
      <TemplateWrapper>
      <Content>
        <TitleWrapper>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <hr/>
          <div>마지막 업데이트  { moment(post.frontmatter.date).format('YYYY.MM.DD')}</div>
        </TitleWrapper>
        <Thumbnail>
          <img src={data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid.src}/>
        </Thumbnail>
        <Section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr/>
      </Content>
      <Profile>
        <img src={profileImg}/>
        <div>
          <div>
            <span style={{fontWeight: 700}}>조건상</span>
            <span style={{margin: '0 10px', border: '0 solid #e5e7eb'}}>|</span>
            <span>Frontend Developer</span>
          </div>
          <div>
            <a href="https://github.com/Jogeonsang" target="_blank" >GitHub</a>
          </div>
        </div>
      </Profile>
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
      color: #9fa8da;
      text-decoration: none;

      &:hover {
        --tw-shadow: 0 2px 0 #9fa8da;;
        box-shadow: 0 0 transparent,0 0 transparent,var(--tw-shadow);
        box-shadow: var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow);
      }
    }
    
    ol {
        margin-left: 1.3rem;
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
    border-top: 0.5px solid hsla(0,0%,100%,.3);
    height: 0px;
    margin-bottom: 24px;
  }
  p {
    font-size: 15.75px;
    color: #f8f9fa;
  }

  div {
    color: #aaa;
    text-align: right;
    margin-bottom:50px;
  }
`

const Thumbnail = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`

const Section = styled.section`
  padding: 30px 0;  
  font-size: 18px;
  ul {
    margin-left: 1.3rem;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  div {
    padding-left: 20px;
    font-size: 1.3rem;
    line-height : 1.75rem;
    
    span {
      position: relative;

      &::nth-child(1) {

        &::after {
          content: "";
          width: 100%;
          height: 6px;
          background: #e44643;
          position: absolute;
          bottom: 3px;
          left: 0;
          opacity: .5;
        }
      }
    }

    a {
      color: #9fa8da;
      font-size: .875rem;
      text-decoration: none;
    }
  }
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
