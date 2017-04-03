import React from 'react'
import { Link, Route } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Categories extends React.Component{
  render(){
    let { categories } = this.props;
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
      );
    })

    return (
      <table><tbody>{ table }</tbody></table>
    )
  }

  _handleClick(category, e) {
    e.preventDefault();
    this.props.click({category});
  }
}

class Tags extends React.Component{

  render(){

    let { tags } = this.props;

    let tagsCollection = Object.keys(tags).map((tag, index) => {
      let fontSize = Math.floor(16 + tags[tag])
      fontSize = fontSize > 30 ? 30 : fontSize;
      return (
        <a
          href = '#'
          onClick = {this._handleClick.bind(this, tag)}
          key = {index}
          style = {{fontSize: fontSize+'px'}}
        >
          {tag}
        </a>

      );
    });

    return <p>{ tagsCollection }</p>
  }

  _handleClick(tag, e) {
    e.preventDefault();
    this.props.click({tag});
  }
}

class Toc extends React.Component {

  render() {
    let reg = /<h[2-6].*?id="(.+?)".*?>(.+?)<\/h[2-6]>/g
    let title;
    let showList = [];
    while((title = reg.exec(this.props.article)) !== null){

      let id = title[1];
      let titleName = title[2];

      showList.push(
        <li key = {id}>
          <a href = {'#'+id}>
            {titleName}
          </a>
        </li>
      )
    }

    if(showList.length > 0){
      return (
        <div>
          <p>目录</p>
          <ul className = 'Toc'>
            {showList}
          </ul>
          <hr />
        </div>
      );
    }
    else{
      return null;
    }
  }
}

export { Categories, Tags, Toc };
