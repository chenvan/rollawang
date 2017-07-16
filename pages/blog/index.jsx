import React, { Component } from 'react'

import { Categories, Tags } from '../../components/SideBar'
import ArticleListView from '../../components/ArticleListView'
import PageNav from '../../components/PageNav'

export default class Blog extends Component {
  render () {
    let begin = (this.props.currentPage - 1) * this.props.articleShowNumber
    let end = this.props.currentPage * this.props.articleShowNumber
    return (
      <div className = 'outerFrame'>
        <div className = 'container'>
          <div className = 'leftSide'>
            <div className = 'sideBar'>
              <Categories
                categories = {this.props.blogCategories}
                click = {this.props.showKeywordArticleSortList}
              />
              <Tags
                tags = {this.props.blogTags}
                click = {this.props.showKeywordArticleSortList}
              />
            </div>
          </div>
          <div className = 'rightSide divideLineBlackColor'>
            <div className = 'main'>
              <div className = 'buttonZone'>
                {
                  this.props.keyword && (
                    <button
                      className = 'showAllArticle'
                      onClick = {() => {
                        this.props.showKeywordArticleSortList(undefined)
                      }}
                    >
                      显示所有文章
                    </button>
                  )
                }
                <form className = 'showTitle'>
                  显示：
                  <label>
                    <input
                      type = 'radio'
                      value = 'showSomeContent'
                      checked = {!this.props.onlyShowTitle}
                      onChange = {() => this.props.changeShowFormat(false)}
                    />
                    摘要
                  </label>
                  <label>
                    <input
                      type = 'radio'
                      value = 'showTitle'
                      checked = {this.props.onlyShowTitle}
                      onChange = {() => this.props.changeShowFormat(true)}
                    />
                    标题
                  </label>
                </form>
              </div>
              <ArticleListView
                articleSortList = {this.props.blogArticleSortList.slice(begin, end)}
                onlyShowTitle = {this.props.onlyShowTitle}
              />
              <PageNav
                totalPages = {this.props.totalPages}
                currentPage = {this.props.currentPage}
                changePageNumber = {this.props.changePageNumber}
                jumpToPagePopUp = {this.props.jumpToPagePopUp}
                scrollToTopAfterChangePageNumber = {true}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
