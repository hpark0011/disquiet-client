import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import logo from "../assets/disquiet_logo.png";
import { NavLink, Link } from "react-router-dom";
import theme from "../theme";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <NavContainer>
          <LogoLink exact to="/">
            <img src={logo} alt="logo" height="19" />
          </LogoLink>
          <NavMenu onClick={handleClick} click={click}>
            <NavMenuContainer>
              <StyledNavLink to="/community">커뮤니티</StyledNavLink>
              <StyledNavLink to="/blog">블로그</StyledNavLink>
              <NavMenuDivider />
              <StyledNavLink cta to="/product/new">
                <StyledAddCircleIcon />
                프로덕트 공유하기
              </StyledNavLink>
              <LoginBtn to="/login">로그인</LoginBtn>
              <LoginBtn primary={true} to="/register">
                회원가입
              </LoginBtn>
            </NavMenuContainer>
          </NavMenu>
          <NavMenuIcon onClick={handleClick}>
            {click ? (
              <CloseIcon style={{ color: "black" }} />
            ) : (
              <MenuIcon style={{ color: "black" }} />
            )}
          </NavMenuIcon>
        </NavContainer>
      </Navbar>
    </ThemeProvider>
  );
}

const Navbar = styled.div`
  display: block;
  box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.gray_2};
`;

const NavContainer = styled.div`
  margin: auto;
  padding: 0 8px;
  min-height: 48px;
  width: auto;
  max-width: 1120px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 0 1rem;
  }
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  img {
    margin-top: 2px;
    align-self: center;
  }
`;

const NavMenu = styled.div`
  display: block;
  flex-direction: row;
  align-items: center;
  height: 48px auto;

  @media ${({ theme }) => theme.devices.tablet} {
    display: ${({ click }) => (click ? "flex" : "none")};
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: ${({ click }) => (click ? "auto" : "0px")};
    top: 3.5rem;
    right: 1rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }

  @media ${({ theme }) => theme.devices.mobilePortrait} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    background-color: black;
    position: absolute;
    z-index: 100;
    top: 48px;
    height: 100%;
    width: 100%;
    right: ${({ click }) => (click ? 0 : "-100%")};
    transition: all 0.4s ease;
  }
`;

const NavMenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
  }
`;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  align-items: center;
  margin-left: ${({ cta }) => (cta ? "0px" : "1rem")};
  margin-right: ${({ cta }) => (cta ? ".5rem" : "0")};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1em;
  color: black;
  text-decoration: none;
  height: 48px;

  &:hover {
    box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.primary};
  }

  &.${activeClassName} {
    box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.primary};
  }

  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    margin: 0.25rem 0;
    padding: 0.5rem 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    height: auto;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_1};
      border-radius: 0.75rem;
      box-shadow: none;
    }

    &.${activeClassName} {
      background-color: ${({ theme }) => theme.colors.gray_1};
      border-radius: 0.75rem;
      box-shadow: none;
    }
  }

  @media ${({ theme }) => theme.devices.mobilePortrait} {
    padding: 0.75rem;
    justify-content: center;
    color: white;
    margin: 1.2rem 0;
    min-height: auto;
    font-size: ${({ theme }) => theme.fontSizes.xxxl};
  }
`;

const NavMenuDivider = styled.div`
  width: 1px;
  height: 1rem;
  margin: 0 1rem;
  display: block;
  background-color: ${({ theme }) => theme.colors.gray_2};

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
    height: 1px;
    width: auto;
    background-color: #f0f0f0;
    margin: 0.5rem;
  }

  @media ${({ theme }) => theme.devices.mobilePortrait} {
    margin: 2rem 0;
    height: 1px;
    width: 100%;
    display: block;
  }
`;

const LoginBtn = styled(Link)`
  margin-left: 0.5rem;
  padding: 0.75rem 0.75rem;
  background-color: ${({ primary }) => (primary ? "#6D55FF" : "#ededed")};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ primary }) => (primary ? "white" : "black")};
  line-height: 1em;
  text-decoration: none;
  border-radius: 10rem;
  font-weight: 400;

  &:hover {
    opacity: 0.7;
  }

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
    margin: 0.25rem 0;
    padding: 0.5rem 0.5rem;
    background-color: transparent;
    color: black;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &:hover {
      background-color: ${({ theme }) => theme.colors.gray_1};
      border-radius: 0.75rem;
      box-shadow: none;
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.devices.mobilePortrait} {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    margin-left: 0;
    color: white;
    background-color: transparent;
  }
`;

const StyledAddCircleIcon = styled(AddCircleIcon)`
  color: #6d55ff;
  margin-right: 4px;

  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
`;

const NavMenuIcon = styled.button`
  display: none;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.gray_1};
  border-radius: 20rem;
  border: none;
  height: 38px;
  width: 38px;
  outline: none;
  @media ${({ theme }) => theme.devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.devices.mobilePortrait} {
  } ;
`;

export default Header;
