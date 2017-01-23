import React from 'React'
import styled, { keyframes } from 'styled-components'
import NormalDiv from './normalize'
// import Modernizr from 'modernizr'
import Helmet from 'react-helmet'
import Header from './Header'
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'
import { safeConfigGet } from '../../../utils/config'

const Global = styled(NormalDiv)`
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  margin-top: -8px;
  margin-left: -8px;
`

const Movable = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  transition: margin .5s;
  z-index: 2;
  background-color: white;
  &.active {
    margin-right: 150px;
    margin-left: -150px;
  }
  &.inactive {
    margin-right: 0px;
    margin-left: 0px;
  }
  @media screen and (min-width: 748px) {

  }
`

const DevAnalytics = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  border: solid green;
  z-index: 3;
`

export default class Layout extends React.Component {
  constructor () {
    super()
    this.state = {
      toggled: false,
      toggleClassName: '', // default to nothing so no animations occur
      width: 0,
      mobile: true,
      scrollPos: process.env.IS_CLIENT ? window.pageYOffset : 0
    }
  }

  updateDimensions () {
    if (process.env.IS_CLIENT) {
      const width = window.innerWidth
      this.setState({ width })
      setImmediate(() => {
        if (width >= 768) {
           // was mobile, now not mobile
          if (this.state.mobile) {
            console.log('NOT MOBILE!')
            this.setState({ mobile: false })
            this.setState({ toggled: false })
            this.setState({ toggleClassName: '' })
          }
        } else {
          // was not mobile, now mobile
          if (!this.state.mobile) {
            console.log('MOBILE!')
            this.setState({ mobile: true })
          }
        }
      })
    }
  }

  componentWillMount () {
    if (process.env.IS_CLIENT) {
      this.updateDimensions = this.updateDimensions.bind(this)
      this.updateDimensions()
    }
  }

  componentDidMount () {
    if (process.env.IS_CLIENT) {
      let resizeId
      window.addEventListener('resize', (e) => {
        clearTimeout(resizeId)
        resizeId = setTimeout(this.updateDimensions, 250)
      })
      window.addEventListener('scroll', (e) => {
        const scrollPos = window.pageYOffset
        this.setState({ scrollPos })
      })
    }
  }

  componentWillUnmount () {
    if (process.env.IS_CLIENT) {
      window.removeEventListener('resize', this.updateDimensions)
    }
  }

  handleToggle (e) {
    if (this.state.mobile) {
      e.preventDefault()
      this.setState({ toggled: !this.state.toggled })
      if (this.state.toggled) {
        this.setState({ toggleClassName: 'inactive' })
      } else {
        this.setState({ toggleClassName: 'active' })
      }
    }
  }

  handleNavClick () {
    if (this.state.mobile) {
      this.setState({ toggled: !this.state.toggled })
      if (this.state.toggled) {
        this.setState({ toggleClassName: 'inactive' })
      } else {
        this.setState({ toggleClassName: 'active' })
      }
    }
  }

  render () {
    return (
      <Global>
        <Helmet
          htmlAttributes={safeConfigGet(['htmlPage', 'htmlAttributes'])}
          titleTemplate={safeConfigGet(['htmlPage', 'titleTemplate'])}
          defaultTitle={safeConfigGet(['htmlPage', 'defaultTitle'])}
          meta={safeConfigGet(['htmlPage', 'meta'])}
          link={safeConfigGet(['htmlPage', 'links'])}
          script={safeConfigGet(['htmlPage', 'scripts'])}
        />
        <Nav
          className={this.state.toggleClassName}
          toggled={this.state.toggled}
          handleClick={this.handleNavClick.bind(this)}
        />
        <Movable id="movable" mobile={this.state.mobile} className={this.state.toggleClassName}>
          <Header
            className={this.state.toggleClassName}
            handleToggle={this.handleToggle.bind(this)}
            toggled={this.state.toggled}
          />
          <Content id="content" width={this.state.width} />
          <Footer id="footer" width={this.state.width} />

        </Movable>

        <DevAnalytics>
          {/* <ul>
            {
            this.state.map(item => (
            <li>
            <span>
            <strong>{item}</strong>{this.state.scrollPos}
            </span>
            </li>
            ))
            }
          </ul> */}
          <ul>
            <li>
              <span>
                <strong>scrollPos:                      </strong>{this.state.scrollPos}
              </span>
            </li>
            <li>
              <span>
                <strong>mobile:                      </strong>{this.state.mobile ? 'mobile' : 'desktop'}
              </span>
            </li>
            <li>
              <span>
                <strong>toggled:                      </strong>{this.state.toggled ? 'toggled' : 'not toggled'}
              </span>
            </li>
            <li>
              <span>
                <strong>toggleClassName:                      </strong>{this.state.toggleClassName || 'None'}
              </span>
            </li>
          </ul>
        </DevAnalytics>

      </Global>
    )
  }
}
