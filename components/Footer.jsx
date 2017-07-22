import React from 'react'

export default class Footer extends React.Component {
  
  render () {
    let footerStyle = this.props.currentPath === '/' ? {} : {borderTop: '20px solid black'}
    return (
      <footer id = 'footer' style = {footerStyle}>
        <div className = 'outerFrame'>
          <div className = 'container'>
            <div className = 'leftSide' id = 'footerLeftSide'>
                <div className = 'specialFont' id = 'footerLeftSideWord'>
                  Power by
                </div>
                <div className = 'tksListItem'>
                  <a href = 'https://www.upyun.com/league'>
                    <img
                      src = 'http://awangimage.b0.upaiyun.com/upyun_new_logo_blue.png'
                      title = '又拍云联盟'
                    />
                  </a>
                </div>
                <div className = 'tksListItem'>
                  <a href = 'https://github.com/gatsbyjs/gatsby'>
                    <img src = 'http://awangimage.b0.upaiyun.com/website/gatsby.png'
                      width = {45}
                      height = {45}
                      title = 'gatsby'
                    />
                  </a>
                </div>
                <div className = 'tksListItem'>
                  <a href = 'https://pages.github.com/'>
                    <img
                      src = 'http://awangimage.b0.upaiyun.com/website/GitHub.svg.png'
                      title = 'github pages'
                      width = {45}
                      height = {45}
                    />
                  </a>
                </div>
            </div>
            <div className = 'rightSide divideLineBlackColor'>
              <div style = {{padding: '30px 0px 10px 0px'}}>星空背景来自<a className = 'specialFont' href = 'https://codepen.io/WebSonick/'>WebSonick</a></div>
              <div style = {{padding: '30px 0px 10px 0px'}}>某些图标来自<a className = 'specialFont' href = 'https://github.com/nullice/NViconsLib_Silhouette'>NViconsLib</a></div>
              <div style = {{padding: '30px 0px 10px 0px', fontWeight: 'bold'}}><a href = 'https://github.com/chenvan/rollawang'>网站源码</a></div>
              <div style = {{padding: '30px 0px 10px 0px'}}>
                <a className = 'customLink' style = {{marginRight: '15px'}} href = 'mailto:van1989@foxmail.com'>
                  <img
                    src = 'http://awangimage.b0.upaiyun.com/website/mail.svg.png'
                    title = 'van1989@foxmail.com'
                    width = {40}
                    height = {30}
                    style = {{marginBottom: '0px'}}
                  />
                </a>
                <a className = 'customLink' href = 'http://weibo.com/u/2204264062'>
                  <img
                    src = 'http://awangimage.b0.upaiyun.com/website/weibo.svg.png'
                    title = 'AWang的微博'
                    width = {37}
                    height = {30}
                    style = {{marginBottom: '0px'}}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
