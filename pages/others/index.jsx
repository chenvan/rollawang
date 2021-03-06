import React, { Component } from 'react'

import Header from '../../components/Header'

export default class index extends Component {
  render () {
    return (
      <div>
        <Header site = 'others' />
        <div className = 'outerFrame' id ='othersPage'>
          <div className = 'container upperBlock'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineBlackColor'>
            </div>
          </div>
          <div className = 'container middleBlock'>
            <h1 className = 'middleBlockLeft'>施工中...</h1>
            <div className = 'middleBlockRight'></div>
          </div>
          <div className = 'container bottomBlock'>
            <div className = 'leftSide'></div>
            <div className = 'rightSide divideLineBlackColor'>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
