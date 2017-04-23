import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <div className = 'frontDoor'>
          <div className = 'stars'></div>
          <div className = 'twinkling'></div>
          <div className = 'name'>
            <span>AWang </span>
            <span>is R</span>
            <span className = 'loader'></span>
            <span>ing</span>
          </div>
        </div>
        <div className = 'project'>
          <div><Link to = {prefixLink('/blog/')}>博客</Link></div>
          <div><Link to = {prefixLink('/roteVocab/')}>透析记词</Link></div>
          <div><Link to = {prefixLink('/others/')}>其它</Link></div>
        </div>
      </div>
    )
  }
}
