import React from "react";
import logo from "../images/youtube_icon.png";
import styled from "styled-components";

const HeaderLogo = styled.header`
  display: flex;
  background: white;
  color: black;
  width: 100vw;
  height: 40px;
`;

const Logo = styled.h1`
  font-size: 22px;
  font-family: "Gochi Hand", cursive;
  line-hight: 40px;
  margin: auto 0 auto 2%;
`;

const Header = () => {
  return (
    <HeaderLogo className="header">
      <Logo>
        MyMusicApp <span style={{ fontSize: "8px" }}>powered by</span>
      </Logo>
      <img style={{ maxHeight: "40px" }} src={logo} alt="youtube" />
    </HeaderLogo>
  );
};

export default Header;
