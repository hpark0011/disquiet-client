import styled, { ThemeProvider, css } from "styled-components";
import logo from "../assets/disquiet_logo.png";
import mediaQuery from "../lib/styles/mediaQuery";
import { NavLink, Link } from "react-router-dom";
import theme from "../theme";
import { Button } from "../GlobalStyles";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar>
        <NavContainer>
          <LogoLink exact to="/">
            <img src={logo} alt="logo" height="19" />
          </LogoLink>
          <NavMenu>
            <StyledNavLink to="/blog">블로그</StyledNavLink>
            <StyledNavLink to="/community">커뮤니티</StyledNavLink>
            <StyledNavLink to="/product/new">프로덕트 공유하기</StyledNavLink>
            <NavMenuDivider></NavMenuDivider>
            <LoginBtn to="/login">로그인</LoginBtn>
            <LoginBtn primary={true} to="/register">
              회원가입
            </LoginBtn>
          </NavMenu>
          <NavMenuBtn>
            <MenuRoundedIcon />
          </NavMenuBtn>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;

  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  }
  @media ${({ theme }) => theme.devices.mobileLandscape} {
  }
  @media ${({ theme }) => theme.devices.mobilePortrait} {
  }
`;

const activeClassName = "nav-item-active";

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  line-height: 1em;
  color: black;
  text-decoration: none;
  min-height: 100%;

  &:hover {
    box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.primary};
  }

  &.${activeClassName} {
    box-shadow: 0px 1px 0px ${({ theme }) => theme.colors.primary};
  }
`;

const LoginBtn = styled(Link)`
  margin-left: ${({ primary }) => (primary ? "0.5rem" : "0")};
  padding: 0.75rem 0.75rem;
  background-color: ${({ primary }) => (primary ? "#6D55FF" : "#ededed")};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ primary }) => (primary ? "white" : "black")};
  line-height: 1em;
  text-decoration: none;
  border-radius: 10rem;
  font-weight: 500;

  &:hover {
    opacity: 0.7;
  }
`;

const NavMenuDivider = styled.div`
  width: 1px;
  height: 1rem;
  margin: 0 1rem;
  display: block;
  background-color: ${({ theme }) => theme.colors.gray_2};
`;

const NavMenuBtn = styled.div`
  display: none;

  @media ${({ theme }) => theme.devices.tablet} {
    display: block;
  } ;
`;

const NavMenuBtnIcn = styled.div`
  background-color: blue;
`;

export default Header;
