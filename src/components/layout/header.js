import * as React from "react"
import Modal from "../modalWindow/contactFormModal"
import NavBar from "../navbar"

const Header = () => {
  const [modalActive, setModalActive] = React.useState(true)

  return (
    <header>
      <NavBar></NavBar>
      <Modal active={modalActive} setActive={setModalActive} />
    </header>
  )
}

export default Header
