import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import Header from '../../components/Header'
import { changePageNumber, jumpToPagePopUp } from '../../components/PageAction'

const articleShowNumberPerPage = 10
const articleShowNumberPerPageWhenOnlyShowTitle = 20

export default class BlogTemplate extends React.Component {

  constructor(props){
    super(props)

    let [blogArticleList, blogCategories, blogTags] = this.props.route.pages.reduce(([articleList, categories, tags], article) => {
      if(article.file.dirname === 'blog' && article.file.ext === 'md'){

        let location = article.data.body.indexOf('<!--more-->');
        let shortContent = article.data.body.slice(0, location);

        articleList.push({
          title: article.data.title,
          date: article.data.date,
          path: article.path,
          category: article.data.categories,
          tags: article.data.tags,
          shortContent
        });
        //要把categories改为单数，要不人家会以为是数组
        if(categories.hasOwnProperty(article.data.categories)){
          categories[article.data.categories] += 1;
        }else{
          categories[article.data.categories] = 1;
        }

        article.data.tags.forEach((tag) => {
          if(tags.hasOwnProperty(tag)){
            tags[tag] += 1;
          }else{
            tags[tag] = 1;
          }
        })
      }

      return [articleList, categories, tags];
    }, [[], {}, {}]);

    this.blogArticleSortList = blogArticleList.sort((articleA, articleB) => {
      let dateA = new Date(articleA.date);
      let dateB = new Date(articleB.date);

      return dateA < dateB ? 1 : dateA > dateB ? -1 : 0;
    });

    this.blogCategories = blogCategories;
    this.blogTags = blogTags;

    this.state = {
      onlyShowTitle: false,
      articleShowNumber: articleShowNumberPerPage,
      blogArticleSortList: this.blogArticleSortList,
      keyword: undefined,
      currentPage: 1,
      totalPages: Math.ceil(this.blogArticleSortList.length / articleShowNumberPerPage)
    }

    this._showKeywordArticleSortList = this._showKeywordArticleSortList.bind(this)
    this._changeShowFormat = this._changeShowFormat.bind(this)

    this._changePageNumber = changePageNumber.bind(this)
    this._jumpToPagePopUp = jumpToPagePopUp.bind(this)
  }



  render(){

    return (
      <div>
        <Header site = 'blog' />
        {
          React.cloneElement(this.props.children,
            {
              onlyShowTitle: this.state.onlyShowTitle,
              articleShowNumber: this.state.articleShowNumber,
              blogArticleSortList: this.state.blogArticleSortList,
              keyword: this.state.keyword,
              currentPage: this.state.currentPage,
              totalPages: this.state.totalPages,
              blogCategories: this.blogCategories,
              blogTags: this.blogTags,
              showKeywordArticleSortList: this._showKeywordArticleSortList,
              changeShowFormat: this._changeShowFormat,
              changePageNumber: this._changePageNumber,
              jumpToPagePopUp: this._jumpToPagePopUp,
              articleShowNumber: this.state.articleShowNumber
            }
          )
        }
        {/*this.props.children*/}
      </div>
    )
  }

  _showKeywordArticleSortList(keyword) {

    if(JSON.stringify(keyword) !== JSON.stringify(this.state.keyword)){
      let nextArticlSortList, articleShowNumber;

      if(typeof keyword === 'object' && keyword.hasOwnProperty('category')) {

        nextArticlSortList = this.blogArticleSortList.filter((article) => {
          return article.category === keyword.category
        });

      }else if(typeof keyword === 'object' && keyword.hasOwnProperty('tag')) {

        nextArticlSortList = this.blogArticleSortList.filter((article) => {
          return article.tags.includes(keyword.tag)
        });

      }else {
        nextArticlSortList = this.blogArticleSortList
      }

      this.setState({
        currentPage: 1,
        //articleShowNumber,
        totalPages: Math.ceil(nextArticlSortList.length / this.state.articleShowNumber),
        blogArticleSortList: nextArticlSortList,
        keyword
      })
    }
  }

  _changeShowFormat(onlyShowTitle){
    let articleShowNumber = onlyShowTitle ? articleShowNumberPerPageWhenOnlyShowTitle : articleShowNumberPerPage,
        totalPages = Math.ceil(this.state.blogArticleSortList.length / articleShowNumber),
        currentPage = this.state.currentPage > totalPages ? totalPages : this.state.currentPage;

    this.setState({
      onlyShowTitle,
      articleShowNumber,
      totalPages,
      currentPage
    })
  }
}
