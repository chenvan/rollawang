import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class Index extends React.Component {
  render () {
    return (
      <div className = 'firstScreen' style = {{display: 'flex'}}>
          <div className = 'stars'></div>
          <div className = 'twinkling'></div>
          <div className ='outerFrame' style = {{zIndex: 3, color: 'white'}}>
            <h1 id = 'webSiteTitle'>AWang is Rolling</h1>
            <div className = 'container'>
              <div className = 'leftSide'></div>
              <div className = 'rightSide divideLineWhiteColor'>
                <div><Link className = 'subScreen' to = {prefixLink('/blog/')}>博客</Link></div>
                <div><Link className = 'subScreen' to = {prefixLink('/roteVocab/')}>透析记词</Link></div>
                <div><Link className = 'subScreen' to = {prefixLink('/others/')}>其它</Link></div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
