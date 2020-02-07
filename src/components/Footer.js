import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: black;
  width: 100vw;
  min-height: 100px;
  text-align: center;
  line-height: 100px;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <p>-- Created by Marika Kobylarz --</p>
    </FooterStyle>
  );
};

export default Footer;
