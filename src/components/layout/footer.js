import * as React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  align-items: center;
  font-size: 20px;
  background-color: red;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const Footer = () => {
  return (
    <footer>
      <StyledFooter>Это футер для твоей жирной мамаши</StyledFooter>
    </footer>
  )
}

export default Footer
