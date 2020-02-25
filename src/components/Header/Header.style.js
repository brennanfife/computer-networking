import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.header`
  padding: 1rem 0 3rem;
`

export const Title = styled(Link)`
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
`

export const Navlist = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
`

export const NavItem = styled(Link)`
  color: #999999;
  font-size: 0.9rem;
  margin-right: 1.3rem;
  text-decoration: none;
`
