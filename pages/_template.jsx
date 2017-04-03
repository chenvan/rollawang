import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link, Route } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import Footer from '../components/Footer'

import '../css/markdown-styles'
import '../css/website.css'


export default class RootTemplate extends React.Component {

  render(){

    return (
      <div>
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
/*
RootTemplate.protoTypes = {
    children: React.PropTypes.any
};

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  render () {

    //console.log(this.props);
    //console.log(this.context)
    return (
      <div>
        <Headroom
          wrapperStyle={{
            marginBottom: rhythm(1),
          }}
          style={{
            background: 'lightgray',
          }}
        >
          <Container
            style={{
              maxWidth: 960,
              paddingTop: 0,
              padding: `${rhythm(1)} ${rhythm(3/4)}`,
            }}
          >
            <Link
              to={prefixLink('/')}
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >
              AWang is Rolling
            </Link>
          </Container>
        </Headroom>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3/4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children}
          {this.props.location.pathname !== "/" && <button onClick = {() => this.props.history.goBack()}>返回</button>}

        </Container>
      </div>
    )
  },
})*/
