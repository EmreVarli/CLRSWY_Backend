import React from "react";
import { StyledImg, HeaderStyle } from "./Header.style";

const Logo = () => {
  return (
    <>
      <StyledImg
        src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="Logo"
      />
      <HeaderStyle>Welcome to Clarusway</HeaderStyle>
    </>
  );
};

export default Logo;
