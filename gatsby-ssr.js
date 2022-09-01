import * as React from "react"
import Theme from "./src/components/layout/theme"
import Layout from "./src/components/layout/layout"

const wrapPageElement = (elements, props) => {
  return <Layout {...props}>{elements}</Layout>
}

const wrapRootElement = elements => {
  return <Theme>{elements}</Theme>
}

export default { wrapPageElement, wrapRootElement }
