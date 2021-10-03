import * as React from "react"
import {Link} from 'gatsby'
import styled from "styled-components"
import defaultImg from '../../images/default.svg';
import writerIcon from '../../images/favicon.svg';

interface Props {
  title: string;
  description?: string | null;
  tags: [string] | string;
  image: string;
  slug: string;
}
const Post:React.FC<Props> = (props) => {
  const {title, description, tags, image, slug} = props;
  return (
    <PostContainer>
      <PostOverlay to={slug}/>
      <PostWrapper>
        <Header>
          <ImageBox>
            <ImageInner>
              <Image src={image}/>
            </ImageInner>
          </ImageBox>
          <Desc>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Tag>{tags}</Tag>
          </Desc>
        </Header>
        <Footer>
          <WriterBox>
            <img src={writerIcon}/>
            <a>Marcus</a>
          </WriterBox>
        </Footer>
      </PostWrapper>
    </PostContainer>
  )
}

export default Post

const PostContainer = styled.div`
  position: relative;
  width: 100%;
  transition: all .2s;
  border-radius: 6px;
  text-decoration: none;
  box-sizing: border-box;
  margin-bottom: 20px;
  
  
  @media (min-width:768px) {
    max-width: 33%;
    flex: 0 0 33%;
    padding-left: 7.5px;
    padding-right: 7.5px;
  }
  @media (min-width: 1024px) {
    max-width: 25%;
    flex: 0 0 25%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const PostOverlay = styled(Link)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const PostWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Header = styled.header`
  padding-bottom: 50px;
  height: 100%;
  position: relative;
`;

const ImageBox = styled.a`
  height: 145px;
  
  background-color: #24272b;
  background-image: url(${defaultImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 30px;
  width: 100%;
  position: relative;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
`;

const ImageInner = styled.div``;
const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  backface-visibility: hidden;
  object-position: center;
`;

const Desc = styled.div`
  position: relative;
  background: #2C3135;
  height: 149px;
  padding: 15px;
  box-sizing: inherit;
`;

const Title = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #b6b7b8;
  line-height: 1.4;
  cursor: pointer;
`;

const Text = styled.span`
  display: block;
  font-size: 13.5px;
  color: #717174;
  word-break: break-word;
  padding-top: 6px;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: 20px;
  overflow: hidden;
  -webkit-line-clamp: 3;
`;

const Tag = styled.span`
  font-size: 12px;
  position: absolute;
  bottom: 16px;
  left: 0;
  padding: 0 16px;
  line-height: 1.1;
  color: #717174;
  white-space: normal;
`;

const Footer = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #393c42;
  background: #2c3035;;
`;

const WriterBox = styled.div`
  left: 16px;
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  img {
    float: left;
    border-radius: 4px;
    overflow: hidden;
    width: 22px;
    height: 22px;
    object-fit: cover;
  }
  
  a {
    float: left;
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    color: #717174;
    padding-left: 10px;
  }
`;