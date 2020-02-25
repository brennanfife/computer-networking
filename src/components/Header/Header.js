import React from "react"
import { Wrapper, Title, Navlist, NavItem } from "./Header.style"

const Header = () => {
  return (
    <Wrapper>
      <h1>
        <Title to="/">Networks</Title>
      </h1>
      <nav>
        <Navlist>
          <li>
            <NavItem to="/">Home</NavItem>
          </li>
          <li>
            <NavItem to="/blog">Blog</NavItem>
          </li>
        </Navlist>
      </nav>
    </Wrapper>
  )
}

export default Header
