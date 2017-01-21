import React from 'react'
import { Link } from 'react-router'
import styled, { keyframes } from 'styled-components'

const StyledNav = styled.nav`
  position: fixed;
  z-index: 1;
  @media screen and (min-width: 768px) {
    z-index: 3;
  }
`

const NavItem = styled(Link)`
color: rgba(0, 0, 0, .5);
  text-decoration: none;
  font-size: 1.2em;
  display: block;
  padding: 1em;
  &.active {
    color: rgba(0, 0, 0, .85);
  };
  @media screen and (min-width: 768px) {
    display: inline;
    padding: 0em;
    transition: .5s;
    &:hover {
      color: rgba(0, 0, 0, .85);
      transition: .5s;
    };
    &.active {
      color: rgba(0, 0, 0, .85);
      padding: 0em 1em 0em 1em;
    };
  };
`

const NavText = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  @media screen and (min-width: 768px) {
    padding: 40px;
    height: auto;
    top: auto;
    right: auto;
    background-color: transparent;
    margin-top: 30px;
    margin-left: 120px;
  }
`

export default class Nav extends React.Component {

  render () {
    return (
      <div>
        <StyledNav toggled={this.props.toggled}>
          <NavText id="nav-text" className={this.props.className}>
            <NavItem to="/about" activeClassName="active" onClick={this.props.handleClick}>ABOUT</NavItem>
            <NavItem to="/blog" activeClassName="active" onClick={this.props.handleClick}>BLOG</NavItem>
            <NavItem to="/skills" activeClassName="active" onClick={this.props.handleClick}>SKILLS</NavItem>
            <NavItem to="/portfolio" activeClassName="active" onClick={this.props.handleClick}>PORTFOLIO</NavItem>
          </NavText>
        </StyledNav>
      </div>
    )
  }
}
