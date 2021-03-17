import * as React from "react"
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from "gatsby"
import Header from "../components/Header"
import Footer from "../components/Footer"
import CH from "../images/CC.png"
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
  `)

  const posts = data.allMarkdownRemark.nodes
  return (
    <PostsWrapper>
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
      <PostWrapper>
        <PostTitle>RECENTLY POST</PostTitle>
        <PostSection>
          {posts.map((post, index) => {
              return <Post key={post.id} description={post.frontmatter.description} tags={post.frontmatter.tags}
                           title={post.frontmatter.title}
                           image={post.frontmatter.featuredImage.childImageSharp.fluid.src} slug={post.fields.slug}/>
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