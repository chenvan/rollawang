import React from 'react'
import { Link } from 'react-router'

import { prefixLink } from 'gatsby-helpers'

export default class Header extends React.Component {
  render () {
    let { site } = this.props

    return (
      <header className = 'header'>
        <div className = 'container'>
          <div className = 'websiteTitle'>
            <h1><Link to = {prefixLink('/')} className = 'customLink'>AWang is Rolling</Link></h1>
          </div>
          <div className = 'websiteNav'>
            {site !== 'blog' && <span><Link to = {prefixLink('/blog/')}>博客</Link></span>}
            {site !== 'roteVocab' && <span><Link to = {prefixLink('/roteVocab/')}>透析记词</Link></span>}
            {site !== 'others' && <span><Link to = {prefixLink('/others/')}>其它</Link></span>}
          </div>
        </div>
      </header>
    )
  }
}
