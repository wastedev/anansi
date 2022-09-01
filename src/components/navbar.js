import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import FontAwesomeIcon from "@fortawesome/free-regular-svg-icons"

const StyledContainer = styled.div`
  border-bottom: 1px solid black;
  max-width: 1320px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledNavBar = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
`

const StyledMenu = styled.div`
  justify-content: center;
  display: flex;
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

const NavBar = () => {
  return (
    // <StyledContainer>
    <StyledNavBar>
      <StyledMenu>
        <Link to="/">
          {" "}
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
        <button>
          {/* <FontAwesomeIcon icon="fa-light fa-phone" /> */}
          Book a call
        </button>
      </StyledFeedbackButtons>
    </StyledNavBar>
    // </StyledContainer>
  )
}

export default NavBar
