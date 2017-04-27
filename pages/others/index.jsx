import React, { Component } from 'react'

import Header from '../../components/Header'

export default class index extends Component {
  render () {
    return (
      <div>
        <Header site = 'others' />
        <div
          style = {{
            maxWidth: '960px',
            margin: 'auto',
            minHeight: '550px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '50px'
          }}>
          施工中...
        </div>
      </div>
    )
  }
}
