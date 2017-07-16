import React, { Component } from 'react'

export default class PageNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pagesView: this._generatePagesView(this.props.currentPage, this.props.totalPages)
    }
  }

  componentDidUpdate () {
    if (this.props.scrollToTopAfterChangePageNumber) {
      window.scrollTo(0, 0)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.currentPage !== nextProps.currentPage || this.props.totalPages !== nextProps.totalPages) {
      this.setState({pagesView: this._generatePagesView(nextProps.currentPage, nextProps.totalPages)})
    }
  }

  render () {
    return (
      <div className = 'pageNav' style = {this.props.style}>{this.state.pagesView}</div>
    )
  }

  _generatePagesView (currentPage, totalPages) {
    let pages = [<span key = 'previous' onClick = {this._changePageNumber.bind(this, currentPage - 1)}>{'<'}</span>]

    if (totalPages <= 11) {
      pages = pages.concat(this._generatePagesNumberView(1, currentPage, totalPages))
    } else {
      if (currentPage <= 6) {
        pages = pages.concat(this._generatePagesNumberView(1, currentPage, 9))
        pages.push(<span key = 'lastMore' onClick = {this._jumpToPagePopUp.bind(this)}>{'...'}</span>)
        pages.push(<span key = {totalPages} onClick = {this._changePageNumber.bind(this, totalPages)}>{totalPages}</span>)
      } else if (currentPage > 6 && totalPages - currentPage > 5) {
        pages.push(<span key = {1} onClick = {this._changePageNumber.bind(this, 1)}>{1}</span>)
        pages.push(<span key = 'firstMore' onClick = {this._jumpToPagePopUp.bind(this)}>{'...'}</span>)
        pages = pages.concat(this._generatePagesNumberView(currentPage - 3, currentPage, currentPage + 3))
        pages.push(<span key = 'lastMore' onClick = {this._jumpToPagePopUp.bind(this)}>{'...'}</span>)
        pages.push(<span key = {totalPages} onClick = {this._changePageNumber.bind(this, totalPages)}>{totalPages}</span>)
      } else {
        pages.push(<span key = {1} onClick = {this._changePageNumber.bind(this, 1)}>{1}</span>)
        pages.push(<span key = 'firstMore' onClick = {this._jumpToPagePopUp.bind(this)}>{'...'}</span>)
        pages = pages.concat(this._generatePagesNumberView(totalPages - 9, currentPage, totalPages))
      }
    }

    pages.push(<span key = 'next' onClick = {this._changePageNumber.bind(this, currentPage + 1)}>{'>'}</span>)

    return pages
  }

  _generatePagesNumberView (begin, current, end) {
    let pages = []

    for (let i = begin; i <= end; i++) {
      if (i === current) {
        pages.push(<span key = {i}>{i}</span>)
      } else {
        pages.push(
          <span key = {i} onClick = {this._changePageNumber.bind(this, i)}>{i}</span>
        )
      }
    }

    return pages
  }

  _changePageNumber (toPage) {
    this.props.changePageNumber(toPage)
  }

  _jumpToPagePopUp () {
    this.props.jumpToPagePopUp()
  }
}
