import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Logo from './Logo'
import Toggler from './Toggler'

const StyledHeader = styled.div`
  ${''/* position: relative; */}
`

export default class Header extends React.Component {

  render () {
    return (
      <StyledHeader>
        <Logo />
        <Toggler
          className={this.props.className}
          height={25}
          barColor="rgb(50, 50, 50)"
          background-color=""
          handleToggle={this.props.handleToggle}
        />
      </StyledHeader>
    )
  }
}
