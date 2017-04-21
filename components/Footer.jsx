import React from 'react'

export default class Footer extends React.Component {
  render () {
    return (
      <footer className = 'footer'>
        <div className = 'container' style = {{paddingTop: '20px', paddingBottom: '10px'}}>
          <div className = 'rowDirection' style = {{display: 'flex', justifyContent: 'space-around'}}>
            <span>Power by</span>
            <a className = 'customLink' href = 'https://github.com/gatsbyjs/gatsby'>
              <img src = 'http://awangimage.b0.upaiyun.com/website/gatsby.png'
                width = {45}
                height = {45}
                title = 'gatsby'
              />
            </a>
            <a className = 'customLink' href = 'https://www.upyun.com/league'>
              <img
                src = 'http://awangimage.b0.upaiyun.com/upyun_new_logo_blue.png'
                title = '又拍云联盟'
              />
            </a>
            <a className = 'customLink' href = 'https://pages.github.com/'>
              <img
                src = 'http://awangimage.b0.upaiyun.com/website/GitHub.svg.png'
                title = 'github pages'
                width = {45}
                height = {45}
              />
            </a>
          </div>
          <div style = {{display: 'flex', justifyContent: 'center', marginBottom: '13px'}}>
            <span>Background Pic from <a href = 'https://unsplash.com/@ahmadreza_sajadi'>ahmadreza sajadi</a></span>
          </div>
          <div style = {{display: 'flex', justifyContent: 'center'}}>
            <a href = 'https://github.com/chenvan/rollawang'>网站源码</a>
          </div>
          <div style = {{display: 'flex', justifyContent: 'flex-end'}}>
            <span>联系方式</span>
            <a className = 'customLink' style = {{marginRight: '15px', marginLeft: '15px'}} href = 'mailto:van1989@foxmail.com'>
              <img
                src = 'http://awangimage.b0.upaiyun.com/website/mail.svg.png'
                title = 'van1989@foxmail.com'
                width = {40}
                height = {30}
              />
            </a>
            <a className = 'customLink' href = 'http://weibo.com/u/2204264062'>
              <img
                src = 'http://awangimage.b0.upaiyun.com/website/weibo.svg.png'
                title = 'AWang的微博'
                width = {37}
                height = {30}
              />
            </a>
          </div>
        </div>
      </footer>
    )
  }
}
