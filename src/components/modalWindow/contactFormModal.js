import * as React from "react"
import styled from "styled-components"
import "./modalStyles.css"

//#region testmodal

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

const [modalActive, setModalActive] = React.useState(true)

const Modal = ({ active, setActive }) => {
  return (
    <div className="modal">
      <div className="modal__content"></div>
    </div>
  )
}

export default Modal
