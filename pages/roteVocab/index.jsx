import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import ArticleListView from '../../components/ArticleListView'
import PageNav from '../../components/PageNav'

export default class RoteVocab extends React.Component {

    render() {
      let begin = (this.props.currentPage - 1) * this.props.articleShowNumber;
      let end = this.props.currentPage * this.props.articleShowNumber;
      return (
        <div>
          <div className = 'showBoard' style={{justifyContent: 'space-around', alignItems: 'center'}}>
            <div className = 'columnDirection' style = {{display: 'flex', alignItems: 'center'}}>
              <h2>透析记词</h2>
              <img src = 'http://awangimage.b0.upaiyun.com/website/roteVocabIcon.png' width = {130} height = {130}/>
              <strong style = {{color: '#607D8B'}}>更方便地使用透析法学英语</strong>
            </div>
            <img src = 'http://awangimage.b0.upaiyun.com/website/1.png'/>
          </div>
          <div style = {{backgroundColor: '#64B5F6', color: 'white'}}>
            <div className = 'showBoard columnDirection'>
              <h2 style = {{alignSelf: 'center'}}>何为透析法？</h2>
              <div style = {{display: 'flex', justifyContent: 'space-around'}}>
                <div className = 'columnDirection' style = {{display: 'flex', alignItems: 'center'}}>
                  <img src = 'http://awangimage.b0.upaiyun.com/website/wujunyi.png' width = {100} height = {100}/>
                  <span>伍君仪</span>
                  <p>透析英语创始人</p>
                  <a className = 'customLink' href = 'http://blog.sina.com.cn/s/blog_4b5cb56b0100088u.html'>
                    透析学习法详解
                  </a>
                </div>
                <div className = 'columnDirection' style = {{display: 'flex', alignItems: 'center'}}>
                  <img src = 'http://awangimage.b0.upaiyun.com/website/naiba.png' width = {100} height = {100}/>
                  <span>恶梦的奶爸</span>
                  <p>奶爸的英语教室创建者</p>
                  <a className = 'customLink' href = 'https://site.douban.com/195168/widget/notes/11656155/note/249838060/'>
                    透析英语——只读经典
                  </a>
                </div>
                <div className = 'columnDirection' style = {{display: 'flex', alignItems: 'center'}}>
                  <img src = 'http://awangimage.b0.upaiyun.com/website/awang.png' width = {100} height = {100}/>
                  <span>AWang</span>
                  <p>透析记词APP作者</p>
                  <Link className = 'customLink' to = {prefixLink(this.props.understandingAboutRoteVocab.path)}>
                    个人对透析法的理解
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className = 'showBoard' style = {{justifyContent: 'space-around'}}>
            <img src = 'http://awangimage.b0.upaiyun.com/website/9.png'/>
            <div className = 'columnDirection' style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <h2>应用下载地址</h2>
              <a href = 'http://www.coolapk.com/apk/com.rotevocabapp'>
                <img  src = 'http://awangimage.b0.upaiyun.com/website/coolmarket.png' width = {80} height = {80} alt = '酷市场'/>
              </a>
              <a href = 'http://app.mi.com/details?id=com.rotevocabapp&ref=search'>
                <img  src = 'http://awangimage.b0.upaiyun.com/website/xiaomi.png'  width = {70} height = {70} alt = '小米应用商店'/>
              </a>
              <a href = 'http://sj.qq.com/myapp/detail.htm?apkName=com.rotevocabapp'>
                <img  src = 'http://awangimage.b0.upaiyun.com/website/tencent.png'  width = {70} height = {70} alt = '应用宝'/>
              </a>
              <p>点击图标即可进入下载地址</p>
            </div>
          </div>
          <div style = {{backgroundColor: '#E57373', color: 'white'}}>
            <div className = 'showBoard columnDirection'>
              <h2 style = {{alignSelf: 'center'}}>应用说明</h2>
              <div style = {{alignSelf: 'center'}}>
                <ArticleListView
                  articleSortList = {this.props.articleSortListAboutRoteVocabUseage.slice(begin, end)}
                  onlyShowTitle = {true}
                />
              </div>
              <PageNav
                totalPages = {this.props.totalPages}
                currentPage = {this.props.currentPage}
                changePageNumber = {this.props.changePageNumber}
                jumpToPagePopUp = {this.props.jumpToPagePopUp}
                scrollToTopAfterChangePageNumber = {false}
              />
            </div>
          </div>
          <div className = 'showBoard columnDirection'>
            <h2 style = {{alignSelf: 'center'}}>开源地址</h2>
            <i className="fa fa-github fa-3x" aria-hidden="true" style = {{alignSelf: 'center'}}/>
            <a href = 'https://github.com/chenvan/RoteVocabApp' style = {{alignSelf: 'center'}}>
              透析记词
            </a>
          </div>
        </div>
      )
    }
}
