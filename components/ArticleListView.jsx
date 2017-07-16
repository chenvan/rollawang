import React, { Component } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

export default class ArticleListView extends Component {
  render () {
    let { articleSortList, onlyShowTitle } = this.props

    return (
      <div style = {this.props.style}>
        {
          articleSortList.map((article, index) => {
            return (
              <ArticleRow
                key = {index}
                article = {article}
                onlyShowTitle = {onlyShowTitle}
              />
            )
          })
        }
      </div>
    )
  }
}

class ArticleRow extends Component {
  render () {
    let { article, onlyShowTitle } = this.props

    if (onlyShowTitle) {
      return (
        <div>
          <time>{(new Date(article.date)).toLocaleDateString(['zh'])}</time>
          <h3><Link to = { prefixLink(article.path) }>{article.title}</Link></h3>
        </div>
      )
    } else {
      return (
        <div>
          <h1>{article.title}</h1>
          <div dangerouslySetInnerHTML = {{__html: article.shortContent}} />
          <h4><Link to = { prefixLink(article.path) }>Read More</Link></h4>
          <hr />
        </div>
      )
    }
  }
}
