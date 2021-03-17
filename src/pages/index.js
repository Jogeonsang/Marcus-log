import * as React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Post from "../components/Post"
import CH from "../images/CC.png"
import Projects from "../components/Projects"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Wrapper>
      <Header/>
      <Intro>
        <Wave>
          <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74">
            <path
              d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
          </svg>
        </Wave>
        <img src={CH}/>
      </Intro>
      <Content>
        <PostWrapper>
          <PostTitle>RECENTLY POST</PostTitle>
          <PostSection>
            {posts.map((post, index) => {
                if (index < 4) {
                  return <Post key={post.id} description={post.frontmatter.description} tags={post.frontmatter.tags}
                               title={post.frontmatter.title}
                               image={post.frontmatter.featuredImage.childImageSharp.fluid.src} slug={post.fields.slug}/>
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

const Intro = styled.div`
  position: relative;
  height: 400px;
  background: linear-gradient( 0deg,hsla(200deg, 100%, 85%, 0.1),hsla(200deg, 100%, 85%, 0));
  transition: hsla(200deg, 100%, 85%, 0) 350ms linear 0s, hsla(200deg, 100%, 85%, 0.1) 350ms linear 0s;
  
  img {
    z-index: 10;
    position: absolute;
    width: 160px;
    right: 240px;
    top: 120px;
  }
`
const Wave = styled.div`
      overflow: hidden;
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: 100%;
    height: 90px;
    transform: translateY(1px);
    z-index: 3;
    
    svg {
    position: absolute;
    left: -3%;
    right: -3%;
    bottom: 0px;
    width: 106%;
    min-width: 600px;
    fill: #141B23;
    transition: fill 350ms ease 0s;
}
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
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
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
