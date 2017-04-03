import React from 'react'
import { Link } from 'react-router'

import 'css/markdown-styles.css'
import 'css/website.css'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { Toc } from '../components/SideBar'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    //console.log(this.props)
    const post = this.props.route.page.data

    let navElement = [];

    if(this.props.blogArticleSortList){
      let keyword = undefined,
          articleId = this.props.blogArticleSortList.findIndex((article) => {
            return article.title === post.title
          }),
          pathLastIndex = this.props.blogArticleSortList[articleId].path.length - 1,
          pathSlashIndex = this.props.blogArticleSortList[articleId].path.lastIndexOf('/', pathLastIndex - 1),
          upperUrl = this.props.blogArticleSortList[articleId].path.slice(0, pathSlashIndex + 1);

      //console.log('pathSlashIndex', pathSlashIndex);
      //console.log('upperUrl', upperUrl);

      //this.props.keyword is undefined or object
      if(this.props.keyword){
        [keyword] = Object.values(this.props.keyword)
      }

      if(articleId > 0){
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

      if(articleId < this.props.blogArticleSortList.length - 1){
        navElement.push(
          <li key = 'next'>
            <Link to = {prefixLink(this.props.blogArticleSortList[articleId + 1].path)}>
              {keyword ? (keyword + '：下一篇') : ('下一篇')}
            </Link>
          </li>
        )
      }
    }else{
      navElement.push(
        <li>
          <a href = '#'
             key = 'back'
             onClick = {(e) => {
               e.preventDefault()
               this.props.history.goBack()
             }}
          >
            返回
          </a>
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
  },
})
