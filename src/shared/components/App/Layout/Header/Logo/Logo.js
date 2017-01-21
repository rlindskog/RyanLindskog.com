import React from 'react'
import logo from './Ryan-Lindskog-Logo.png'
import styled from 'styled-components'
import { Link } from 'react-router'

const StyledLogo = styled.img`
  position: fixed;
  height: 70px;
  transition: .5s;
  vertical-align: middle;
  margin: 20px;
  @media screen and (min-width: 768px) {
    position: fixed;
    margin: 40px;
    vertical-align: middle;
    height: 90px;
  }
`

export default class Logo extends React.Component {
  render () {
    return (
      <Link to="/" activeClassName="active">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
    )
  }
}
