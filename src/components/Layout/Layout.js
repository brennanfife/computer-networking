import React from "react"

import Header from "../Header"
import Footer from "../Footer"
import { Container, Content } from "./Layout.style"
import "../../styles/index.css"

const Layout = ({ children }) => {
  return (
    <Container>
      <Content>
        <Header />
        <main>{children}</main>
      </Content>
      <Footer />
    </Container>
  )
}

export default Layout
