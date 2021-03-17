import * as React from "react"
import styled from "styled-components"

const Footer = () => (
  <FooterWrapper>
    <FooterBox>
      <Copyright>© 2021 Marcus. All Rights Reserved.</Copyright>
    </FooterBox>
  </FooterWrapper>
)

export default Footer

const FooterWrapper = styled.footer`
  position: relative;
  max-width: 1300px;
  padding: 0;
  margin: 0 auto;
`;

const FooterBox = styled.div`
  width: inherit;
  padding-left: 24px;
  padding-right: 24px;
  height: 60px;
`;

const Copyright = styled.span`
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  font-size: 12px;
  color: #A7A9AA;
`;