import * as React from "react";
import styled, {css} from 'styled-components';

import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IoIosMoon } from "@react-icons/all-files/io/IoIosMoon"
import * as colors from '../../styles/colors'
import icon from '../../images/icon.svg'

const Header = () => {
  let pathname;

  // SSR window error
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }


  return (
    <HeaderContainer border={pathname !== '/' && '1px' }>
      <HeaderWrapper>
        <LeftComponent>
          <Home href={"/"}>
            <img src={icon} alt="icon"/>
          </Home>
          <Text href={"/blog"} isActive={pathname === '/blog/'}>Blog</Text>
          <Text href={"/resume"} isActive={pathname === '/resume/'}>Resume</Text>
        </LeftComponent>
        <RightComponent>
          <Icon>
            <IoIosMoon color={"#B7BABC"} size={24}/>
          </Icon>
          <Icon href={"https://github.com/Jogeonsang"} target="_blank">
            <GoMarkGithub color={"#B7BABC"} size={22}/>
          </Icon>
          <Icon href={"https://www.linkedin.com/in/%EA%B1%B4%EC%83%81-%EC%A1%B0-5a570612b/"} target="_blank">
            <FaLinkedin color={"#B7BABC"} size={22}/>
          </Icon>
        </RightComponent>
      </HeaderWrapper>
    </HeaderContainer>
  )
}


export default Header

const HeaderContainer = styled.nav`
  position: sticky;
  background-color: #141B23;
  z-index: 100;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  
  padding-left: 32px;
  padding-right: 32px;
  background-color: #141B23;;
  
  border-bottom: ${props => props.border && `${props.border} solid #24272b;`}; 
`;
const LeftComponent = styled.div`
  display: flex;
  align-items: center;
  
`;
const RightComponent = styled.div`
  display: flex;
  align-items: center;
`;
const Home = styled.a`
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: ${colors.pointBlue};
    
  cursor:pointer;
  
  img {
    width: 60px; 
    height: 60px;
  }
`;

const Text = styled.a<{isActive: boolean}>`
  position: relative;
  padding: 10px;
  margin: 10px;
  color: #FFF;
  font-weight: 400;
  font-size: 16px;
  cursor:pointer;
  text-decoration: none;
  
  ${({ isActive }) => isActive && css`
      text-decoration: white wavy underline;
      text-underline-position: under;
   `};
`;

const Icon = styled.a`
  margin: 0 12px;
  background: none;
  border: none;
  opacity: 0.7;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 32px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor:pointer;
`;
