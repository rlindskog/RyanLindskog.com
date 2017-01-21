import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {

  }
`

const CopyRight = styled.div`
  
  @media screen and (min-width: 768px) {

  }
`

export default class Footer extends React.Component {
  render () {
    return (
      <StyledFooter>
        {/* <CopyRight>site design / logo © 2017 Stack Exchange Inc;</CopyRight> */}
      </StyledFooter>
    )
  }
}
