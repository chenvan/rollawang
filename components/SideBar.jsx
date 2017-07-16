import React, { Component } from 'react'

class Categories extends Component {
  render () {
    let { categories } = this.props
    let table = Object.keys(categories).map((category, index) => {
      return (
        <tr key = {index}>
          <td>
              <a
                href = '#'
                onClick = {this._handleClick.bind(this, category)}
              >
                {category}
              </a>
          </td>
          <td>{categories[category]}</td>
        </tr>
      )
    })

    return (
      <table id = 'categories'><tbody>{ table }</tbody></table>
    )
  }

  _handleClick (category, e) {
    e.preventDefault()
    this.props.click({category})
  }
}

class Tags extends Component {
  render () {
    let { tags } = this.props

    let tagsCollection = Object.keys(tags).map((tag, index) => {
      let fontSize = Math.floor(20 + tags[tag])
      fontSize = fontSize > 32 ? 32 : fontSize
      return (
        <a
          href = '#'
          onClick = {this._handleClick.bind(this, tag)}
          key = {index}
          style = {{fontSize: fontSize + 'px'}}
        >
          {tag}
        </a>
      )
    })

    return <p id = 'tags'>{ tagsCollection }</p>
  }

  _handleClick (tag, e) {
    e.preventDefault()
    this.props.click({tag})
  }
}

class Toc extends Component {
  render () {
    let reg = /<h[2-6].*?id="(.+?)".*?>(.+?)<\/h[2-6]>/g
    let title
    let showList = []
    while ((title = reg.exec(this.props.article)) !== null) {
      let id = title[1]
      let titleName = title[2]

      showList.push(
        <li key = {id}>
          <a href = {'#' + id}>
            {titleName}
          </a>
        </li>
      )
    }

    if (showList.length > 0) {
      return (
        <div id = 'toc'>
          <p>目录</p>
          <ul>
            {showList}
          </ul>
          <hr />
        </div>
      )
    } else {
      return null
    }
  }
}

export { Categories, Tags, Toc }
