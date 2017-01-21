import React from 'react'
import Helmet from 'react-helmet'

export default class Blog extends React.Component {
  render () {
    return (
      <div>
        <Helmet title="Blog" />
        <p>This will be the Blog page.</p>
      </div>
    )
  }
}
