import React from 'react'
import { Link } from 'react-router'

import { prefixLink } from 'gatsby-helpers'

export default class Header extends React.Component {
  render () {
    let { site } = this.props

    return (
      <header id = 'header'>
        <div className = 'outerFrame'>
          <Link to = {prefixLink('/')} id = 'headTitle'>AWang is Rolling</Link>
          <div className = 'container'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineWhiteColor headerSubTitle'>
              {site !== 'blog' && <div><Link to = {prefixLink('/blog/')}>博客</Link></div>}
              {site !== 'roteVocab' && <div><Link to = {prefixLink('/roteVocab/')}>透析记词</Link></div>}
              {site !== 'others' && <div><Link to = {prefixLink('/others/')}>其它</Link></div>}
            </div>
          </div>
        </div>
      </header>
    )
  }
}
