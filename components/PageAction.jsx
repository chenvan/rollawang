function changePageNumber (toPage) {
  if (!(this.state.currentPage && this.state.totalPages)) {
    throw new Error('this.state has no currentPage or totalPages setting')
  }

  if (toPage > 0 && toPage <= this.state.totalPages) {
    this.setState({
      currentPage: toPage
    })
  }
}

function jumpToPagePopUp () {
  let toPage = window.prompt('跳转到(范围1-' + this.state.totalPages + '):', '')
  toPage = parseInt(toPage, 10)
  if (!isNaN(toPage)) {
    changePageNumber.call(this, toPage)
  } else {
    throw new Error('请输入数字')
  }
}

export { changePageNumber, jumpToPagePopUp }
