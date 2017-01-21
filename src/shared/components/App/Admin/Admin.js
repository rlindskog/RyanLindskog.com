import React from 'react'
import styled from 'styled-components'

const InputBox = styled.input`
  display: inline box;
  background-color: red;
`

export default class Admin extends React.Component {

  render () {
    return (
      <div>
        Ryan Lindskog
        <form>
          <InputBox id="Username" type="text" />
          <InputBox id="password" type="password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
