import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const StyledNavBar = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  min-width: 1320px;
`

const StyledMenu = styled.div`
  a:first-child {
    :hover {
      background-color: #84cc16;
    }
  }

  a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    padding-right: 30px;
    font-size: 20px;
    color: #a8a29e;
    text-decoration: none;

    :hover {
      color: #84cc16;
    }
  }
`

const StyledFeedbackButtons = styled.div`
  button {
    margin-left: 30px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-radius: 6px;
    gap: 12px;
    padding: 8px 18px;
    font-size: 16px;
    border: none;
    background-color: #84cc16;
    color: white;

    :hover {
      color: white;
      background-color: black;
    }
  }
`

//#region contactForm

const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  z-index: -1;
  opacity: 0;
  transition: all 0.09s ease-out;
`

const StyledModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 0;
`
const StyledModalWindow = styled.div`
  position: relative;
  z-index: 2;
  width: 550px;
  border-radius: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  background-color: white;
  padding: 30px;
`

const StyledCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: none;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`

//#endregion

const NavBar = () => {
  return (
    <StyledContainer>
      <StyledNavBar>
        <StyledMenu>
          <Link to="/">
            <StaticImage loading="eager" src="../images/logo.svg" alt="Logo" />
          </Link>
          <Link to="/cases">Cases</Link>
          <Link to="/services">Services</Link>
          <Link to="/aboutUs">About us</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contacts">Contacts</Link>
        </StyledMenu>
        <StyledFeedbackButtons>
          <button>t</button>
          <button>Book a call</button>
        </StyledFeedbackButtons>
      </StyledNavBar>
    </StyledContainer>
  )
}

export default NavBar
