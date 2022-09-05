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

const StyledStrategyBlock = styled.div`
  background-color: #292524;
  color: white;

  h1 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 60px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
    line-height: 120px;
  }

  text {
    justify-content: center;
    padding: 10px;
    color: #a8a29e;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }
`
const StyledTechnologiesblock = styled.div`
  h1 {
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
    text-align: center;
    padding: 10px 0px;
    margin: 0px;
  }

  p {
    text-align: center;
    margin: 0px;
  }

  ul {
    height: auto;
    right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 11px;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 3;
    position: relative;
    width: 213px;
  }

  .tecno_wrapper {
  }
`

const StyledInfoBlock = styled.div`
  padding: 40px 0px;

  .info_wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .info_block {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .image_right {
    height: 400px;
    overflow: hidden;
  }
  .text_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

      <StyledStrategyBlock>
        <h1>How we works?</h1>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do.
        </text>
      </StyledStrategyBlock>

      <StyledTechnologiesblock>
        <h1>Technologies</h1>
        <div className="tecno_wrapper">
          <ul>
            <li>
              <h3>.NET</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
            <li>
              <h3>JS Rust</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
            <li>
              <h3>Go Swift</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
            <li>
              <h3>Ruby</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </li>
          </ul>
        </div>
      </StyledTechnologiesblock>

      <StyledInfoBlock>
        <div className="info_wrapper">
          <div className="text_left info_block">
            <h1>Lorem ipsum dolor sit amet!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="image_right info_block">
            <StaticImage
              src="../images/default_img.png"
              alt="non image"
            ></StaticImage>
          </div>
        </div>
      </StyledInfoBlock>
    </StyledHomePage>
  )
}

export default HomePage
