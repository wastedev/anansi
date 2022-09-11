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
  padding: 40px 0px;
  width: 100%;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
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
  width: 100%;
  padding: 100px 0px;

  h1 {
    font-size: 40px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-weight: bold;
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
  padding: 40px 0px;


  h1 {
    text-align: center;
    font-size: 40px;
    text-transform:uppercase;
    font-weight:bold;
  }

  h3 {
    text-align: center;
    padding: 10px 0px;
    margin: 0px;
    font-size:20px;
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
    padding: 25px 0px;
  }

  .tecno_wrapper {
    width 100%
  }
`
const TecnoWrapper = styled.div`
  width 100%
`

const StyledContainer = styled.div.attrs({
  className: "container mx-auto",
})``

const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
  }

  p {
    font-size: 16px;
  }
`

const StyledInfoBlock = styled.div`
  padding: 40px 0px;

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

const StyeldTeamSections = styled.div``

const TeamLeft = styled.div`
  flex: 0 0 40%;
  max-width: 40%;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: bold;
  }
`

const TeamRight = styled.div`
  flex: 0 0 60%;
  max-width: 60%;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 11px;
    height: auto;
    right: auto;
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 25px 0px;
    max-width:450px;
  }

  li h3{
    text-align:center;
  }
`

const TeamSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const HomePage = () => {
  return (
    <StyledHomePage>
      <StyledCarouselBoxBlock>
        <StyledContainer>
          <h1>Lorem ipsum dolor sit amet!</h1>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
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
        </StyledContainer>
      </StyledCarouselBoxBlock>
      
      <StyledStrategyBlock>
        <StyledContainer>
          <h1>How we works?</h1>
          <text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do.
          </text>
        </StyledContainer>
      </StyledStrategyBlock>
      
      <StyledTechnologiesblock>
        <StyledContainer>
          <h1>Technologies</h1>
          <TecnoWrapper>
            <ul>
              <li>
                <h3>.NET</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <h3>JS</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <h3>Go</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <h3>Ruby</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>

            <ul>
              <li>
                <h3>Rust</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <h3>Swift</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <h3>React</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
              <li>
                <h3>Ruby</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </li>
            </ul>
          </TecnoWrapper>
        </StyledContainer>
      </StyledTechnologiesblock>

      <StyledInfoBlock>
        <StyledContainer>
          <InfoWrapper>
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
          </InfoWrapper>
        </StyledContainer>
      </StyledInfoBlock>

      <StyeldTeamSections>
        <StyledContainer>
          <TeamSection>
            <TeamLeft>
              <h1>Our team</h1>
            </TeamLeft>
            <TeamRight>
              <ul>
                <li>
                  <h3>peron1</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <h3>peron2</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <h3>peron3</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <h3>peron4</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
                <li>
                  <h3>peron5</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </li>
              </ul>
            </TeamRight>
          </TeamSection>
        </StyledContainer>
      </StyeldTeamSections>
    </StyledHomePage>
  )
}

export default HomePage
