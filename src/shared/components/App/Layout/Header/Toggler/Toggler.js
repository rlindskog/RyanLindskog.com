import React from 'react'
import styled, { keyframes } from 'styled-components'

const Burger = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 2;
  user-select: none;
  cursor: pointer;
  display: inline-block
  height: ${props => `${props.height}px`};
  width: ${props => `${props.height * 1.6}px`};
  padding: ${props => `${props.height / 1.5}px`};
  margin: -${props => `${props.height / 2}px`};

  ${''/* experiment */}
  ${''/* div:nth-child(1) {
    margin-top: ${props => {props.height/2}}px;
    margin-top: ${props => {props.height/2}}px;
    margin-top: ${props => {props.height/2}}px;
    margin-top: 0px;
  }

  div:nth-child(3) {
    margin-top: ${props => {props.height/2}}px;
    margin-top: ${props => {props.height/2}}px;
    margin-top: ${props => {props.height/2}}px;
    margin-top: ${props => {props.height}}px;
  } */}

  @media screen and (min-width: 768px) {
    display: none;
  }
  &.active div:nth-child(1) {
    animation: ${props => keyframes`
      0% {margin-top: 0px; transform: rotate(0deg);}
      50% {margin-top: ${props.height / 2}px; transform: rotate(0deg);}
      75% {margin-top: ${props.height / 2}px; transform: rotate(0deg);}
      100% {margin-top: ${props.height / 2}px; transform: rotate(-45deg)}
    `} .5s linear forwards;
  }

  &.active div:nth-child(2) {
    animation: ${props => keyframes`
      0% {transform: rotate(0deg)}
      50% {transform: rotate(0deg)}
      75% {transform: rotate(0deg)}
      100% {transform: rotate(-45deg)}
    `} .5s linear forwards;
  }

  &.active div:nth-child(3) {
    animation: ${props => keyframes`
      0% {margin-top: ${props.height}px; transform: rotate(0deg)}
      50% {margin-top: ${props.height / 2}px; transform: rotate(0deg)}
      75% {margin-top: ${props.height / 2}px; transform: rotate(0deg)}
      100% {margin-top: ${props.height / 2}px; transform: rotate(45deg)}
    `} .5s linear forwards;
  }
  /*unchecking the hamburger and running animations*/
  &.inactive div:nth-child(1) {
    animation: ${props => keyframes`
      0% {margin-top: ${props.height / 2}px; transform: rotate(-45deg)}
      50% {margin-top: ${props.height / 2}px; transform: rotate(0deg);}
      75% {margin-top: ${props.height / 2}px; transform: rotate(0deg);}
      100% {margin-top: 0px; transform: rotate(0deg);}
    `} .5s linear forwards;
  }

  &.inactive div:nth-child(2) {
    animation: ${props => keyframes`
      0% {transform: rotate(-45deg)}
      50% {transform: rotate(0deg)}
      75% {transform: rotate(0deg)}
      100% {transform: rotate(0deg)}
    `} .5s linear forwards;
  }

  &.inactive div:nth-child(3) {
    animation: ${props => keyframes`
      0% {margin-top: ${props.height / 2}px; transform: rotate(45deg)}
      50% {margin-top: ${props.height / 2}px; transform: rotate(0deg)}
      75% {margin-top: ${props.height / 2}px; transform: rotate(0deg)}
      100% {margin-top: ${props.height}px; transform: rotate(0deg)}
    `} .5s linear forwards;
  }
`

const Bar = styled.div`
  background-color: ${props => props.barColor};
  width: inherit;
  height: ${props => `${props.height * 0.2}px`};
  position: fixed;
  vertical-align: middle;
  margin-top: ${
    props => props.two ? `${props.height / 2}px` : props.three ? `${props.height}px` : `${0}px`
  }
`

export default class Toggler extends React.Component {
  render () {
    return (
      <Burger id="burger" className={this.props.className} onClick={this.props.handleToggle} height={this.props.height}>
        <Bar one height={this.props.height} barColor={this.props.barColor} />
        <Bar two height={this.props.height} barColor={this.props.barColor} />
        <Bar three height={this.props.height} barColor={this.props.barColor} />
      </Burger>
    )
  }
}
