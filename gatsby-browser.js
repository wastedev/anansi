const React = require("react")
import "./src/styles/global.css"
const Layout = require("./src/components/layout/layout").default

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
