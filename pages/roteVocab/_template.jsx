import React, { Component } from 'react'

import Header from '../../components/Header'
import { changePageNumber, jumpToPagePopUp } from '../../components/PageAction'

export default class RoteVocabTemplate extends Component {
  constructor (props) {
    super(props)

    let [articleListAboutRoteVocabUseage, understandingAboutRoteVocab] = this.props.route.pages.reduce(([articleList, articleAboutUnderstanding], article) => {
      if (article.file.dirname === 'roteVocab' && article.file.ext === 'md') {
        if (article.data.categories === '透析法') {
          articleAboutUnderstanding = {
            title: article.data.title,
            path: article.path
          }
        } else {
          articleList.push({
            title: article.data.title,
            date: article.data.date,
            path: article.path
          })
        }
      }
      return [articleList, articleAboutUnderstanding];
    }, [[], {}])

    this.articleSortListAboutRoteVocabUseage = articleListAboutRoteVocabUseage.sort((articleA, articleB) => {
      let dateA = new Date(articleA.date)
      let dateB = new Date(articleB.date)

      return dateA < dateB ? 1 : dateA > dateB ? -1 : 0
    })

    this.understandingAboutRoteVocab = understandingAboutRoteVocab
    this.articleShowNumber = 5

    this.state = {
      currentPage: 1,
      totalPages: Math.ceil(this.articleSortListAboutRoteVocabUseage.length / this.articleShowNumber)
    }

    this._changePageNumber = changePageNumber.bind(this)
    this._jumpToPagePopUp = jumpToPagePopUp.bind(this)
  }

  render () {
    return (
      <div>
        <Header site = 'roteVocab'/>
        {
          React.cloneElement(this.props.children, {
            articleShowNumber: this.articleShowNumber,
            articleSortListAboutRoteVocabUseage: this.articleSortListAboutRoteVocabUseage,
            understandingAboutRoteVocab: this.understandingAboutRoteVocab,
            currentPage: this.state.currentPage,
            totalPages: this.state.totalPages,
            changePageNumber: this._changePageNumber,
            jumpToPagePopUp: this._jumpToPagePopUp
          })
        }
      </div>
    )
  }
}
