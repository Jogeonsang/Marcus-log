import * as React from "react";
import styled, {css} from 'styled-components';

import { GoMarkGithub } from "@react-icons/all-files/go/GoMarkGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { IoIosMoon } from "@react-icons/all-files/io/IoIosMoon"
import { HiMenuAlt3 } from "@react-icons/all-files/hi/HiMenuAlt3";
import * as colors from '../../styles/colors'
import {fadeIn} from "../../styles/animation"
import icon from '../../images/icon.svg'
import logo from '../../images/logo/Marcus_logo_full_dark.svg'
import { useState } from "react"

const Header = () => {
  let pathname;

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  // SSR window error
  if (typeof window !== 'undefined') {
    pathname = window.location.pathname;
  }

  const onOpenMenu = () => {
    setIsOpenMenu(() => !isOpenMenu);
  }
  return (
    <HeaderContainer border={pathname !== '/' && '1px' }>
      <HeaderWrapper>
        <LeftComponent>
          <Home href={"/"}>
            <img src={logo} alt="icon"/>
          </Home>
          {/* <Text href={"/blog"} isActive={pathname === '/blog/'}>Blog</Text>
          <Text href={"/resume"} isActive={pathname === '/resume/'}>About</Text> */}
        </LeftComponent>
        <RightComponent>
          <BtnMenu onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <HiMenuAlt3 color={"#B7BABC"} size={20}/>
          </BtnMenu>
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
      <MenuOverlay onClick={() => setIsOpenMenu(!isOpenMenu)} isOpen={isOpenMenu}/>
      <Menu isOpen={isOpenMenu}>
        <MenuInner>
          <Icon isMobile={true}>
            <IoIosMoon color={"#B7BABC"} size={24}/>
          </Icon>
          <Icon href={"https://github.com/Jogeonsang"} target="_blank" isMobile={true} onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <GoMarkGithub color={"#B7BABC"} size={22}/>
          </Icon>
          <Icon href={"https://www.linkedin.com/in/%EA%B1%B4%EC%83%81-%EC%A1%B0-5a570612b/"} target="_blank" isMobile={true} onClick={() => setIsOpenMenu(!isOpenMenu)}>
            <FaLinkedin color={"#B7BABC"} size={22}/>
          </Icon>
        </MenuInner>
      </Menu>
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
  
  @media screen and (max-width: 767px) {
    padding: 0px 20px;
  } 
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
    width: 100px; 
    height: 100px;
  }
  
  @media screen and (max-width: 767px) {
    img {
      width: 40px; 
      height: 40px;
    }
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
  
  @media screen and (max-width: 767px) {
    font-size: 15px;
    padding: 0 4px;
  }
  
  ${({ isActive }) => isActive && css`
      
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
  
  ${({ isMobile }) => isMobile && css`
      display: block !important;
      height: 100%;
      opacity: 1;
  `};
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const BtnMenu = styled.div`
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: fixed;
  width: 240px;
  padding: 18px;
  top: 74px;
  left: 50%;
  transform: translateX(-50%);
  background: #24272b;
  border-radius: 100px;
  text-align: center;
  font-size: 0;
  z-index: 10;
  pointer-events: none;
  opacity: 0;

  ${({ isOpen }) => isOpen && css`
    opacity: 1;
    box-shadow: rgb(23 24 29 / 80%) 0 0 40px;
    pointer-events: auto;
    
    transition: all 0.25s ease-in-out;
    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;
  `};
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MenuInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 8px;
`;

const MenuOverlay = styled.div`
    display: none;
    ${({ isOpen }) => isOpen && css`
      display: block;
      position: fixed;
      background: none;
      top: 0;
      left: 0;
      width: ${innerWidth}px;
      height: ${innerHeight}px;
  `};
 `;