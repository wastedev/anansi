import * as React from "react"
import styled, { ThemeProvider } from "styled-components"

const Theme = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default Theme
