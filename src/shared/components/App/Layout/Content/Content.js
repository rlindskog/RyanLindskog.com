import React from 'React'
import styled from 'styled-components'
import { safeConfigGet } from '../../../../utils/config'
import { Match, Miss } from 'react-router'
import { CodeSplit } from 'code-split-component'
// import routeConfig from '../route-config'
import Error404 from '../../Error404'
import {
  About,
  Admin,
  Blog,
  Home,
  Skills,
  Portfolio
} from '../../../App'

const StyledContent = styled.div`
  line-height: 200px;
  margin: 8px;
  @media screen and (min-width: 768px) {
    line-height: 300px;
    margin-left: 15%;
    margin-right: 15%;
  };
`

export default class Content extends React.Component {
  render () {
    return (
      <StyledContent>
        <Match
          exactly
          pattern="/"
          render={routerProps =>
            <CodeSplit chunkName="home" modules={{ Home: require('../../Home') }}>
              { ({ Home }) => Home && <Home {...routerProps} /> }
            </CodeSplit>
          }
        />
        <Match
          pattern="/about"
          render={routerProps =>
            <CodeSplit chunkName="home" modules={{ About: require('../../About') }}>
              { ({ About }) => About && <About {...routerProps} /> }
            </CodeSplit>
          }
        />
        <Match
          pattern="/blog"
          render={routerProps =>
            <CodeSplit chunkName="home" modules={{ Blog: require('../../Blog') }}>
              { ({ Blog }) => Blog && <Blog {...routerProps} /> }
            </CodeSplit>
          }
        />
        <Match
          pattern="/skills"
          render={routerProps =>
            <CodeSplit chunkName="home" modules={{ Skills: require('../../Skills') }}>
              { ({ Skills }) => Skills && <Skills {...routerProps} /> }
            </CodeSplit>
          }
        />
        <Match
          pattern="/portfolio"
          render={routerProps =>
            <CodeSplit chunkName="home" modules={{ Portfolio: require('../../Portfolio') }}>
              { ({ Portfolio }) => Portfolio && <Portfolio {...routerProps} /> }
            </CodeSplit>
          }
        />
        <Match
          pattern="/admin"
          render={routerProps =>
            <CodeSplit chunkName="home" modules={{ Admin: require('../../Admin') }}>
              { ({ Admin }) => Admin && <Admin {...routerProps} /> }
            </CodeSplit>
          }
        />
        <Miss component={Error404} />
      </StyledContent>
    )
  }
}
