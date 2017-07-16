import React from 'react'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from './utils/typography'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  propTypes () {
    return {
      body: React.PropTypes.string
    }
  },
  render () {
    let css
    let preLoadBundleLink
    let bundleScript = <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{__html: require('!raw!./public/styles.css')}} />
      preLoadBundleLink = <link rel='preload' href={`http://awangimage.b0.upaiyun.com/website/bundle.js?t=${BUILD_TIME}`} as='script' />
      bundleScript = <script src={`http://awangimage.b0.upaiyun.com/website/bundle.js?t=${BUILD_TIME}`} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {preLoadBundleLink}
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/stars_custom1.png' as='image' media='(min-width: 722px)' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/stars_custom2.png' as='image' media='(max-width: 721px)' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/twinkling.png' as='image' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/weibo.svg.png' as='image' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/mail.svg.png' as='image' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/GitHub.svg.png' as='image' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/upyun_new_logo_blue.png' as='image' />
          <link rel='preload' href='http://awangimage.b0.upaiyun.com/website/gatsby.png' as='image' />
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {bundleScript}
        </body>
      </html>
    )
  }
})
