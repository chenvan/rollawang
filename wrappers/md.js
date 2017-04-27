import React, { Component } from 'react'
import { Link } from 'react-router'

import 'css/markdown-styles.css'
import 'css/website.css'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { Toc } from '../components/SideBar'
// import Gitment from 'gitment'

export default class mdWrapper extends Component {
  componentDidMount () {
    if (this.props.blogArticleSortList) {
      const commentScript = document.createElement('script')
      commentScript.src = 'https://cdn-city.livere.com/js/embed.dist.js'
      commentScript.async = true
      document.body.appendChild(commentScript)
    }
  }

  render () {
    const post = this.props.route.page.data

    let navElement = []

    if (this.props.blogArticleSortList) {
      let keyword = undefined
      let articleId = this.props.blogArticleSortList.findIndex((article) => {
        return article.title === post.title
      })
      let pathLastIndex = this.props.blogArticleSortList[articleId].path.length - 1
      let pathSlashIndex = this.props.blogArticleSortList[articleId].path.lastIndexOf('/', pathLastIndex - 1)
      let upperUrl = this.props.blogArticleSortList[articleId].path.slice(0, pathSlashIndex + 1)

      // this.props.keyword is undefined or object
      if (this.props.keyword) {
        [keyword] = Object.values(this.props.keyword)
      }

      if (articleId > 0) {
        navElement.push(
            <li key = 'prev'>
                <Link to = {prefixLink(this.props.blogArticleSortList[articleId - 1].path)}>
                  {keyword ? (keyword + ': 上一篇') : ('上一篇')}
                </Link>
            </li>
        )
      }

      navElement.push(
        <li key = 'upper'>
          <Link to = {prefixLink(upperUrl)}>
            返回
          </Link>
        </li>
      )

      if (articleId < this.props.blogArticleSortList.length - 1) {
        navElement.push(
          <li key = 'next'>
            <Link to = {prefixLink(this.props.blogArticleSortList[articleId + 1].path)}>
              {keyword ? (keyword + '：下一篇') : ('下一篇')}
            </Link>
          </li>
        )
      }
    } else {
      navElement.push(
        <li key = 'back'>
          {
            this.props.route.page.path === '/404.html' ? (
              <Link to = {prefixLink('/')}>
                返回主页
              </Link>
            ) : (
              <a href = '#'
                onClick = {(e) => {
                  e.preventDefault()
                  this.props.history.goBack()
                }}
              >
                返回
              </a>
            )
          }
        </li>
      )
    }

    return (
      <div className="container">
        <div className = 'blog'>
          <div className = 'main'>
            <Helmet
              title={`${config.siteTitle} | ${post.title}`}
            />
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
            {
              this.props.blogArticleSortList && (
                <div id = 'commentZone'>
                  <div id="lv-container" data-id="city" data-uid="MTAyMC8yODM5Mi80OTYz"></div>
                </div>
              )
            }
          </div>
          <div className = 'sideBar'>
            <Toc article = {post.body} />
            <div className = 'mdArticleNav'>
              <ul>
                {navElement}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
