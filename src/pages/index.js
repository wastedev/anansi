import * as React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

const StyledHomePage = styled.div`
  /* flex-direction: column; */
  /* position: relative; */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`

const StyledButton = styled.div`
  margin: 10px; //test
  button {
    color: white;
    background-color: #65a30d;
    border-radius: 8px;
    border: 1px solid #65a30d;
    width: 225px;
    height: 30px;
    font-size: 20px;
    text-align: center;
    :hover {
      height: 35px;
      font-size: 24px;
    }
  }
`

const StyledCarouselBoxBlock = styled.div`
  /* margin: 0;
  padding: 0; */
  width: 50vh;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    font-style: normal;
    font-weight: 100;
    font-size: 64px;
    line-height: 64px;
    color: #292524;
  }

  div {
    align-items: flex-end;
    right: 0;
  }

  text {
    font-size: 20px;
    color: #57534e;
    line-height: 30px;
  }
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledCarouselBoxBlock>
        <h1>
          Lorem ipsum <b>dolor</b> sit amet!
        </h1>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </text>
        <div>
          <StaticImage
            src="../images/CodeSnippetImage.png"
            alt="non image"
          ></StaticImage>
        </div>
        <StyledButton>
          <button>Grow my business</button>
        </StyledButton>
      </StyledCarouselBoxBlock>
    </StyledHomePage>
  )
}

export default HomePage
