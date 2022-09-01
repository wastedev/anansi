import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  a {
    padding-right: 30px;
    font-size: 20px;
    text-decoration: none;

    :hover {
      text-decoration: underline;
      color: #84cc16;
    }
  }
`

const StyledFeedbackButtons = styled.div`
  button {
    margin-left: 30px;

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
        <Link to="/">Logo</Link>
        <Link to="/cases">Cases</Link>
        <Link to="/services">Services</Link>
        <Link to="/aboutUs">About us</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contacts">Contacts</Link>
      </StyledMenu>
      <StyledFeedbackButtons>
        <button>кнопка1</button>
        <button>кнопка2</button>
      </StyledFeedbackButtons>
    </StyledNavBar>
    // </StyledContainer>
  )
}

export default NavBar
