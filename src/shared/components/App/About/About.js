/* @flow */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 4em;
  background: blue;
`

export default class About extends React.Component {

  render () {
    return (
      <div>
        <Helmet title="About" />
        <p>This is the about Page!!</p>
      </div>
    )
  }
}
