import * as React from "react"
import styled from "styled-components"
import CH from "../../images/CC.png"

const Index = () => {
  return (
    <IntroWrapper>
      <Wave>
        <svg
          preserveAspectRatio="none"
          width="1440"
          height="74"
          viewBox="0 0 1440 74"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </Wave>
    </IntroWrapper>
  )
}
export default Index
const IntroWrapper = styled.div`
  position: relative;
  height: 200px;
  background: linear-gradient(
    0deg,
    hsla(200deg, 100%, 85%, 0.1),
    hsla(200deg, 100%, 85%, 0)
  );
  transition: hsla(200deg, 100%, 85%, 0) 350ms linear 0s,
    hsla(200deg, 100%, 85%, 0.1) 350ms linear 0s;

  img {
    z-index: 10;
    position: absolute;
    width: 160px;
    right: 240px;
    top: 120px;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
    img {
      display: none;
    }
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
    fill: var(--chakra-colors-gray-800);
    transition: fill 350ms ease 0s;
  }
`
