import React, { Component } from 'react'

import Footer from '../components/Footer'

import '../css/markdown-styles'
import '../css/website.css'

export default class RootTemplate extends Component {

  render () {
    return (
      <div>
        { this.props.children }
        <Footer currentPath = {this.props.children.props.location.pathname}/>
      </div>
    )
  }
}
